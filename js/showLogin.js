const checkInBtn = document.getElementById('checkInButton')

checkInBtn.addEventListener('click', showLogin)

function showLogin() {
  const homeMenu = document.getElementById("homeMenu");
  const loginContainer = document.getElementById("loginContainer");
  const checkInButton = document.getElementById("checkInButton");

  homeMenu.classList.add("fade-out");
  // checkInButton.style.display = "none";
  setTimeout(function () {
    homeMenu.style.display = "none";
    loginContainer.style.display = "block";
    loginContainer.classList.add("fadeIn");
  }, 500);
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const agreeTos = document.getElementById("agreeTos").checked;

  // Simulate validation against database entries (replace with actual database logic)
  if (validateUser(username, password)) {
    // Successful login
    alert("Login successful. Redirecting to main page...");
    window.location.href = "index.html"; // Redirect to main page after successful login
  } else {
    // Invalid credentials
    alert("Invalid username or password.");
  }
});

function validateUser(username, password) {
  // Simulated database entries
  const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    // Add more user entries as needed
  ];

  // Check if the username and password match any entry in the database
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      return true; // Match found
    }
  }
  return false; // No match found
}