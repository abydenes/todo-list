import Project from "./project";

export default class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("default"));
    this.projects.push(new Project("another project"));
  }

  getTodoList = () => this.projects;

  addProject = (project) => this.projects.push(new Project(project));

  getProject = (name) => {
    return this.projects.find((project) => project.getName() === name);
  };

  deleteProject = (name) => {
    this.projects.splice(
      this.projects.indexOf(this.projects.find((x) => x.name === name)),
      1
    );
  };
}
