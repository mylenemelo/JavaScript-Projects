// Global variable (available everywhere)
let globalVar = "I am a global variable";

// Function with a local variable and an if statement
function checkTime() {
  // Local variable
  let hour = new Date().getHours();

  // If statement to check time and display a message
  if (hour < 12) {
    document.getElementById("timeOutput").textContent = "Good morning!";
  } else if (hour < 18) {
    document.getElementById("timeOutput").textContent = "Good afternoon!";
  } else {
    document.getElementById("timeOutput").textContent = "Good evening!";
  }

  // Display global variable as well
  console.log(globalVar);
}

// Function intentionally written with an error for debugging
function errorFunction() {
  // Missing closing parenthesis intentionally to cause syntax error
  // console.log("This will cause an error";
  // Corrected version commented out for clarity:
  // console.log("This will cause an error");

  // Instead, let's simulate a ReferenceError by calling an undefined variable
  try {
    console.log(undefinedVariable);
  } catch (error) {
    console.log("Caught an error: " + error.message);
  }
}

// Call errorFunction to see the error logged in console
errorFunction();

// Time_function as outlined in previous slides
function Time_function() {
  let time = new Date().getHours();

  if (time >= 0 && time < 12) {
    return "Good morning!";
  } else if (time >= 12 && time < 18) {
    return "Good afternoon!";
  } else {
    return "Good evening!";
  }
}

// Example: you could use it like this
console.log("Time_function result: " + Time_function());