class TaskModel {

    constructor() {
        this.tasks = [
            {
                id: 1,
                text: 'Acordar às 05:00:00 da manhã',
                complete: false
            },
            {
                id: 2,
                text: 'Finalizar a unidade 03 da pós graduação',
                complete: false
            }
        ];
    }

    createTask(taskText) {
        const task = {
            id: (this.tasks.length > 0) ? this.tasks[this.tasks.length - 1].id + 1 : 1,
            text: taskText,
            complete: false
        };

        this.tasks.push(task);
    }

    updateTask(id, updatedTaskText) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) task.text = updatedTaskText;

            return task;
        });
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => {
            if (task.id !== id) return task;
        });
    }

    toggleTask(id) {
        this.tasks = this.tasks.map(task => {
            if (task.id === id) task.complete = !task.complete;

            return task;
        });
    }

}