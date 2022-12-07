import "./style.css";
import Storage from "./storage";
import deleteIcon from "./delete.png";
import editIcon from "./pencil-outline.png";

export function init() {
  displayProjects();
  displayTasks();
  // highlightCurrentProject();
  addInitialListeners();
}

let currentProject = Storage.getTodoList().getProject("default");

function addInitialListeners() {
  const todoContainer = document.querySelector(".todo-container");

  document.querySelector(".add-todo-button").addEventListener("click", () => {
    addTask();
  });

  todoContainer.addEventListener("click", (e) => {
    e.target.classList.contains("delete-icon") ? deleteTask(e) : false;
    e.target.classList.contains("todo-checkbox") ? checkTodo(e) : false;
  });

  document.querySelector(".sidebar").addEventListener("click", (e) => {
    e.target.classList.contains("project-button") ? changeProject(e) : false;
    e.target.classList.contains("add-project-button") ? addProject() : false;
    e.target.classList.contains("edit-project") ? editProject(e) : false;
    e.target.classList.contains("delete-project") ? deleteProject(e) : false;
  });
}

function checkTodo(e) {}

function addTask() {
  Storage.addTask(document.querySelector(".project-name").textContent, "task");
  displayTasks();
}

function displayTasks() {
  const todoContainer = document.querySelector(".todo-container");
  const projectName = document.querySelector(".project-name").textContent;
  const tasks = Storage.getTodoList().getProject(projectName).getTasks();
  cleanTodoContainer();

  for (let i = 0; i < tasks.length; i++) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.dataset.index = `${i}`;

    const todoLeft = document.createElement("div");
    todoLeft.classList.add("todo-left");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");

    const todoName = document.createElement("h3");
    todoName.classList.add("todo-name");
    todoName.setAttribute("contenteditable", "true");
    todoName.textContent = `${tasks[i].name}`;

    const todoRight = document.createElement("div");
    todoRight.classList.add("todo-right");

    const todoDueDate = document.createElement("input");
    todoDueDate.classList.add("due-date");
    todoDueDate.type = "date";
    todoDueDate.value = `${tasks[i].dueDate}`;
    todoDueDate.min = "2022-11-17"; // should be today use datefns

    const myIcon = new Image();
    myIcon.classList.add("delete-icon");
    myIcon.src = deleteIcon;

    todoLeft.appendChild(checkbox);
    todoLeft.appendChild(todoName);
    todoItem.appendChild(todoLeft);
    todoRight.appendChild(todoDueDate);
    todoRight.appendChild(myIcon);
    todoItem.appendChild(todoRight);
    todoContainer.appendChild(todoItem);
  }
}

function deleteTask(e) {}

function cleanTodoContainer() {
  document.querySelector(".todo-container").innerHTML = "";
}

function addProject() {
  Storage.addProject(prompt("project name pls"));
  displayProjects();
}

function displayProjects() {
  cleanProjectContainer();
  const projects = Storage.getTodoList().getProjects();
  for (let i = 0; i < projects.length; i++) {
    const projectsContainer = document.querySelector(".project-container");
    const projectDiv = document.createElement("div");

    const editProject = new Image();
    editProject.classList.add("edit-project");
    editProject.src = editIcon;

    const deleteProject = new Image();
    deleteProject.classList.add("delete-project");
    deleteProject.src = deleteIcon;

    projectDiv.appendChild(editProject);
    projectDiv.appendChild(deleteProject);

    const pbtn = document.createElement("button");
    pbtn.textContent = `${projects[i].name}`;
    pbtn.classList.add("project-button");

    pbtn.appendChild(projectDiv);
    projectsContainer.appendChild(pbtn);
  }
  highlightCurrentProject();
}

function displayProjectName(name) {
  const projectName = document.querySelector(".project-name");
  projectName.textContent = name;
}

function editProject() {}

function deleteProject(e) {}

function highlightCurrentProject() {
  const projectButton = document.querySelectorAll(".project-button");
}

function changeProject(e) {
  currentProject = Storage.getTodoList().getProject(e.target.textContent);
  displayProjectName(e.target.textContent);
  displayTasks();
}

function cleanProjectContainer() {
  document.querySelector(".project-container").innerHTML = "";
}
