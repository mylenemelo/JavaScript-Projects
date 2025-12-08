// ------------------------------
// Function using ternary operator with user input
// ------------------------------
function checkAge() {
  const age = document.getElementById("ageInput").value;

  // Ternary operator checks if age >= 18
  const message = (age >= 18) ? "You are an adult." : "You are a minor.";

  // Display result in the paragraph
  document.getElementById("ternaryResult").textContent = message;
}

// ------------------------------
// Constructor function using new and this keywords
// ------------------------------
function Person(name, age) {
  this.name = name;
  this.age = age;

  // Nested function to get greeting message
  this.getGreeting = function() {
    function nestedMessage() {
      return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
    }
    // Use .bind(this) to ensure 'this' in nestedMessage refers to Person object
    return nestedMessage.bind(this)();
  };
}

// ------------------------------
// Function to create Person instance and display the greeting
// ------------------------------
function createPerson() {
  // Create new Person object
  const person1 = new Person("Alice", 30);

  // Get greeting message from nested function
  const greeting = person1.getGreeting();

  // Display greeting on the page
  document.getElementById("constructorResult").textContent = greeting;
}