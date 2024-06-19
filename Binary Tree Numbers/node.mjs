import { evalID, combineConsecutiveElements } from "./modules.mjs";

var id = [
    ["L", 1],
    ["L", 1]
]

class Node {
    constructor (ε) {
        this.ε = combineConsecutiveElements(ε);
        this.r = null;
        this.l = null;
    }

    getID = () => this.ε
    getValue = () => evalID(this.ε)
    getRightNode = () => this.r === null ? console.error("No node generated, run <<class name>>.setRightNode") : this.r
    getLeftNode = () => this.l === null ? console.error("No node generated, run <<class name>>.setRightNode") : this.l

    setRightNode (η = this.ε) {
        η.push(["R", 1])
        η = combineConsecutiveElements(η)
        this.r = new Node(η)
    }

    setLeftNode (η = this.ε) {
        η.push(["L", 1])
        η = combineConsecutiveElements(η)
        this.l = new Node(η)
    }

}

var goofy = new Node(id)

goofy.setLeftNode()
goofy.setRightNode()

console.log(goofy.getRightNode().getValue())

export {Node}