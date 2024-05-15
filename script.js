var setDueDateButton = document.getElementById('todoDueDate')


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


function addTodo() {
    var inputField = document.getElementById("todoInput");
    const dateInput = document.getElementById('datePicker');

    var inputValue = inputField.value;
    if (inputValue.trim() !== "") {
        var listItem = document.createElement("li");
        listItem.dataset.dd = dateInput.value;
        listItem.style.position = "relative";

        // Trash icon
        var trashIcon = document.createElement("span");
        trashIcon.innerHTML = "&#128465;"; // Unicode for trash can emoji
        trashIcon.classList.add("trash-icon");
        trashIcon.onclick = function (event) {
            listItem.classList.add("fade-out");
            setTimeout(function () {
                listItem.remove();
            }, 500);
            event.stopPropagation(); // Prevent the task from being toggled when clicking the trash icon
        };
        listItem.appendChild(trashIcon);

        var calendarIcon = document.createElement("span");
        var dueDateContainer = document.createElement("div");
        var dueDateText = document.createElement('span')

        dueDateContainer.className = "due-date-container"
        dueDateContainer.style.display = "none";

        calendarIcon.innerHTML = "&#128197;"; // Unicode for calendar emoji
        calendarIcon.style.marginLeft = "auto"; // Right positioning
        calendarIcon.style.cursor = "pointer"; // Add cursor pointer
        calendarIcon.style.marginRight = "6px";
        listItem.appendChild(calendarIcon);
        listItem.appendChild(dueDateContainer);

        dueDateContainer.appendChild(dueDateText);

        // Show due date when user clicks on calendar icon
        calendarIcon.onclick = function (event) {
            event.stopPropagation();
            if(listItem.dataset.dd !== "") {
                dueDateText.innerText = `This task is due on: ${listItem.dataset.dd}`;
            } else {
                dueDateText.innerText = "This task has no due date";
            }
            if(dueDateContainer.style.display === "none") {
                dueDateContainer.style.display = "block";
            } else {
                dueDateContainer.style.display = "none";
            }
        };

        // Task text
        var taskText = document.createElement("span");
        taskText.textContent = inputValue;
        listItem.appendChild(taskText);

        // Status box and circle (unchanged)
        var statusBox = document.createElement("div");
        statusBox.innerText = "Not Started";
        statusBox.classList.add("status-box");
        listItem.appendChild(statusBox);

        var statusCircle = document.createElement("div");
        statusCircle.classList.add("status-circle", "not-started");
        listItem.appendChild(statusCircle);

        // Click event (unchanged)
        listItem.onclick = function () {
            this.classList.toggle("completed");
        };

        // Context menu event (unchanged)
        listItem.oncontextmenu = function (event) {
            event.preventDefault();
            var contextMenu = document.getElementById("contextMenu");
            contextMenu.style.left = event.pageX + "px";
            contextMenu.style.top = event.pageY + "px";
            contextMenu.style.display = "block";
            window.clickedTodo = this;
        };

        // Add fade-in animation
        listItem.classList.add("fadeIn");

        // Append the list item to the todo list
        document.getElementById("todo-list").appendChild(listItem);

        // Clear date picker and hide it if its visible
        showHideDatePicker()
        dateInput.value = "";
        // Clear input field
        inputField.value = "";

    } else {
        alert("Please enter a task!");
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
        window.clickedTodo.querySelector(".status-box").style.backgroundColor = "#BEE4A8"; // Change to green
        window.clickedTodo.querySelector(".status-box").style.color = "white"; // Text color
    }
});

document.getElementById("markInProgress").addEventListener("click", function () {
    if (window.clickedTodo) {
        window.clickedTodo.classList.remove("completed", "not-started");
        window.clickedTodo.querySelector(".status-box").innerText = "In Progress";
        window.clickedTodo.querySelector(".status-box").style.backgroundColor = "#FFD789"; // Change to light yellow
        window.clickedTodo.querySelector(".status-box").style.color = "white"; // Text color
    }
});

document.getElementById("markNotStarted").addEventListener("click", function () {
    if (window.clickedTodo) {
        window.clickedTodo.classList.remove("completed", "in-progress");
        window.clickedTodo.querySelector(".status-box").innerText = "Not Started";
        window.clickedTodo.querySelector(".status-box").style.backgroundColor = "#FF9494"; // Change to light gray
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

function removeReminder(button) {
    const reminderItem = button.parentElement;
    reminderItem.remove();
}

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
    document.body.classList.toggle('dark-mode', this.checked);
});

document.addEventListener('DOMContentLoaded', (event) => {
    const toggle = document.getElementById('darkModeToggle');
    const emoji = document.querySelector('.emoji');
    
    toggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode', this.checked);
        if (this.checked) {
            emoji.textContent = '🌞';
        } else {
            emoji.textContent = '🌙';
        }
    });
});

//push test
