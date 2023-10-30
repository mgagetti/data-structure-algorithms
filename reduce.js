const resolvePath = (path, obj, separator = '.') => {
    return path
        .split(separator)
        .reduce((prev, curr, index, arr) => {
            if (Array.isArray(prev)) return prev.flatMap(x => index === arr.length - 1 ? { [curr]: x?.[curr] } : x?.[curr]);
            return prev?.[curr];
        }, obj);
}

const obj = {
    a: {
        b: [
            {
                c: [
                    {
                        projectId: 1,
                        siteId: 1
                    },
                    {
                        projectId: 2,
                        siteId: 2
                    }
                ]
            },
            {
                c: [
                    {
                        projectId: 1,
                        siteId: 1
                    },
                    {
                        projectId: 2,
                        siteId: 2
                    }
                ]
            }
        ]
    }
}

console.log(JSON.stringify(resolvePath('a.b.c.projectId', obj)))