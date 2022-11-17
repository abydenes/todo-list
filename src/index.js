import "./style.css";
import deleteIcon from "./delete.png";

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
    this.todos.splice(
      this.todos.indexOf(this.todos.find((x) => x.name === todoName)),
      1
    );
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

const todoContainer = document.querySelector(".todo-container");

highlightCurrentProject();
displayTodos(currentProject); //display todos for default project on page load

// MAIN CONTAINER
function displayTodos(project) {
  todoContainer.innerHTML = "";
  for (let i = 0; i < project.todos.length; i++) {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.dataset.index = `${i}`;

    const todoHeader = document.createElement("div");
    todoHeader.classList.add("todo-header");

    const todoName = document.createElement("h3");
    todoName.classList.add("todo-name");
    todoName.setAttribute("contenteditable", "true");
    todoName.textContent = `${project.todos[i].name}`;

    const todoDesc = document.createElement("small");
    todoDesc.classList.add("todo-desc");
    todoDesc.setAttribute("contenteditable", "true");
    todoDesc.textContent = `${project.todos[i].desc}`;

    const todoFooter = document.createElement("div");
    todoFooter.classList.add("todo-footer");

    const todoDueDate = document.createElement("input");
    todoDueDate.classList.add("due-date");
    todoDueDate.type = "date";
    todoDueDate.value = `${project.todos[i].dueDate}`;
    todoDueDate.min = "2022-11-17"; // should be today

    const myIcon = new Image();
    myIcon.classList.add("delete-icon");
    myIcon.src = deleteIcon;

    todoHeader.appendChild(todoName);
    todoHeader.appendChild(todoDesc);

    todoItem.appendChild(todoHeader);
    todoFooter.appendChild(myIcon);
    todoFooter.appendChild(todoDueDate);

    todoItem.appendChild(todoFooter);

    todoContainer.appendChild(todoItem);
  }
  saveContent();
  console.log(currentProject.todos);
}

// delete todo
todoContainer.addEventListener("click", (e) => {
  deleteTodo(e);
});

function deleteTodo(e) {
  if (e.target.classList.contains("delete-icon")) {
    currentProject.removeTodo(
      e.target.parentElement.previousSibling.firstElementChild.textContent
    );
    displayTodos(currentProject);
  }
}

function cleanTodoContainer() {
  document.querySelector(".todo-container").innerHTML = "";
}

// CONTENTEDITABLE
function saveContent() {
  const todonames = document.querySelectorAll(".todo-name");
  const tododescs = document.querySelectorAll(".todo-desc");
  const duedates = document.querySelectorAll(".due-date");

  // I need to refactor these, they are repetitive
  for (let i = 0; i < todonames.length; i++) {
    todonames[i].addEventListener("blur", (e) => {
      const index = e.target.parentElement.parentElement.dataset.index;
      currentProject.todos[index].name = todonames[index].innerHTML;
    });
  }
  tododescs.forEach((description) => {
    description.addEventListener("blur", (e) => {
      const index = e.target.parentElement.parentElement.dataset.index;
      currentProject.todos[index].desc = tododescs[index].innerHTML;
    });
  });
  duedates.forEach((date) => {
    date.addEventListener("blur", (e) => {
      const index = e.target.parentElement.parentElement.dataset.index;
      currentProject.todos[index].dueDate = duedates[index].value;
    });
  });
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
    pbtn.textContent = "new project"
    pbtn.classList.add("project-button");
    todolist.addProject(new Project("new project"));
    projects.appendChild(pbtn);
    console.log(todolist)
  }
}

document.querySelector(".sidebar").addEventListener("click", (e) => {
  changeProject(e);
  addNewProject(e);
  highlightCurrentProject(e);
});

// todo btn
document.querySelector(".add-todo-btn").addEventListener("click", () => {
  currentProject.addTodo(new Todo("title", "description", "2022-11-17", ""));
  displayTodos(currentProject);
});
