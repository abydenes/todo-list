import "./style.css";

class TodoList {
  constructor() {
    this.projects = []
  }

  addProject(project) {
    this.projects.push(project)
  }

  getProject(projectName) {
    return this.projects.find(project => project.name === projectName)
  }

  updateProject(projectName, newName) {
    this.projects.splice(this.projects.indexOf(projectName), 1, newName)
  }

  removeProject(projectName) {
    this.projects.splice(this.projects.indexOf(projectName), 1)
  }
}

class Project {
  constructor(name) {
    this.name = name
    this.todos = []
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  getTodo(todoName) {
    return this.todos.find(todo => todo.name === todoName)
  }

  updateTodo(todoName, newName) {
    this.todos.splice(todos.indexOf(todoName), 1, newName)
  }

  removeTodo(todoName) {
    this.todos.splice(todos.indexOf(todoName), 1)
  }
}

class Todo {
  constructor(name, dueDate, priority) {
    this.name = name
    this.dueDate = dueDate
    this.priority = priority
  }
}

const todolist = new TodoList()
const defaultProject = new Project("defaultProject")
const todo1 = new Todo("eng homework", "12.12.2022", "Important")

defaultProject.addTodo(todo1)
todolist.addProject(defaultProject)

console.log(todo1)
console.log(defaultProject)
console.log(todolist)


function getTodoFromForm() {
  const form = document.querySelector("form");
  const name = document.getElementById("todo-name").value;
  const date = document.getElementById("todo-date").value;
  const priority = document.getElementById("todo-priority").value;

  // defaultProject.addTask(new Todo(name, date, priority))
  console.log()
  form.reset();
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

    nameButton.textContent = ``;
    dateButton.textContent = ``;

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
  displayTodos();
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
  getTodoFromForm();
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
    const pbtnText = prompt("project name?")


    pbtn.textContent = pbtnText;
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