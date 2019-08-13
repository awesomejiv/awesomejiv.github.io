function isEven(num) {
    return num % 2 === 0;
    s
}

function factorial(num) {
    if (num < 0) {
        console.log("Error! Number too low.")
    } else if (num == 0 || num == 1) {
        return 1;
    } else {
        for (var i = num - 1; i > 0; i--) {
            num *= i;
        }
        return num;
    }
}

function factorial2(num) {
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function kebabToSnake(word) {
    var newWord = word.replace(/-/g, '_');
    return newWord;
}
