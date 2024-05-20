const todoInput = document.getElementById('todoInput')
const setDueDateButton = document.getElementById('todoDueDate')


todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.keyCode === 13) {
    addTodo()
  }
})

setDueDateButton.addEventListener("click", showHideDatePicker)


function addTodo() {
  const inputField = document.getElementById("todoInput");
  const dateInput = document.getElementById('datePicker');

  const inputValue = inputField.value;
  if (inputValue.trim() !== "") {
    const listItem = document.createElement("li");
    listItem.dataset.dd = dateInput.value;
    listItem.style.position = "relative";

    // Trash icon
    const trashIcon = document.createElement("span");
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

    const expandLabel = document.createElement("label");
    const expandIcon = document.createElement("span");
    const expandCheckbox = document.createElement("input");
    const expandContent = document.createElement("div");
    const dueDateText = document.createElement('p')

    expandContent.className = "expandContent"

    expandIcon.innerHTML = "&#128197;";
    expandCheckbox.setAttribute("type", "checkbox")
    expandLabel.append(expandIcon, expandCheckbox);
    expandLabel.className = "expandLabel";
    listItem.appendChild(expandLabel);

    if (listItem.dataset.dd !== "") {
      dueDateText.innerText = `This task is due on: ${listItem.dataset.dd}`;
    } else {
      dueDateText.innerText = "This task has no due date";
    }
    expandContent.appendChild(dueDateText);

    expandCheckbox.addEventListener("change", (event) => {
      if (event.target.checked) {
        expandContent.classList.add("expanded");
      } else {
        expandContent.classList.remove("expanded");
      }
    })

    // Task text
    const taskText = document.createElement("span");
    taskText.textContent = inputValue;
    listItem.appendChild(taskText);
    listItem.appendChild(expandContent);

    // Status box and circle (unchanged)
    const statusBox = document.createElement("div");
    statusBox.innerText = "Not Started";
    statusBox.classList.add("status-box");
    listItem.appendChild(statusBox);

    const statusCircle = document.createElement("div");
    statusCircle.classList.add("status-circle", "not-started");
    listItem.appendChild(statusCircle);

    // Click event (unchanged)
    listItem.onclick = function () {
      this.classList.toggle("completed");
    };

    // Context menu event (unchanged)
    listItem.oncontextmenu = function (event) {
      event.preventDefault();
      const contextMenu = document.getElementById("contextMenu");
      contextMenu.style.left = event.pageX + "px";
      contextMenu.style.top = event.pageY + "px";
      contextMenu.style.display = "block";
      window.clickedTodo = this;
    };

    // Add fade-in animation
    listItem.classList.add("fadeIn");

    // Append the item to the list
    document.getElementById("todo-list").appendChild(listItem);

    // Clear date picker and hide it if its visible
    dateInput.parentElement.style.display = "none";
    dateInput.value = "";
    // Clear input field
    inputField.value = "";

  } else {
    alert("Please enter a task!");
  }
}


function showHideDatePicker() {
  const dateInput = document.getElementById('datePicker');
  const dateInputParent = dateInput.parentElement;
  if(dateInputParent.style.display === "none") {
    dateInputParent.style.display = "block";
  } else {
    dateInputParent.style.display = "none";
  }
}