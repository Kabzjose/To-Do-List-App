let ul = document.getElementById("list");
let button = document.getElementById("button");
let input = document.getElementById("text");
let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // load saved tasks

// Save array to Local Storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render all tasks
function loadTasks() {
  ul.innerHTML = ""; // clear the list to avoid duplicates

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerText = task;

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    li.appendChild(dltbtn);
    ul.appendChild(li);

    // Delete task from array and update Local Storage
    dltbtn.addEventListener("click", () => {
      tasks.splice(index, 1); // remove task from array
      saveTasks();             // update Local Storage
      loadTasks();             // re-render list
    });
  });
}

// Add a new task
function addTask() {
  if (input.value.trim() === "") return; // ignore empty input

  tasks.push(input.value); // add to array
  saveTasks();             // save to Local Storage
  loadTasks();             // re-render list
  input.value = "";        // clear input
}

// Load tasks on page load
loadTasks();

// Add task on Enter key
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Add task on button click
button.addEventListener("click", addTask);
