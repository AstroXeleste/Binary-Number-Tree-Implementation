function sum (start, end, func) {
    var value = 0;

    for (var i = start; i <= end; i++) {
        value += func(i);
    }

    return value;
}

console.log(sum(1, 3, (x) => 2**x))