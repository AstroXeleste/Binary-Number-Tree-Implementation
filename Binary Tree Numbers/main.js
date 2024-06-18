let evenid = [
    ["L", 2],
    ["R", 2]
];

// This assumes even side

function evalR(ε, v = 2, n = 0) {

    /**
     * @param ε is the transformation x ∈ ℕ
     * @param n is the iteration set default to 0 for initial tests
     * @param v is the value set default to 2
     */
    
    return (2**ε[n][1])*v;

}

function evalL (ε, v = 1, n = 0) {

    /**
     * @param ε is the transformation x ∈ ℕ
     * @param n is the iteration set default to 0 for initial tests
     * @param v is the value set default to 1
     */

    if (v === 1) {
        return 2*(2**ε[n][1] - 1);
    } else {
        return 2*(2**ε[n][1] - 1) + evalR(ε, v, n);
    }
}


function evalID(ζ) {

    /**
     * function can take any even number x ∈ L and translate it to x ∈ ℕ
     * @param  ζ the number that is evalutated, is a nx2 matrix
    */ 


    var value = 1;

    for (var i = 0; i < ζ.length; i++) {
        if (ζ[i][0] === "R") {
            value = evalR(ζ, value, i);
        } else if (ζ[i][0] === "L") {
            value = evalL(ζ, value, i);
        }
    }

    return value;
}

console.log(evalID(evenid))