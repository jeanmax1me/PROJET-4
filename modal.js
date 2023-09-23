function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelectorAll(".close");
const content = document.querySelector(".content");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModal.forEach(function (element) {
  element.addEventListener("click", handleCloseModal);
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  content.classList.remove("hide-modal"); 
}

// close modal form
function handleCloseModal() {
  content.classList.add("hide-modal"); // Add the hide-modal class for closing animation

  // Listen for the animation end event to actually hide the modal after the animation completes
  content.addEventListener("animationend", function (event) {
    if (event.animationName === "modalclose") {
      modalbg.style.display = "none";
      content.classList.remove("hide-modal"); // Remove the hide-modal class
    }
  });
}

function validate() {
  const firstNameInput = document.getElementById("first");
  const firstNameError = document.getElementById("firstNameError");
  const lastNameInput = document.getElementById("last");
  const lastNameError = document.getElementById("lastNameError");
  const emailInput = document.getElementById("email"); // Add this line to get the email input element
  const emailError = document.getElementById("emailError"); // Add this line to get the em
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ '-]{2,}$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/;

  let isValid = true; // Initialize a flag as true

  if (!regex.test(firstNameInput.value)) {
    firstNameError.style.display = "block"; // Show the error message
    firstNameInput.classList.add("field-error"); // Add the field-error class to the input
    isValid = false; // Set the flag to false
  } else {
    firstNameError.style.display = "none"; // Hide the error message
    firstNameInput.classList.remove("field-error"); // Remove the field-error class from the input
  }

  if (!regex.test(lastNameInput.value)) {
    lastNameError.style.display = "block"; // Show the error message
    lastNameInput.classList.add("field-error"); // Add the field-error class to the input
    isValid = false; // Set the flag to false
  } else {
    lastNameError.style.display = "none"; // Hide the error message
    lastNameInput.classList.remove("field-error"); // Remove the field-error class from the input
  }
  
  if (!emailRegex.test(emailInput.value)) {
    emailError.style.display = "block"; // Show the error message
    emailInput.classList.add("field-error"); // Add the field-error class to the input
    isValid = false; // Set the flag to false
  } else {
    emailError.style.display = "none"; // Hide the error message
    emailInput.classList.remove("field-error"); // Remove the field-error class from the input
  }
 


  return isValid; // Return the flag's value to determine form submission
}

