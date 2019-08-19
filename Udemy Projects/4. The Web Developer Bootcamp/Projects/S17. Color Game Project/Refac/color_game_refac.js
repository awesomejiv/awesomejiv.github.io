var numSquares = 6; // Initially we start at Hard by default, so 6 tiles
var colors = []; // A list to store color rgb strings
var pickedColor; // Pick a random color as the winning condition
var h1 = document.querySelector("h1"); // The header in the html
var resetButton = document.querySelector("#reset"); // The button to play again or choose new colors
var messageDisplay = document.querySelector("#message"); // The message displayed when square is chosen
var squares = document.querySelectorAll(".square"); // A list of all the squares
var modeButtons = document.querySelectorAll(".mode"); // A list of the difficulty buttons
var colorDisplay = document.getElementById("color_display"); // Displays the RGB code in the header


init();
resetButton.addEventListener("click", reset); // Attach event on reset button

function init() {
    // Loop to add event listeners to mode buttons
    setupModeButtons();
    // Loop to add event listeners to squares
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) { // Attaching events on difficulty buttons
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected"); // Remove css class from easy
            modeButtons[1].classList.remove("selected"); // Remove css class from hard
            this.classList.add("selected"); // Add css class onto the pressed difficulty button
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6; // Determine number of squares
            reset(); // Call the function to finish off
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) { // Attaching events on color squares
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor; // Grab color of clicked square
            if (clickedColor === pickedColor) { // If same as pickedColor
                messageDisplay.textContent = "Correct!"; // Display message
                resetButton.textContent = "Play Again?"; // Change reset button content
                changeColors(clickedColor); // Run this function to match all square color
                h1.style.backgroundColor = clickedColor; // Match header color as well
            } else { // If its not the correct one
                this.style.backgroundColor = "#232323"; // Hide the square by matching bg color
                messageDisplay.textContent = "Try Again"; // Display message
            }
        })
    }
}

function reset() {
    colors = generateRandomColors(numSquares); // Generate random colors again
    pickedColor = pickColor(); // Pick a new random color from array
    colorDisplay.textContent = pickedColor; // Change colorDisplay to match picked Color
    messageDisplay.textContent = ""; // Message should show nothing
    resetButton.textContent = "new colors"; // Change reset button text in case replaying
    for (var i = 0; i < squares.length; i++) { // Loop to change the color of squares
        if (colors[i]) { // If the color string is not null
            squares[i].style.display = "block"; // Make sure its visible
            squares[i].style.backgroundColor = colors[i]; // Change the color
        } else { // If there is no color code string
            squares[i].style.display = "none"; // Dont show the square
        }
    }
    h1.style.backgroundColor = "steelblue"; // Change back the header bg
}

function changeColors(color) { // Function to change colors of all squares to match
    for (var i = 0; i < squares.length; i++) { // Loop through all squares
        squares[i].style.backgroundColor = color; // Change each color to match given color
    }
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}


function generateRandomColors(num) {
    var arr = []; // Make an array
    // Add num random colors to array
    for (var i = 0; i < num; i++) {
        // Get random color
        // Push into arr
        arr.push(randomColor());
    }
    // Return that array
    return arr;
}

function randomColor() {
    // Pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // Pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // Pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
