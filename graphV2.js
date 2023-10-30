class Graph {
    constructor (V = []) {
        this.vertices = V;
        this.edges = new Map(); // Adjacent list

        for (const vertice of this.vertices) {
            this.edges.set(vertice, []);
        }
    }

    print() {
        console.log(this._edges);
    }

    addEdge(a, b) {
        const currentEdges = this.edges.get(a)
        this.edges.set(a, [...currentEdges, b]);
    }

    breadthFirstSearch(root) {
        console.log('Breadth First Search');
        
        const queue = [];
        const visited = new Map();

        queue.push(root);

        while(queue.length) {
            const node = queue.shift();
            
            if (!visited.get(node)) {
                console.log(node);
                visited.set(node, true);
            }

            for (const adjNode of [...this.edges.get(node)].sort()) {
                if (!visited.get(adjNode)) queue.push(adjNode);
            }
        }
    }

    depthFirstSearch(root) {
        console.log('Depth First Search');

        const stack = [];
        const visited = new Map();

        stack.push(root);

        while(stack.length) {
            const node = stack.pop();
            
            if (!visited.get(node)) {
                console.log(node);
                visited.set(node, true);
            }

            for (const adjNode of [...this.edges.get(node)].sort().reverse()) {
                if (!visited.get(adjNode)) stack.push(adjNode);
            }
        }
    }
}

const graph = new Graph(['A', 'B', 'C', 'D', 'E', 'F']);

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');

graph.depthFirstSearch('A');
graph.breadthFirstSearch('A');

/**
 
          A
         / \
        B   C
       / \  /
      D   E F  

 */