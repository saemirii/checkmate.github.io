import "./style.css"
//import "./js/showLogin.js"
import "./js/addTodo.js"

// Show the main content of the page
document.addEventListener("keydown", function (event) {
    if (event.code === 'Enter' || event.code === 'Space') {
        const homeMenu = document.getElementById("homeMenu");
        const todoTitle = document.getElementById("todoTitle");
        const todoInputContainer = document.getElementById("todo-input-container");
        const todoList = document.getElementById("todo-list");
        //const checkInButton = document.getElementById("checkInButton");

        homeMenu.classList.add("fade-out");
        //checkInButton.style.display = "none";
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

document.addEventListener("click", function (event) {
    const contextMenu = document.getElementById("contextMenu");
    if (contextMenu.style.display === "block") {
        contextMenu.style.display = "none";
    }
});

document.getElementById("markDone").addEventListener("click", function () {
    if (window.clickedTodo) {
        window.clickedTodo.classList.remove("in-progress", "not-started");
        window.clickedTodo.classList.add("completed");
        const statusBox = window.clickedTodo.querySelector(".status-box");
        statusBox.innerText = "Done";
        statusBox.classList.remove("bg-[#FFD073]", "bg-[#FF9494]", "text-black");
        statusBox.classList.add("bg-[#ACDD8F]", "text-black", "rounded-full");
    }
});

document.getElementById("markInProgress").addEventListener("click", function () {
    if (window.clickedTodo) {
        window.clickedTodo.classList.remove("completed", "not-started");
        window.clickedTodo.classList.add("in-progress");
        const statusBox = window.clickedTodo.querySelector(".status-box");
        statusBox.innerText = "In Progress";
        statusBox.classList.remove("bg-[#ACDD8F]", "bg-[#FF9494]", "text-black");
        statusBox.classList.add("bg-[#FFD073]", "text-black", "rounded-full");
    }
});

document.getElementById("markNotStarted").addEventListener("click", function () {
    if (window.clickedTodo) {
        window.clickedTodo.classList.remove("completed", "in-progress");
        window.clickedTodo.classList.add("not-started");
        const statusBox = window.clickedTodo.querySelector(".status-box");
        statusBox.innerText = "Not Started";
        statusBox.classList.remove("bg-[#ACDD8F]", "bg-[#FFD073]", "text-black");
        statusBox.classList.add("bg-[#FF9494]", "text-black", "rounded-full");
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Shift') {
        const reminderContainer = document.getElementById('reminder-container');
        // reminderContainer.classList.toggle('hidden');
        reminderContainer.classList.toggle('visible')
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

document.addEventListener('DOMContentLoaded', (event) => {
    const toggle = document.getElementById('darkModeToggle');
    const emoji = document.querySelector('.emoji');
    
    toggle.addEventListener('change', function() {
        document.documentElement.classList.toggle('dark', this.checked);
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
                element.classList.add("hidden")
            } else {
                element.classList.remove('hidden'); // Use default display value
            }
        });
    }
});