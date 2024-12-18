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
