class PQueue {
    constructor(startWith = []) {
        this.items = startWith;
        this.priorityMap = new Map();
    }

    populatePriorityMap() {
        this.items.forEach(({ element, priority }) => this.priorityMap.set(priority, element));
    }

    enqueue({ element: newElement, priority: newPriority }) {
        for (const [index, { _, priority }] of this.items.entries()) {
            if (newPriority < priority) return this.items.splice(index, 0, { element: newElement, priority: newPriority });
        }

        this.items.push({ element: newElement, priority: newPriority });
    }

    print() {
        console.log(this.items);
    }
}

const pQueue = new PQueue([
    { element: 'X', priority: 1 },
    { element: 'Y', priority: 7 },
    { element: 'Z', priority: 8 },
    { element: 'A', priority: 10 },
    { element: 'B', priority: 29 }
]);

pQueue.enqueue({ element: 'C', priority: 14 });
pQueue.print();

/*
[
    [0, { element: 'X', priorty: 1 }],
    [1, { element: 'Y', priorty: 7 }],
    [2, { element: 'Z', priorty: 8 }],
    [3, { element: 'A', priorty: 10 }],
    [4, { element: 'B', priorty: 29 }]
]
*/