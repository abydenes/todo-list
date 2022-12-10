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
  // this should move the task to another list below the task, with a strikethrough effect
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

  const todoItemsHtml = tasks
    .map(
      (task, i) => `
    <div class="todo-item" data-index="${i}">
      <div class="todo-left">
        <input type="checkbox" class="todo-checkbox" />
        <h3 class="todo-name" contenteditable="true">${task.getName()}</h3>
      </div>
      <div class="todo-right">
        <input type="date" class="due-date" value="${task.getDate()}" min="2022-11-17" />
        <img class="delete-icon" src="./delete.png" />
      </div>
    </div>
  `
    )
    .join("");

  // Use the innerHTML property to insert the elements into the DOM
  todoContainer.innerHTML = todoItemsHtml;

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
