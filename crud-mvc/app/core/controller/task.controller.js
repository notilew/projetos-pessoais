class TaskController {

    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindCreateTask(this.handleCreateTask);

        this.onTaskListChanged(this.model.tasks);
    }

    handleCreateTask = (taskText) => {debugger;
        this.model.createTask(taskText);
    }

    handleUpdateTask = (id, updatedTaskText) => {
        this.model.updateTask(id, updatedTaskText);
    }

    handleDeleteTask = (id) => {
        this.model.deleteTask(id);
    }

    handleToggleTask = (id) => {
        this.model.toggleTask(id);
    }

    onTaskListChanged(tasks) {
        this.view.displayTasks(tasks);
    }

}