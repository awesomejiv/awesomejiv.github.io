console.log("All numbers between -10 and 19");
for (var num = -10; num < 20; num++) {
    console.log(num);
}

console.log("All even numbers between 10 and 40");
for (var num = 10; num < 41; num += 2) {
    console.log(num);
}

console.log("All odd numbers between 300 and 333");
for (var num = 300; num < 334; num++) {
    if ((num % 2) === 1) {
        console.log(num);
    }
}

console.log("All numbers divisible by 5 AND 3 between 5 and 50");
for (var num = 5; num < 51; num++) {
    if (((num % 5) === 0) && ((num % 3) === 0)) {
        console.log(num);
    }
}

