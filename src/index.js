import "./style.css";

class Todo {
  constructor(todoName, todoDate, priority) {
    this.todoName = todoName;
    this.todoDate = todoDate;
    this.priority = priority;
  }
}
const defaultProject = [];
const project2 = []
let project = defaultProject;

function getTodoFromForm() {
  const form = document.querySelector("form");
  const todoName = document.getElementById("todo-name").value;
  const todoDate = document.getElementById("todo-date").value;
  const todoPriority = document.getElementById("todo-priority").value;
  addTodoToLibrary(project, todoName, todoDate, todoPriority);
  displayTodos(project);
  form.reset();
}

function addTodoToLibrary(project, todoName, todoDate, todoPriority) {
  project.push(new Todo(todoName, todoDate, todoPriority));
}

const todoContainer = document.querySelector(".todo-container");

function displayTodos(project) {
  todoContainer.innerHTML = "";
  for (let i = 0; i < project.length; i++) {
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("todo");
    const innerDiv = document.createElement("div");
    const input = document.createElement("input");
    input.type = "checkbox";
    const nameButton = document.createElement("button");
    nameButton.classList.add("todo-btn");
    const innerDiv2 = document.createElement("div");
    const dateButton = document.createElement("button");
    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("delete-todo");

    nameButton.textContent = `${project[i].todoName}`;
    dateButton.textContent = `${project[i].todoDate}`;

    innerDiv.appendChild(input);
    innerDiv.appendChild(nameButton);
    outerDiv.appendChild(innerDiv);
    innerDiv2.appendChild(dateButton);
    innerDiv2.appendChild(closeButton);
    outerDiv.appendChild(innerDiv2);

    outerDiv.dataset.index = `${i}`;
    todoContainer.appendChild(outerDiv);
  }
}

todoContainer.addEventListener("click", (e) => {
  let i = e.target.parentElement.dataset.index;
  isDelete(e, i);
  displayTodos(project);
});

function isDelete(e, i) {
  if (e.target.classList.contains("delete-todo")) {
    e.target.parentElement.remove();
    project.splice(i, 1);
  }
}
const modalForm = document.querySelector(".modal-form");
modalForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getTodoFromForm(project);
});

function cleanTodoContainer() {
  const container = document.querySelector(".todo-container");
  container.innerHTML = "";
}

const sidebar = document.querySelector(".sidebar");

sidebar.addEventListener("click", (e) => {
  if (e.target.classList.contains("project-button")) {
    const projectName = e.target.textContent;
    cleanTodoContainer();
    displayTodos(projectName);
  }

  if (e.target.classList.contains("new-project-button")) {
    const projects = document.querySelector(".projects");
    const pbtn = document.createElement("button");
    pbtn.classList.add("project-button");
    pbtn.textContent = prompt("project name?");
    projects.appendChild(pbtn);
  }
});

// MODAL
const modal = document.querySelector("#modal");
const btn = document.querySelector("#modal-btn");
const span = document.querySelector(".close");

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});

// SUBMIT FROM MODAL
