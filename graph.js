class Graph {
    constructor (n = 0) {
        this._vertices = n;
        this._edges = new Array(n); // Adjacent list
        
        for (let index = 0; index < this._edges.length; index++) {
            this._edges[index] = new Array();
        }
    }

    print() {
        console.log(this._edges);
    }

    addEdge(a, b) {
        this._edges[a].push(b);
    }

    breadthFirstSearch(root, target) {
        const queue = [];
        const visited = new Map();

        queue.push(root);

        while(queue.length) {
            const node = queue.shift();
            
            if (!visited.get(node)) {
                console.log(node);
                visited.set(node, true);
            }

            for (const adjNode of [...this._edges[node]].sort()) {
                if (!visited.get(adjNode)) queue.push(adjNode);
            }
        }
    }

    depthFirstSearch(root) {
        const stack = [];
        const visited = new Map();

        stack.push(root);

        while(stack.length) {
            const node = stack.pop();
            
            if (!visited.get(node)) {
                console.log(node);
                visited.set(node, true);
            }

            for (const adjNode of [...this._edges[node]].sort().reverse()) {
                if (!visited.get(adjNode)) stack.push(adjNode);
            }
        }
    }
}

const graph = new Graph(8);

graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 7);
graph.addEdge(1, 4);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 6);

graph.depthFirstSearch(0);