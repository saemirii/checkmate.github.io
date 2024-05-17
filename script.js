import {addTodo} from "./js/addTodo.js"

var setDueDateButton = document.getElementById('todoDueDate')
const todoInput = document.getElementById('todoInput')

todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        addTodo()
    }
})


function showLogin() {
    var homeMenu = document.getElementById("homeMenu");
    var loginContainer = document.getElementById("loginContainer");
    var checkInButton = document.getElementById("checkInButton");

    homeMenu.classList.add("fade-out");
    checkInButton.style.display = "none";
    setTimeout(function () {
        homeMenu.style.display = "none";
        loginContainer.style.display = "block";
        loginContainer.classList.add("fadeIn");
    }, 500);
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var agreeTos = document.getElementById("agreeTos").checked;

    // Validate username, password, and TOS agreement
    if (username.trim() === "" || password.trim() === "" || !agreeTos) {
        alert("Please fill in all fields and agree to the Terms of Service.");
        return;
    }

    // Simulate authentication (replace with actual authentication logic)
    // For demonstration purposes, assume successful login and redirect to main page
    alert("Login successful. Redirecting to main page...");
    window.location.href = "index.html"; // Redirect to main page after successful login
});

document.addEventListener("keydown", function (event) {
    if (event.code === 'Enter' || event.code === 'Space') {
        var homeMenu = document.getElementById("homeMenu");
        var todoTitle = document.getElementById("todoTitle");
        var todoInputContainer = document.getElementById("todo-input-container");
        var todoList = document.getElementById("todo-list");
        var checkInButton = document.getElementById("checkInButton");

        homeMenu.classList.add("fade-out");
        checkInButton.style.display = "none";
        setTimeout(function () {
            homeMenu.style.display = "none";
            todoTitle.style.display = "block";
            todoInputContainer.style.display = "flex";
            todoList.style.display = "block";
            todoTitle.classList.add("fadeIn");
            todoInputContainer.classList.add("fadeIn");
            todoList.classList.add("fadeIn");
        }, 500);
    }
});

// Show the date picker when user clicks on the Set due date button
setDueDateButton.addEventListener("click", showHideDatePicker)

function showHideDatePicker() {
    const dateInput = document.getElementById('datePicker');
    const dateInputParent = dateInput.parentElement;
    if(dateInputParent.style.display === "none") {
        dateInputParent.style.display = "block";
    } else {
        dateInputParent.style.display = "none";
    }
}


document.addEventListener("click", function (event) {
    var contextMenu = document.getElementById("contextMenu");
    if (contextMenu.style.display === "block") {
        contextMenu.style.display = "none";
    }
});

document.getElementById("markDone").addEventListener("click", function () {
    if (window.clickedTodo) {
        window.clickedTodo.classList.add("completed");
        window.clickedTodo.querySelector(".status-box").innerText = "done";
        window.clickedTodo.querySelector(".status-box").style.backgroundColor = "var(--green-darker)"; // Change to green
        window.clickedTodo.querySelector(".status-box").style.color = "white"; // Text color
    }
});

document.getElementById("markInProgress").addEventListener("click", function () {
    if (window.clickedTodo) {
        window.clickedTodo.classList.remove("completed", "not-started");
        window.clickedTodo.querySelector(".status-box").innerText = "In Progress";
        window.clickedTodo.querySelector(".status-box").style.backgroundColor = "var(--yellow-lighter)"; // Change to light yellow
        window.clickedTodo.querySelector(".status-box").style.color = "white"; // Text color
    }
});

document.getElementById("markNotStarted").addEventListener("click", function () {
    if (window.clickedTodo) {
        window.clickedTodo.classList.remove("completed", "in-progress");
        window.clickedTodo.querySelector(".status-box").innerText = "Not Started";
        window.clickedTodo.querySelector(".status-box").style.backgroundColor = "var(--red-lighter)"; // Change to light gray
        window.clickedTodo.querySelector(".status-box").style.color = "white"; // Text color
    }
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var agreeTos = document.getElementById("agreeTos").checked;

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
    var users = [
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" },
        // Add more user entries as needed
    ];

    // Check if the username and password match any entry in the database
    for (var i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            return true; // Match found
        }
    }
    return false; // No match found
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Shift') {
        const reminderContainer = document.getElementById('reminder-container');
        reminderContainer.classList.toggle('visible');
    }
});

document.querySelectorAll('.calendar-emoji').forEach(button => {
    button.addEventListener('click', function() {
        const todoItem = this.parentElement;
        const reminderText = todoItem.getAttribute('data-reminder');
        showReminder(reminderText);
    });
});
//test
document.querySelectorAll('.calendar-emoji').forEach(button => {
    button.addEventListener('click', function() {
        const todoItem = this.parentElement;
        const reminderText = todoItem.getAttribute('data-reminder');
        showReminder(reminderText);
    });
});

function showReminder(reminderText) {
    const reminderContainer = document.getElementById('reminder-container');
    const reminderList = document.getElementById('reminder-list');
    reminderList.innerHTML = ''; // Clear existing reminders

    const reminderItem = `<div class="reminder-item"><span>${reminderText}</span><button class="trash" onclick="removeReminder(this)">🗑️</button></div>`;
    reminderList.innerHTML = reminderItem;

    reminderContainer.classList.add('visible'); // Show the reminder container
}

function removeReminder(button) {
    const reminderItem = button.parentElement;
    reminderItem.remove();
}

document.getElementById('darkModeToggle').addEventListener('change', function() {
    document.documentElement.classList.toggle('dark-mode', this.checked);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const toggle = document.getElementById('darkModeToggle');
    const emoji = document.querySelector('.emoji');
    
    toggle.addEventListener('change', function() {
        document.documentElement.classList.toggle('dark-mode', this.checked);
        if (this.checked) {
            emoji.textContent = '🌞';
        } else {
            emoji.textContent = '🌙';
        }
    });
});

document.getElementById('add-task').addEventListener('click', () => {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const newTask = document.createElement('li');
        newTask.innerHTML = `<span>⬜ ${taskText}</span>`;
        document.getElementById('tasks').appendChild(newTask);
        taskInput.value = '';
    }
});

document.getElementById('generate-quiz').addEventListener('click', () => {
    const notes = document.getElementById('notes').value.trim();
    if (notes) {
        alert('Quiz generation feature coming soon!');
        // Here you could implement the functionality to generate quiz from notes
    }
});

document.getElementById('start-timer').addEventListener('click', () => {
    let focusTime;
    const customHours = document.getElementById('custom-hours').value;
    if (customHours) {
        focusTime = customHours * 60;
    } else {
        const selectedTime = document.querySelector('input[name="focus-time"]:checked');
        if (selectedTime) {
            focusTime = selectedTime.value;
        } else {
            alert('Please select or enter a focus time.');
            return;
        }
    }
    const reason = document.getElementById('reason').value;
    alert(`Starting a timer for ${focusTime} minutes.\nReason: ${reason}`);
    // Here you could implement the timer functionality
});

document.addEventListener('DOMContentLoaded', function() {
    const studySessionButton = document.getElementById('study-session');
    const emojiButtons = document.querySelectorAll('.emoji-button');
    const studySessionContainer = document.getElementById('study-session-container');

    studySessionButton.addEventListener('click', function() {
        console.log('Study session button clicked!');
        // Show study session container and emoji buttons, hide other elements
        showElementsExcept([studySessionContainer, document.body, document.documentElement, ...emojiButtons]);
    });

    function showElementsExcept(visibleElements) {
      console.log(visibleElements);
        const allElements = document.querySelectorAll('body > *');
        allElements.forEach(element => {
            if (!visibleElements.includes(element)) {
                element.style.display = 'none';
            } else {
                element.style.display = ''; // Use default display value
            }
        });
    }
});