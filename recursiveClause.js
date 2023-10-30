const aggregateClause = (
    parseFn,
    criteriaOperator = 'AND',
    ...extraIndexes
) => {
    return (acc, currentValue, currentIndex) => {
        const { clause, params } = parseFn(currentValue, currentIndex, criteriaOperator, ...extraIndexes) || {};
        
        if (!clause) return acc;

        const aggClause = [
            ...(acc?.clause ? [acc.clause] : []),
            clause,
        ];

        return {
            clause: aggClause.length > 1 ? `(${ aggClause.join(` ${criteriaOperator} `) })` : aggClause.toString(),
            params: [
                ...(acc?.params ? acc.params : []),
                ...(params ? params : []),
            ],
        };
    };
}

const parsePermission = (
    requiredPermissions,
    nestedPermissionIndex = 0,
    criteriaOperator = 'AND',
    criteriaIndex = 0,
) => {
    if (!requiredPermissions) return;
    
    if (!Array.isArray(requiredPermissions)) {
        const { ALL, ANY } = requiredPermissions;
        return parsePermission((ALL || ANY), nestedPermissionIndex, ALL ? 'AND' : 'OR', criteriaIndex);
    }

    if (requiredPermissions.every(e => typeof e === 'string')) {
        switch (criteriaOperator) {
            case 'AND': {
                const clauses = [];
                const params = [];

                for (const [permissionIndex, permissionName] of requiredPermissions.entries()) {
                    clauses.push(`COUNT(CASE WHEN permission.name = :permissionName${criteriaIndex}_${nestedPermissionIndex}_${permissionIndex} THEN 1 END) > 0`);
                    params.push([`permissionName${criteriaIndex}_${nestedPermissionIndex}_${permissionIndex}`, permissionName]);
                }

                return { clause: `(${ clauses.join(' AND ') })`, params };
            }
            case 'OR':
                return { clause: `COUNT(CASE WHEN permission.name IN (:...permissions${criteriaIndex}_${nestedPermissionIndex}) THEN 1 END) > 0`, params: [[`permissions${criteriaIndex}_${nestedPermissionIndex}`, requiredPermissions]] };
            default:
                break;
        }
    }

    return requiredPermissions.reduce(aggregateClause(parsePermission, criteriaOperator, criteriaIndex), undefined);
}

const parseClause = (
    criteria,
    criteriaIndex = 0,
    criteriaOperator = 'AND',
) => {
    if (!Array.isArray(criteria)) {
        const { permission } = criteria;
        if (permission?.required) return parsePermission(permission.required, undefined, undefined, criteriaIndex);

        const { ALL, ANY } = criteria;
        return parseClause((ALL || ANY), criteriaIndex, ALL ? 'AND' : 'OR');
    }

    return criteria.reduce(aggregateClause(parseClause, criteriaOperator), undefined);
}

console.log(parseClause({
    ANY: [
        {
            permission: {
                required: ['STATION_SORT', 'KEY_PROCESS_SOR'],
                optional: ['STATION_MOVE', 'KEY_PROCESS_MOVE'],
            },
        },
        {
            permission: {
                required: ['LINE_SORT'],
            },
        },
    ],
}));