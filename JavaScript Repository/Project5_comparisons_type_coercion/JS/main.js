// Select the output container once
const outputDiv = document.getElementById("output");

// 1. typeof operator example
let myVariable = 42;
outputDiv.innerHTML += "<p>The type of myVariable is: " + typeof myVariable + "</p>";

// 2. String and number concatenation
let combined = "The answer is " + 42;
outputDiv.innerHTML += "<p>" + combined + "</p>";

// 3. Operators examples
let a = 10;
let b = "10";
let c = 5;

outputDiv.innerHTML += "<p>a == b: " + (a == b) + "</p>";      // true
outputDiv.innerHTML += "<p>a === b: " + (a === b) + "</p>";    // false
outputDiv.innerHTML += "<p>a > c: " + (a > c) + "</p>";        // true
outputDiv.innerHTML += "<p>c < b: " + (c < b) + "</p>";        // true
outputDiv.innerHTML += "<p>a > c && c < b: " + (a > c && c < b) + "</p>"; // true
outputDiv.innerHTML += "<p>a < c || c < b: " + (a < c || c < b) + "</p>"; // true
outputDiv.innerHTML += "<p>!(a === b): " + !(a === b) + "</p>";            // true

// 4. Infinity examples
let largeNumber = 1e309;
document.getElementById("infinityPos").textContent = "Positive Infinity: " + largeNumber;

let negativeLargeNumber = -1e309;
document.getElementById("infinityNeg").textContent = "Negative Infinity: " + negativeLargeNumber;