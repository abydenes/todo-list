import Task from "./task";

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.tasks.push(new Task("placeholder task", "12.12.2022"));
  }

  getTasks = () => this.tasks;

  setTasks = (tasks) => (this.tasks = tasks);

  getName = () => this.name;

  setName = (name) => (this.name = name);

  addTask = (task, date) => this.tasks.push(new Task(task, date));

  getTask = (name) => this.tasks.find((task) => task.getName() === name);

  deleteTask = (name) => {
    this.tasks.splice(
      this.tasks.indexOf(this.tasks.find((x) => x.name === name)),
      1
    );
  };
}
