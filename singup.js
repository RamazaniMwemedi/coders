var userName = "";
var firstName = "";
var lastName = "";
var password = "";
var confirmPassword = "";
var email = "";

// Username onChange handler
function handleUsernameChange(inputElement) {
  userName = inputElement.value;
}

// Firstname onChange handler
function handleFirstnameChange(inputElement) {
  firstName = inputElement.value;
}

// Lastname onChange handler
function handleLastnameChange(inputElement) {
  lastName = inputElement.value;
}

// Password onChange handler
function handlePasswordChange(inputElement) {
  password = inputElement.value;
}

// Confirm Password onChange handler
function handleConfirmPasswordChange(inputElement) {
  confirmPassword = inputElement.value;
}

// Email onChange handler
function handleEmailChange(inputElement) {
  email = inputElement.value;
}

// Submit handler for the form
function handleSubmit(event) {
  event.preventDefault();
  console.log("Username: " + userName);
  console.log("First Name: " + firstName);
  console.log("Last Name: " + lastName);
  console.log("Password: " + password);
  console.log("Confirm Password: " + confirmPassword);
  console.log("Email: " + email);
  // Redirect to the home page
  window.location.href = "index.html";
}
