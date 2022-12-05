import "./style.css";
import TodoList from "./todoList";
import deleteIcon from "./delete.png";
import editIcon from "./pencil-outline.png";

export default class DOM {

  static todolist = new TodoList();

  static currentProject = DOM.todolist.getProject("default");

  static todoContainer = document.querySelector(".todo-container");

  static init() {
    console.log(DOM.todolist.getProject("default"));
    DOM.displayTodos(DOM.currentProject);
    DOM.displayProjects();
    DOM.highlightCurrentProject();
    
  };

  static addInitialListeners() {
    document.querySelector(".add-todo-button").addEventListener("click", () => {
      DOM.addTodo();
    });

    todoContainer.addEventListener("click", (e) => {
      e.target.classList.contains("delete-icon") ? DOM.deleteTodo(e) : false;
      e.target.classList.contains("todo-checkbox") ? DOM.checkTodo(e) : false;
    });

    document.querySelector(".sidebar").addEventListener("click", (e) => {
      e.target.classList.contains("project-button") ? DOM.changeProject(e) : false;
      e.target.classList.contains("add-project-button") ? DOM.addProject() : false;
      e.target.classList.contains("edit-project") ? DOM.editProject(e) : false;
      e.target.classList.contains("delete-project") ? DOM.deleteProject(e) : false;
    }); 
  };

  static checkTodo(e) {
    if (e.target.checked) {
      currentProject.removeTodo(e.target.nextElementSibling.textContent);
      DOM.displayTodos(DOM.currentProject);
    }
  }

  static addTodo() {
    DOM.currentProject.addTodo("name", "2022-11-17");
    DOM.displayTodos(DOM.currentProject);
  }

  static displayTodos(project) {
    DOM.cleanTodoContainer();
    for (let i = 0; i < project.tasks.length; i++) {
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
      todoName.textContent = `${project.tasks[i].name}`;

      const todoRight = document.createElement("div");
      todoRight.classList.add("todo-right");

      const todoDueDate = document.createElement("input");
      todoDueDate.classList.add("due-date");
      todoDueDate.type = "date";
      todoDueDate.value = `${project.tasks[i].dueDate}`;
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
    DOM.saveContent();
  }

  static deleteTodo(e) {
    const todoName = e.target.parentElement.previousSibling.textContent;
    DOM.currentProject.removeTodo(todoName);
    DOM.displayTodos(DOM.currentProject);
  }

  static cleanTodoContainer() {
    document.querySelector(".todo-container").innerHTML = "";
  }

  static saveContent() {
    const todonames = document.querySelectorAll(".todo-name");
    const duedates = document.querySelectorAll(".due-date");

    // I need to refactor these, they are repetitive
    for (let i = 0; i < todonames.length; i++) {
      todonames[i].addEventListener("blur", (e) => {
        const index = e.target.parentElement.parentElement.dataset.index;
        DOM.currentProject.tasks[index].name = todonames[index].innerHTML;
      });
    }
    duedates.forEach((date) => {
      date.addEventListener("blur", (e) => {
        const index = e.target.parentElement.parentElement.dataset.index;
        DOM.currentProject.tasks[index].dueDate = duedates[index].value;
      });
    });
  }

  static addProject() {
    const value = prompt("enter project name");
    const projectBtns = Array.from(
      document.querySelectorAll(".project-button")
    );
    if (projectBtns.every((p) => p.textContent != value) && value !== null) {
      DOM.todolist.addProject(value);
    } else alert("no same name or null pls");
    DOM.displayProjects();
  }

  static displayProjects() {
    DOM.cleanProjectContainer();
    for (let i = 0; i < DOM.todolist.projects.length; i++) {
      const projects = document.querySelector(".project-container");
      const projectdiv = document.createElement("div");

      if (DOM.todolist.projects[i] == DOM.currentProject) {
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
    DOM.highlightCurrentProject();
  }

  static editProject() {
    DOM.todolist.updateProject(
      DOM.currentProject,
      prompt("enter new name", `${DOM.currentProject.name}`)
    );
    DOM.displayProjects();
  }

  static deleteProject(e) {
    todolist.removeProject(currentProject);
    DOM.currentProject =
    DOM.todolist.projects[DOM.todolist.projects.indexOf(DOM.currentProject) + 1];
      DOM.displayProjects();
      DOM.displayTodos(DOM.currentProject);
  }
  
  static highlightCurrentProject() {
    const projectButton = document.querySelectorAll(".project-button");
    projectButton.forEach((button) => {
      if (button.textContent == DOM.currentProject.getName()) {
        button.style.backgroundColor = "white";
      } else if (button.textContent != DOM.currentProject.getName()) {
        button.style.backgroundColor = "unset";
      }
    });
  }

  static changeProject(e) {
    DOM.currentProject = DOM.todolist.getProject(e.target.textContent);
    DOM.displayTodos(DOM.currentProject);
    DOM.highlightCurrentProject();
    DOM.displayProjects();
  }

  static cleanProjectContainer() {
    document.querySelector(".project-container").innerHTML = "";
  }
}
