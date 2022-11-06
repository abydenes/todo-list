import "./style.css";

class Todo {
  constructor(todoName, dueDate, priority) {
    this.todoName = todoName;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const todo1 = new Todo("HOMEWORK", "12.12.2022", "Slightly Important");
const todo2 = new Todo("football", "11.01.2023", "Important");

const mainContainer = document.querySelector(".main-container");

createNewTodo(todo1);
createNewTodo(todo2);

function createNewTodo(todo) {
  
}
