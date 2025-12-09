function countdown() {
    // Get user input number
    let seconds = document.getElementById("seconds").value;

    // Validate input
    if (seconds === "") {
        document.getElementById("timer").innerHTML = "Please enter a number.";
        return;
    }

    // Set interval to decrease countdown every second
    let interval = setInterval(function() {

        document.getElementById("timer").innerHTML = seconds;
        seconds--;

        // Stop when below zero
        if (seconds < 0) {
            clearInterval(interval);
            document.getElementById("timer").innerHTML = "Time's up!";
        }

    }, 1000);
}



// ---------------------------------------------------
// AUTOMATIC SLIDESHOW FUNCTIONALITY
// ---------------------------------------------------

// Start the slideshow at slideIndex 0
let slideIndex = 0;
showSlides(); // Call function to begin slideshow

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Move to next slide
  slideIndex++;

  // Wrap around if past last slide
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Show current slide
  slides[slideIndex - 1].style.display = "block";

  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Add active class to current dot
  dots[slideIndex - 1].className += " active";

  // Change image every 2 seconds
  setTimeout(showSlides, 2000);
}



// ---------------------------------------------------
// OPTIONAL: ENABLE DOT CLICKING
// ---------------------------------------------------
function currentSlide(n) {
  slideIndex = n - 1; // Set to correct index
  showSlides();       // Refresh slideshow
}