
function addition_Function() {
    // Create a simple addition operation
    let result = 23 + 5;
    document.getElementById("Addition").innerHTML = "23 + 5 = " + result;
}


function subtraction_Function() {
    // Perform subtraction
    let result = 10 - 7;
    document.getElementById("Subtraction").innerHTML = "10 - 7 = " + result;
}


function multiplication_Function() {
    // Multiply two numbers
    let result = 4 * 4;
    document.getElementById("Multiplication").innerHTML = "4 * 4 = " + result;
}


function modulus_Function() {
    // % gives the remainder after division
    let result = 35 % 4;
    document.getElementById("Modulus").innerHTML = "35 % 4 = " + result + " (remainder)";
}


function increment_Function() {
    let num = 10;
    num++;  // Increase by 1
    document.getElementById("Increment").innerHTML = "Incremented value of 10 is " + num;
}


function decrement_Function() {
    let num = 10;
    num--;  // Decrease by 1
    document.getElementById("Decrement").innerHTML = "Decremented value of 10 is " + num;
}


function random_Function() {
    // Generates a random number between 0 and 1
    let randomNumber = Math.random();
    document.getElementById("Random").innerHTML = "Random number: " + randomNumber;
}