import { Node } from "./node.mjs";

function generateTree (depth, root = new Node([["L", 0], ["R", 0]])) { // Use this to gen a tree

    // This is a nostate program

    var rootNode = root;

    if (depth === 0) null
    else {
        rootNode.setLeftNode()
        rootNode.setRightNode()
        generateTree(depth-1, rootNode.getLeftNode())
        generateTree(depth-1, rootNode.getRightNode())
    }

    return rootNode;
}