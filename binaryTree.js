class Node {
    constructor(data) {
        this.data = data
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(data) {
        this.root = new Node(data);
    }

    get rootNode() {
        return this.root;
    }

    _insertLeft(node, newNode) {
        if (node.left === null) node.left = newNode;
        else this._insertNode(node.left, newNode);
    }

    _insertRight(node, newNode) {
        if (node.right === null) node.right = newNode;
        else this._insertNode(node.right, newNode);
    }

    _insertNode(node, newNode) {
        if (newNode.data < node.data) this._insertLeft(node, newNode);
        else this._insertRight(node, newNode);
    }

    insert(data) {
        const newNode = new Node(data);

        if (this.root === null) this.root = newNode;
        else this._insertNode(this.root, newNode);
    }

    search(data, node = this.root) {
        if (node.data === data) return node;
        if (data < node.data) return this.search(data, node.left);
        if (data > node.data) return this.search(data, node.right);
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }
}

const binaryTree = new BinaryTree(15);
const rootNode = binaryTree.rootNode;

binaryTree.insert(25);
binaryTree.insert(10);
binaryTree.insert(7);
binaryTree.insert(22);
binaryTree.insert(17);
binaryTree.insert(13);
binaryTree.insert(5);
binaryTree.insert(9);
binaryTree.insert(27);

binaryTree.inorder(rootNode);

/**
 
          15
         /  \
        10   25
       / \   / \
      7  13 22  27
     / \    /
    5   9  17

 */