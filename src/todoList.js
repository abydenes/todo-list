export default class TodoList {
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
