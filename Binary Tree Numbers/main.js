let evenid = [
    ["R", 2]
];

// This assumes even side

function evalR(ε, n, v) {
    if (ε === 1) {
        throw "cant use 1 right now, WIP";
    } else {
        return (2**n[v][1])*ε;
    }
}

function evalL (ε, n, v) {
    if (ε === 1) {
        return 2*(2**n[v][1] - 1);
    } else {
        return 2*(2**n[v][1] - 1) + evalR(ε, n, v);
    }
}


function evalID(ε) {

    /**
     * function can take any even number x ∈ L and translate it to x ∈ ℕ
     * @param ε, the even number ID in matrix form
    */ 


    var value = 1;

    for (var i = 0; i < ε.length; i++) {
        if (ε[i][0] === "R") {
            value = evalR(value, evenid, i);
        } else if (ε[i][0] === "L") {
            value = evalL(value, evenid, i);
        }
    }

    return value;
}

console.log(evalID(evenid))