export default class Task {
  constructor(name, dueDate) {
    this.name = name;
    this.dueDate = dueDate;
  }

  getName = () => this.name;

  setName = (name) => (this.name = name);

  getDate = () => this.dueDate;

  setDate = (date) => (this.dueDate = date);
}