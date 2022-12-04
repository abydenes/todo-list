import "./style.css";
import TodoList from "./todoList";
import Project from "./project";
import Todo from "./todo";
import deleteIcon from "./delete.png";
import editIcon from "./pencil-outline.png";

const todolist = new TodoList();
const defaultProject = new Project("example project 1");
const school = new Project("project 2");
const todo1 = new Todo("placeholder", "12.12.2022");
const todo2 = new Todo("placeholder 2", "09.01.2023");

defaultProject.addTodo(todo1);
school.addTodo(todo2);
todolist.addProject(defaultProject);
todolist.addProject(school);

let currentProject = defaultProject;

const todoContainer = document.querySelector(".todo-container");

displayTodos(currentProject); //display todos for default project on page load
displayProjects();
highlightCurrentProject();

// MAIN CONTAINER

document.querySelector(".add-todo-button").addEventListener("click", () => {
  addTodo();
});

todoContainer.addEventListener("click", (e) => {
  e.target.classList.contains("delete-icon") ? deleteTodo(e) : false;
  e.target.classList.contains("todo-checkbox") ? checkTodo(e) : false;
});

function checkTodo(e) {
  if (e.target.checked) {
    currentProject.removeTodo(e.target.nextElementSibling.textContent);
    displayTodos(currentProject);
  }
}

function addTodo() {
  currentProject.addTodo(new Todo("name", "2022-11-17"));
  displayTodos(currentProject);
}

function displayTodos(project) {
  cleanTodoContainer();
  for (let i = 0; i < project.todos.length; i++) {
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
    todoName.textContent = `${project.todos[i].name}`;

    const todoRight = document.createElement("div");
    todoRight.classList.add("todo-right");

    const todoDueDate = document.createElement("input");
    todoDueDate.classList.add("due-date");
    todoDueDate.type = "date";
    todoDueDate.value = `${project.todos[i].dueDate}`;
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

function deleteTodo(e) {
  const todoName = e.target.parentElement.previousSibling.textContent;
  currentProject.removeTodo(todoName);
  displayTodos(currentProject);
}

function cleanTodoContainer() {
  document.querySelector(".todo-container").innerHTML = "";
}

// CONTENTEDITABLE
function saveContent() {
  const todonames = document.querySelectorAll(".todo-name");
  const duedates = document.querySelectorAll(".due-date");

  // I need to refactor these, they are repetitive
  for (let i = 0; i < todonames.length; i++) {
    todonames[i].addEventListener("blur", (e) => {
      const index = e.target.parentElement.parentElement.dataset.index;
      currentProject.todos[index].name = todonames[index].innerHTML;
    });
  }
  duedates.forEach((date) => {
    date.addEventListener("blur", (e) => {
      const index = e.target.parentElement.parentElement.dataset.index;
      currentProject.todos[index].dueDate = duedates[index].value;
    });
  });
}

// SIDEBAR
document.querySelector(".sidebar").addEventListener("click", (e) => {
  e.target.classList.contains("project-button") ? changeProject(e) : false;
  e.target.classList.contains("add-project-button") ? addProject() : false;
  e.target.classList.contains("edit-project") ? editProject(e) : false;
  e.target.classList.contains("delete-project") ? deleteProject(e) : false;
});

function addProject() {
  const value = prompt("enter project name");
  const projectBtns = Array.from(document.querySelectorAll(".project-button"));
  if (projectBtns.every((p) => p.textContent != value) && value !== null) {
    todolist.addProject(new Project(value));
  } else alert("no same name or null pls");
  displayProjects();
}

function displayProjects() {
  cleanProjectContainer();
  for (let i = 0; i < todolist.projects.length; i++) {
    const projects = document.querySelector(".project-container");
    const projectdiv = document.createElement("div");

    if (todolist.projects[i] == currentProject) {
      const editProject = new Image();
      editProject.classList.add("edit-project");
      editProject.src = editIcon;

      const deleteProject = new Image();
      deleteProject.classList.add("delete-project");
      deleteProject.src = deleteIcon;

      projectdiv.appendChild(editProject);
      projectdiv.appendChild(deleteProject);
    }

    const pbtn = document.createElement("button");
    pbtn.textContent = `${todolist.projects[i].name}`;
    pbtn.classList.add("project-button");

    pbtn.appendChild(projectdiv);
    projects.appendChild(pbtn);
  }
  highlightCurrentProject();
}

function editProject() {
  todolist.updateProject(
    currentProject,
    prompt("enter new name", `${currentProject.name}`)
  );
  displayProjects();
}

function deleteProject(e) {
  todolist.removeProject(currentProject);
  currentProject =
    todolist.projects[todolist.projects.indexOf(currentProject) + 1];
  displayProjects();
  displayTodos(currentProject);
}

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
  currentProject = todolist.getProject(e.target.textContent);
  displayTodos(currentProject);
  highlightCurrentProject();
  displayProjects();
}

function cleanProjectContainer() {
  document.querySelector(".project-container").innerHTML = "";
}