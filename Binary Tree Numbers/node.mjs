import { evalID, combineConsecutiveElements } from "./modules.mjs";

var id = [
    ["L", 1],
    ["L", 1]
]

class Node {
    constructor (ε = [["L", 0], ["R", 0]]) {
        this.ε = combineConsecutiveElements(ε);
        this.r = null;
        this.l = null;
        this.v = evalID(ε)
    }

    getID = () => this.ε
    getValue = () => this.v
    getRightNode = () => this.r === null ? console.error("No node generated, run <<class name>>.setRightNode") : this.r
    getLeftNode = () => this.l === null ? console.error("No node generated, run <<class name>>.setRightNode") : this.l

    setRightNode (η = this.ε) {
        η.push(["R", 1])
        this.r = new Node(η)
        this.r.ε = combineConsecutiveElements(this.r.ε)
        η.pop()
    }

    setLeftNode (η = this.ε) {
        η.push(["L", 1])
        this.l = new Node(η)
        this.l.ε = combineConsecutiveElements(this.l.ε)
        η.pop()
    }

}

var goofy = new Node()

export {Node}