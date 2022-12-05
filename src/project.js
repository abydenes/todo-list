import Task from "./task";

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.tasks.push(new Task("placeholder task"))
  }

  getName = () => this.name;

  setName = (name) => (this.name = name);

  addTask = (task, dueDate) => this.tasks.push(new Task(task, dueDate));

  getTask = (name) => this.tasks.find((task) => task.getName() === name); 

  deleteTask = (name) => {
    this.todos.splice(
      this.todos.indexOf(this.todos.find((x) => x.name === name)),
      1
    );
  };
}
