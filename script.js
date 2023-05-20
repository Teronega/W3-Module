// Function to generate a randomized password
function generatePassword() {
  var lengthInput = document.getElementById("passwordLength");
  var passwordInput = document.getElementById("generatedPassword");

  var length = parseInt(lengthInput.value);
  if (isNaN(length)) {
    alert("Please enter a valid password length.");
    return;
  }

  // Define all available characters
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  // Initialize password variable
  var password = "";

  // Generate random characters to build the password
  for (var i = 0; i < length; i++) {
    // Get a random character from the available characters
    var randomChar = chars.charAt(Math.floor(Math.random() * chars.length));

    // Add the random character to the password
    password += randomChar;
  }

  // Set the generated password in the input field
  passwordInput.value = password;
}