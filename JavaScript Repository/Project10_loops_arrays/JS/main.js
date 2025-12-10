document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is running!");

    // 1. Function that uses a while loop with animation
    function countUpToTen() {
        let number = 1;
        let output = "";

        let interval = setInterval(function() {
            output += number + " ";
            document.getElementById("output").innerHTML = `<p class="while-loop"><strong>While Loop:</strong> ${output}</p>`;

            if (number === 10) {
                clearInterval(interval); 
            }

            number++;  
        }, 500); 
    }

    // 2. Function that uses a for loop with animation
    function countDownFromTen() {
        let output = "";
        setTimeout(function() {  // Delay for animation
            for (let i = 10; i >= 1; i--) {  
                output += i + " ";
            }
            document.getElementById("output").innerHTML += `<p class="for-loop"><strong>For Loop:</strong> ${output}</p>`;
        }, 1000);  // Add a 1-second delay to trigger the animation
    }

    // 3. Function that uses an array with animation
    function displayArrayItems() {
        let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
        let output = "Array Items: ";
        setTimeout(function() {  // Delay for animation
            for (let i = 0; i < fruits.length; i++) { 
                output += fruits[i] + " ";
            }
            document.getElementById("output").innerHTML += `<p class="array-items"><strong>Array Items:</strong> ${output}</p>`;
        }, 2000);  // Add a 2-second delay
    }

    // 4. Create an object using let with animation
    function createPersonObject() {
        let person = {
            name: "John Doe",
            age: 30,
            job: "Developer"
        };
        let output = `Object: Name - ${person.name}, Age - ${person.age}, Job - ${person.job}`;
        setTimeout(function() {  // Delay for animation
            document.getElementById("output").innerHTML += `<p class="object-item"><strong>Object:</strong> ${output}</p>`;
        }, 3000);  // Add a 3-second delay
    }

    // Call all functions to display the results
    countUpToTen();
    countDownFromTen();
    displayArrayItems();
    createPersonObject();
});