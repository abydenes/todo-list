export default class Project {
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