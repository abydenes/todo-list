import "./style.css";
import Storage from "./storage";
import deleteIcon from "./delete.png";
import editIcon from "./pencil-outline.png";

export function init() {
  displayProjects();
  displayTasks();
  highlightCurrentProject();
  addInitialListeners();
  saveContent();
}

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

function checkTodo(e) {
  if (e.target.checked) {
    deleteTask(e);
  }
}

function addTask() {
  const projectName = document.querySelector(".project-name").textContent;
  const index = Storage.getTodoList().getProject(projectName).getTasks().length;
  Storage.addTask(
    document.querySelector(".project-name").textContent,
    `task${index}`,
    "undefined"
  );
  displayTasks();
}

function displayTasks() {
  const todoContainer = document.querySelector(".todo-container");
  const projectName = document.querySelector(".project-name").textContent;
  const tasks = Storage.getTodoList().getProject(projectName).getTasks();
  cleanTodoContainer();

  for (let i = tasks.length - 1; i >= 0; i--) {
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
    todoName.textContent = `${tasks[i].getName()}`;

    const todoRight = document.createElement("div");
    todoRight.classList.add("todo-right");

    const todoDueDate = document.createElement("input");
    todoDueDate.classList.add("due-date");
    todoDueDate.type = "date";
    todoDueDate.value = `${tasks[i].getDate()}`;
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
  saveContent();
}

function deleteTask(e) {
  const taskName =
    e.target.parentElement.parentElement.childNodes[0].textContent;
  Storage.deleteTask(
    document.querySelector(".project-name").textContent,
    taskName
  );
  displayTasks();
}

function saveContent() {
  const todoNames = document.querySelectorAll(".todo-name");
  const dueDates = document.querySelectorAll(".due-date");
  const projectName = document.querySelector(".project-name").textContent;
  const todoItems = document.querySelectorAll(".todo-item");

  for (let i = todoNames.length - 1; i >= 0; i--) {
    const itemIndex = todoItems[i].dataset.index;
    todoNames[i].addEventListener("blur", () => {
      const oldTaskName = Storage.getTodoList()
        .getProject(projectName)
        .getTasks()
        [itemIndex].getName();
      Storage.renameTask(projectName, oldTaskName, todoNames[i].textContent);
    });

    dueDates[i].addEventListener("blur", () => {
      const TaskName = Storage.getTodoList()
        .getProject(projectName)
        .getTasks()
        [itemIndex].getName();
      Storage.setDueDate(projectName, TaskName, dueDates[i].value);
    });
  }
}

function cleanTodoContainer() {
  document.querySelector(".todo-container").innerHTML = "";
}

function addProject() {
  const index = Storage.getTodoList().getProjects().length;
  Storage.addProject(`project${index + 1}`);
  displayProjects();
}

function displayProjects() {
  cleanProjectContainer();
  const projects = Storage.getTodoList().getProjects();
  const projectName = document.querySelector(".project-name").textContent;
  for (let i = 0; i < projects.length; i++) {
    const projectsContainer = document.querySelector(".project-container");
    const projectDiv = document.createElement("div");

    if (projects[i].getName() === projectName) {
      const editProject = new Image();
      editProject.classList.add("edit-project");
      editProject.src = editIcon;

      const deleteProject = new Image();
      deleteProject.classList.add("delete-project");
      deleteProject.src = deleteIcon;

      projectDiv.appendChild(editProject);
      projectDiv.appendChild(deleteProject);
    }

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

function editProject() {
  const projectName = document.querySelector(".project-name").textContent;
  Storage.renameProject(projectName, prompt("insert new project name"));
  displayProjects();
}

function deleteProject(e) {
  const projectName = e.target.parentElement.parentElement.textContent;
  Storage.deleteProject(projectName);
  displayProjects();
}

function highlightCurrentProject() {
  const projectName = document.querySelector(".project-name").textContent;
  const projectButton = document.querySelectorAll(".project-button");
  projectButton.forEach((button) => {
    if (button.textContent == projectName) {
      button.style.backgroundColor = "white";
    } else button.style.backgroundColor = "unset";
  });
}

function changeProject(e) {
  displayProjectName(e.target.textContent);
  displayProjects();
  displayTasks();
  highlightCurrentProject();
}

function cleanProjectContainer() {
  document.querySelector(".project-container").innerHTML = "";
}
