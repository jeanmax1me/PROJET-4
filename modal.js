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
const testmodal = document.querySelector(".postRegisterModal");
const testm = document.querySelectorAll(".testm");
const testcontent = document.querySelector(".postRegisterContent");
const testclose = document.querySelector(".postRegisterClose");

// launch modal event
testm.forEach((btn) => btn.addEventListener("click", launchM));
testclose.addEventListener("click", handleM); // Use addEventListener directly

// launch modal form
function launchM() {
  testmodal.style.display = "block";
  testcontent.classList.remove("hide-modal");
}

// close modal form
function handleM() {
  testcontent.classList.add("hide-modal"); // Add the hide-modal class for closing animation

  // Listen for the animation end event to actually hide the modal after the animation completes
  testcontent.addEventListener("animationend", function (event) {
    if (event.animationName === "modalclose") {
      testmodal.style.display = "none";
      testcontent.classList.remove("hide-modal"); // Remove the hide-modal class
    }
  });
}


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
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const birthdateInput = document.getElementById("birthdate");
  const birthdateError = document.getElementById("birthdateError");
  const checkbox = document.getElementById("checkbox1");
  const checkboxError = document.getElementById("checkboxError");
  const quantityInput = document.getElementById("quantity");
  const quantityError = document.getElementById("quantityError");
  const locationInputs = document.querySelectorAll('input[name="location"]');
  const locationError = document.getElementById("locationError");



  const birthdateValue = birthdateInput.value;
  const [yearStr] = birthdateValue.split("-");
  const year = parseInt(yearStr, 10);

  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ '-]{2,}$/;
  const emailRegex = /^[A-Za-z]{1,}[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/;

  let isLocationSelected = false;
  let isValid = true; // Initialize a flag as true

    // Check if at least one location option is selected
    locationInputs.forEach((input) => {
      if (input.checked) {
        isLocationSelected = true;
      }
    });
  
  // Validate the first name
  if (!regex.test(firstNameInput.value)) {
    firstNameError.style.display = "block"; // Show the error message
    firstNameInput.classList.add("field-error"); // Add the field-error class to the input
    isValid = false; // Set the flag to false
  } else {
    firstNameError.style.display = "none"; // Hide the error message
    firstNameInput.classList.remove("field-error"); // Remove the field-error class from the input
  }

  // Validate the last name
  if (!regex.test(lastNameInput.value)) {
    lastNameError.style.display = "block"; // Show the error message
    lastNameInput.classList.add("field-error"); // Add the field-error class to the input
    isValid = false; // Set the flag to false
  } else {
    lastNameError.style.display = "none"; // Hide the error message
    lastNameInput.classList.remove("field-error"); // Remove the field-error class from the input
  }

  // Validate the email
  if (!emailRegex.test(emailInput.value)) {
    emailError.style.display = "block"; // Show the error message
    emailInput.classList.add("field-error"); // Add the field-error class to the input
    isValid = false; // Set the flag to false
  } else {
    emailError.style.display = "none"; // Hide the error message
    emailInput.classList.remove("field-error"); // Remove the field-error class from the input
  }

  // Validate the birth year
  if (year < 1900 || year > 2011) {
    birthdateError.style.display = "block"; // Show the year error message
    birthdateInput.classList.add("field-error"); // Add the field-error class to the input
    isValid = false; // Set the flag to false
  } else {
    birthdateError.style.display = "none"; // Hide the year error message
    birthdateInput.classList.remove("field-error"); // Remove the field-error class from the input
  }

  // Validate the checkbox
  if (!checkbox.checked) {
    checkboxError.style.display = "block"; // Show the error message
    isValid = false; // Set the flag to false
  } else {
    checkboxError.style.display = "none"; // Hide the error message
  }
  if (!isLocationSelected) {
    locationError.style.display = "block"; // Show the error message
    locationError.classList.add("field-error"); // Add the field-error class to the error message
    isValid = false; // Set the flag to false
  } else {
    locationError.style.display = "none"; // Hide the error message
    locationError.classList.remove("field-error"); // Remove the field-error class from the error message
  }
  console.log("Before quantity validation"); 
  if (quantityInput.value === "" || isNaN(quantityInput.value)) {
    quantityError.style.display = "block"; // Show the error message
    quantityInput.classList.add("field-error"); // Add the field-error class to the input
    isValid = false; // Set the flag to false
  } else {
    quantityError.style.display = "none"; // Hide the error message
    quantityInput.classList.remove("field-error"); // Remove the field-error class from the input
    console.log(quantityInput.value);
  }
  // If isValid is false, prevent form submission
  if (!isValid) {
    return false;
  }

  // If all validations pass, you can continue with form submission
  // Example: form.submit();

  return true; // Return true to indicate validation success
}