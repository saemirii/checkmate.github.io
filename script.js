
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
            todoInputContainer.style.display = "block";
            todoList.style.display = "block";
            todoTitle.classList.add("fadeIn");
            todoInputContainer.classList.add("fadeIn");
            todoList.classList.add("fadeIn");
        }, 500);
    }
});

function addTodo() {
    var inputField = document.getElementById("todoInput");
    var inputValue = inputField.value;
    if (inputValue.trim() !== "") {
        var listItem = document.createElement("li");

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
        calendarIcon.innerHTML = "&#128197;"; // Unicode for calendar emoji
        calendarIcon.onclick = function (event) {
            // var datePicker = document.getElementById("datepicker");
            // datePicker.style.display = "block";
            showCalendarPicker(event)
        };
        calendarIcon.style.marginLeft = "auto"; // Right positioning
        calendarIcon.style.cursor = "pointer"; // Add cursor pointer
        listItem.appendChild(calendarIcon);

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

// TURN OFF RIGHT-CLICKING -- You can delete this block of code if you don't need it anymore, up to you!
// document.addEventListener("contextmenu", function (event) {
//     event.preventDefault(); // Prevent default context menu
//
//     This should only trigger when user right-clicks above one of the to-do's
//     console.log(event.target);
//
//     if (event.target.tagName === "LI" && event.target.className === "fadeIn") {
//         event.preventDefault();
//         showCalendarPicker(event)
//     }
// });

function showCalendarPicker(event) {
    // Your logic to show the calendar picker goes here
    // alert("Calendar picker will be displayed here.")
    const datePicker = document.getElementById("datepicker");

    if(datePicker.style.display === "block") {
        datePicker.style.display = "none";
    } else {
        datePicker.style.display = "block";

        // change datePicker position to be next to cursor?
        // add or subtract to make the datepicker show up in different positions
        datePicker.style.left = event.pageX + 10 + "px";
        datePicker.style.top = event.pageY - 20 + "px";
    }

    console.log('triggered calendar picker')
}
