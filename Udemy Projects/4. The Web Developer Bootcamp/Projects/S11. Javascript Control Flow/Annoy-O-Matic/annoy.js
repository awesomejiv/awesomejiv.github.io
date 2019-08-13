var answer = prompt("Are we there yet?");
while (!(answer.includes("yes")) && !(answer.includes("yeah"))) {
    var answer = prompt("Are we there yet?");
}
alert("Yay we made it!");
