// DOM: Cache the form elements used for self-validation.
const signupForm = document.getElementById("signup-form");
const nameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const formSuccess = document.getElementById("form-success");

// Validation: Check whether an email contains the required symbols.
function isValidEmail(value) {
  return value.includes("@") && value.includes(".");
}

// Validation: Render a field-specific error message directly on the page.
function setFieldError(element, errorElement, message) {
  errorElement.textContent = message;
  element.setAttribute("aria-invalid", message ? "true" : "false");
}

// Validation: Remove old messages before running a new check.
function clearMessages() {
  setFieldError(nameInput, nameError, "");
  setFieldError(emailInput, emailError, "");
  formSuccess.textContent = "";
}

// Form: Validate required fields and email format on submission.
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  clearMessages();

  let isFormValid = true;

  if (!nameInput.value.trim()) {
    setFieldError(nameInput, nameError, "Please enter your full name.");
    isFormValid = false;
  }

  if (!emailInput.value.trim()) {
    setFieldError(emailInput, emailError, "Please enter your email address.");
    isFormValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    setFieldError(emailInput, emailError, "Email must contain both @ and . symbols.");
    isFormValid = false;
  }

  if (isFormValid) {
    formSuccess.textContent = "Your form was submitted successfully.";
    signupForm.reset();
  }
});

// Quiz: Cache quiz elements for instant feedback.
const quizForm = document.getElementById("quiz-form");
const quizFeedback = document.getElementById("quiz-feedback");

// Quiz: Listen for answer changes and immediately show corrective feedback.
quizForm.addEventListener("change", (event) => {
  if (event.target.name !== "quiz-answer") {
    return;
  }

  if (event.target.value === "correct") {
    quizFeedback.textContent = "Correct. Refillable bottles reduce repeated single-use waste over time.";
    quizFeedback.style.color = "#145a32";
  } else {
    quizFeedback.textContent = "Not quite. The best answer is carrying one refillable bottle every day.";
    quizFeedback.style.color = "#9b1d1d";
  }
});
