import "./style.css";

class TodoList {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
  }
  getProject(projectName) {
    return this.projects.find((project) => project.name === projectName);
  }
  updateProject(projectName, newName) {
    this.projects.splice(this.projects.indexOf(projectName), 1, newName);
  }
  removeProject(projectName) {
    this.projects.splice(this.projects.indexOf(projectName), 1);
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
  getTodo(todoName) {
    return this.todos.find((todo) => todo.name === todoName);
  }
  updateTodo(todoName, newName) {
    this.todos.splice(this.todos.indexOf(todoName), 1, newName);
  }
  removeTodo(todoName) {
    this.todos.splice(this.todos.indexOf(todoName), 1);
  }
}

class Todo {
  constructor(name, desc, dueDate, priority) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const todolist = new TodoList();
const defaultProject = new Project("defaultProject");
const school = new Project("school");
const todo1 = new Todo("study js", "till chapter 9", "12.12.2022", "Important");
const todo2 = new Todo("math hw", "pages 19-23", "09.01.2023", "Important");

defaultProject.addTodo(todo1);
school.addTodo(todo2);
todolist.addProject(defaultProject);
todolist.addProject(school);

let currentProject = defaultProject;

// MAIN CONTAINER

addEventListener("load", (e) => {
  highlightCurrentProject();
  displayTodos(currentProject); //display todos for default project on page load
});

const todoContainer = document.querySelector(".todo-container");

function displayTodos(project) {
  todoContainer.innerHTML = "";
  for (let i = 0; i < project.todos.length; i++) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const todoHeader = document.createElement("div");
    todoHeader.classList.add("todo-header");

    const todoName = document.createElement("h3");
    todoName.classList.add("todo-name");
    // todoName.setAttribute("contenteditable", "true")
    todoName.textContent = `${project.todos[i].name}`;

    const todoDesc = document.createElement("small");
    todoDesc.classList.add("todo-desc");
    todoDesc.textContent = `>${project.todos[i].desc}`;

    const small = document.createElement("small");
    small.classList.add("due-date");
    small.textContent = `due ${project.todos[i].dueDate}`;

    todoHeader.appendChild(todoName);
    todoHeader.appendChild(todoDesc);

    todoItem.appendChild(todoHeader);
    todoItem.appendChild(small);

    todoContainer.appendChild(todoItem);
  }
}

todoContainer.addEventListener("click", (e) => {
  deleteTodo(e);
});

function deleteTodo(e) {
  if (e.target.classList.contains("delete-todo")) {
    const todoName = document.querySelector(".todo-btn");
    e.target.parentElement.parentElement.remove();
    currentProject.removeTodo(todoName.textContent);
    displayTodos(currentProject);
  }
}

function cleanTodoContainer() {
  document.querySelector(".todo-container").innerHTML = "";
}

// SIDEBAR

function highlightCurrentProject() {
  const projectButton = document.querySelectorAll(".project-button");
  projectButton.forEach((button) => {
    if (button.textContent == currentProject.name) {
      button.style.backgroundColor = "white";
    } else if (button.textContent != currentProject.name) {
      button.style.backgroundColor = "unset";
    }
  });
}

function changeProject(e) {
  if (e.target.classList.contains("project-button")) {
    cleanTodoContainer();
    currentProject = todolist.getProject(e.target.textContent);
    displayTodos(currentProject);
  }
}

function addNewProject(e) {
  if (e.target.classList.contains("new-project-button")) {
    const projects = document.querySelector(".projects");
    const pbtn = document.createElement("button");
    pbtn.classList.add("project-button");
    const pbtnText = prompt("project name?");
    todolist.addProject(new Project(pbtnText));
    pbtn.textContent = pbtnText;
    projects.appendChild(pbtn);
  }
}

document.querySelector(".sidebar").addEventListener("click", (e) => {
  changeProject(e);
  addNewProject(e);
  highlightCurrentProject(e);
});

// MODAL

const modal = document.querySelector("#modal");
const btn = document.querySelector("#modal-btn");
const span = document.querySelector(".close");

function getTodoFromForm(project) {
  const form = document.querySelector("form");
  const name = document.getElementById("todo-name").value;
  const desc = document.getElementById("todo-desc").value;
  const date = document.getElementById("todo-date").value;
  const priority = document.getElementById("todo-priority").value;

  project.addTodo(new Todo(name, desc, date, priority));
  form.reset();
}

document.querySelector(".modal-form").addEventListener("submit", (e) => {
  e.preventDefault();
  getTodoFromForm(currentProject);
  displayTodos(currentProject);
});

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
