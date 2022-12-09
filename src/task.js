export default class Task {
  constructor(name, date) {
    this.name = name;
    this.dueDate = date;
  }

  getName = () => this.name;

  setName = (name) => (this.name = name);

  getDate = () => this.dueDate;

  setDate = (date) => (this.dueDate = date);
}