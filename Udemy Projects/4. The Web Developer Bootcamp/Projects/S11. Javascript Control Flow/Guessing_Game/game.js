var ourNumber = 29;

var guess = Number(prompt("Guess a number"));

if (guess === ourNumber) {
    alert("You got it right!");
} else if (guess > ourNumber) {
    alert("Too high. Guess again");
} else {
    alert("Too low. Guess again");
}
