import Project from "./project";
import Task from "./task";
import TodoList from "./todoList";

export default class Storage {
  static constructTodoList(data) {
    const todoList = Object.assign(new TodoList(), data);

    todoList.setProjects(
      todoList
        .getProjects()
        .map((project) => Object.assign(new Project(), project))
    );

    todoList
      .getProjects()
      .forEach((project) =>
        project.setTasks(
          project.getTasks().map((task) => Object.assign(new Task(), task))
        )
      );

    return todoList;
  }

  static saveTodoList(data) {
    localStorage.setItem("todoList", JSON.stringify(data));
  }

  static getTodoList() {
    const todoListData = localStorage.getItem("todoList");
    if (todoListData === null) {
      return new TodoList();
    }

    return this.constructTodoList(JSON.parse(todoListData));
  }

  static addProject(project) {
    const todoList = Storage.getTodoList();
    todoList.addProject(project);
    Storage.saveTodoList(todoList);
  }

  static deleteProject(projectName) {
    const todoList = Storage.getTodoList();
    todoList.deleteProject(projectName);
    Storage.saveTodoList(todoList);
  }

  static addTask(projectName, task) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).addTask(task);
    Storage.saveTodoList(todoList);
  }

  static deleteTask(projectName, taskName) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).deleteTask(taskName);
    Storage.saveTodoList(todoList);
  }

  static renameTask(projectName, taskName, newTaskName) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).getTask(taskName).setName(newTaskName);
    Storage.saveTodoList(todoList);
  }

  static setDueDate(projectName, taskName, newDueDate) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).getTask(taskName).setDate(newDueDate);
    Storage.saveTodoList(todoList);
  }
}
