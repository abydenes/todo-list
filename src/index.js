import "./style.css";
import deleteIcon from "./delete.png";
import editIcon from "./pencil-outline.png";

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
    const index = this.projects.indexOf(this.getProject(projectName.name));
    this.projects[index].name = newName;
  }
  removeProject(projectName) {
    const index = this.projects.indexOf(this.getProject(projectName.name));
    this.projects.splice(index, 1);
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

displayTodos(currentProject); //display todos for default project on page load
displayProjects();
highlightCurrentProject();

// MAIN CONTAINER

document.querySelector(".add-todo-btn").addEventListener("click", () => {
  addTodo();
});

todoContainer.addEventListener("click", (e) => {
  e.target.classList.contains("delete-icon") ? deleteTodo(e) : false;
});

function addTodo() {
  currentProject.addTodo(new Todo("title", "description", "2022-11-17", ""));
  displayTodos(currentProject);
}

function displayTodos(project) {
  cleanTodoContainer();
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
    todoDueDate.min = "2022-11-17"; // should be today use datefns

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
}

function deleteTodo(e) {
  const todoName =
    e.target.parentElement.previousSibling.firstElementChild.textContent;
  currentProject.removeTodo(todoName);
  displayTodos(currentProject);
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
document.querySelector(".sidebar").addEventListener("click", (e) => {
  e.target.classList.contains("project-button") ? changeProject(e) : false;
  e.target.textContent == "add new project" ? addProject() : false;
  e.target.classList.contains("edit-project") ? editProject(e) : false;
  e.target.classList.contains("delete-project") ? deleteProject(e) : false;
});
//remove this
console.log(todolist.projects);

function addProject() {
  const value = prompt("enter project name");
  const projectBtns = Array.from(document.querySelectorAll(".project-button"));
  if (projectBtns.every((p) => p.textContent != value)) {
    todolist.addProject(new Project(value));
  } else alert("no same name pls")
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

function editProject(e) {
  todolist.updateProject(currentProject, prompt("project name pls", "project"));
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
