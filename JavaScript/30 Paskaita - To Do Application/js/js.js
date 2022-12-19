const form = document.querySelector("#add-task-form");
const taskList = document.querySelector("#task-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector("#new-task");
  const taskText = input.value;
  input.value = "";

  const task = document.createElement("li");
  task.textContent = taskText;
  taskList.appendChild(task);
});

taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});

const task = document.createElement("li");
task.textContent = taskText;

const deleteButton = document.createElement("button");
deleteButton.classList.add("delete-button");
task.appendChild(deleteButton);

taskList.appendChild(task);

taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  } else if (event.target.classList.contains("delete-button")) {
    const task = event.target.parentElement;
    task.remove();
  }
});
