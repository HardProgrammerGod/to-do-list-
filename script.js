// DOM
const taskInput = document.getElementById("taskInput");
const searchInput = document.getElementById("search");
const taskList = document.getElementById("taskList");
const addTaskButton = document.getElementById("addTaskButton");

// load tasks from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks(tasks);

// Add task
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    tasks.push({text: taskText});
    saveTasks();
    renderTasks(tasks);
    taskInput.value = "";
});

// Delete Task
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks(tasks);
}

// Edit Taskk
function editTask(index) {
    const newTask = prompt("Edit Task:", tasks[index].text);
    if (newTask === null || newTask.trim() === "") return;

    tasks[index].text = newTask.trim()
    saveTasks();
    renderTasks(tasks);
}

// search tasks
searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(searchText));
    renderTasks(filteredTasks);
});

// Render Tasks
function renderTasks(taskArray) {
    taskList.innerHTML = "";
    taskArray.forEach((task, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${task.text}</span>
        <div>
          <button onclick="editTask(${index})">Edit</button>
          <button onclick="deleteTask(${index})">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
    });
  }

// save tasks to storage (local)
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
