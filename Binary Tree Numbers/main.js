let evenid = [
    ["R", 2]
];

// This assumes even side

function evalREven(ε, v = 2, n = 0) {

    /**
     * @param ε is the transformation x ∈ ℕ
     * @param n is the iteration set default to 0 for initial tests
     * @param v is the value set default to 2
     */
    
    return (2**ε[n][1])*v;

}

function evalLEven(ε, v = 1, n = 0) {

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


function evalIDEven(ζ) {

    /**
     * function can take any even number x ∈ Z and translate it to x ∈ ℕ
     * @param  ζ the number x ∈ Z that is evalutated, is an nx2 matrix
    */ 


    var value = 1;

    for (var i = 0; i < ζ.length; i++) {
        if (ζ[i][0] === "R") {
            value = evalREven(ζ, value, i);
        } else if (ζ[i][0] === "L") {
            value = evalLEven(ζ, value, i);
        }
    }

    return value;
}

function evalIDOdd(ζ) {

    /**
     * function can take any even number x ∈ Z and translate it to x ∈ ℕ
     * @param  ζ the number x ∈ Z that is evalutated, is an nx2 matrix
    */ 


    var value = 1;

    for (var i = 0; i < ζ.length; i++) {
        if (ζ[i][0] === "R") {
            value = evalLEven(ζ, value, i) + 1;
        } else if (ζ[i][0] === "L") {
            value = evalREven(ζ, value, i) + 1;
        }
    }

    return value;
}



console.log(evalIDOdd(evenid));