/* ==============================
   Part 1: JavaScript Basics
   Variables, data types, conditionals
================================= */

// Variable declarations
let name = "Alice";
let age = 25;
let isStudent = true;

// Conditional
if (age >= 18) {
    console.log(`${name} is an adult.`);
} else {
    console.log(`${name} is a minor.`);
}

// User input example (commented out for safety)
// let userInput = prompt("Enter a number:");
// console.log(`You entered: ${userInput}`);

/* ==============================
   Part 2: Functions
   Reusable logic
================================= */

// Function 1: Greet user
function greetUser(userName) {
    alert(`Hello, ${userName}! Welcome to JavaScript Mastery.`);
}

// Function 2: Calculate sum of two numbers
function sumNumbers(a, b) {
    return a + b;
}

// Event listeners for buttons
document.getElementById("greetBtn").addEventListener("click", function() {
    greetUser(name);
});

document.getElementById("sumBtn").addEventListener("click", function() {
    let result = sumNumbers(5, 10);
    alert(`The sum of 5 and 10 is ${result}`);
});

/* ==============================
   Part 3: Loops
   Iteration examples
================================= */

const fruits = ["Apple", "Banana", "Cherry", "Date"];
const fruitList = document.getElementById("fruitList");

// For loop: display fruits in a list
for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.textContent = fruits[i];
    fruitList.appendChild(li);
}

// While loop: simple countdown
let counter = 5;
const countdownEl = document.getElementById("countdown");
let countdownText = "Countdown: ";
while (counter > 0) {
    countdownText += counter + " ";
    counter--;
}
countdownEl.textContent = countdownText;

/* ==============================
   Part 4: DOM Interaction
   Selecting elements and updating styles
================================= */

const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");

// Event: toggle a CSS class
toggleBtn.addEventListener("click", function() {
    toggleText.classList.toggle("highlight");
});

// Create a new element dynamically
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was added dynamically via JavaScript!";
document.body.appendChild(newParagraph);

// Modify existing element content
document.getElementById("part1").innerHTML += "<p>JavaScript basics executed successfully.</p>";
