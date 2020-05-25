class TaskView {

    constructor() {
        this.app = this.getElement('body');
        this.form = this.getElement('form');
        this.input = this.getElement('form input');
        this.taskList = this.createElement('ul', 'task-list');

        this.app.append(this.taskList);
    }
    
    bindCreateTask(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();

           if (this.getTaskText()) {
               handler(this.getTaskText());
               this.setTaskText();
           }
        });
    }

    getTaskText() {
        return this.input.value;
    }

    setTaskText(taskText = '') {
        this.input.value = taskText;
    }

    displayTasks(tasks) {
        while (this.taskList.firstChild) {
            this.taskList.removeChild(this.taskList.firstChild);
        }

        if (tasks.length === 0) {
            const p = this.createElement('p');
            p.textContent = 'Não existem tarefas cadastradas! Adicionar uma tarefa?';

            this.taskList.append(p);
        } else {
            tasks.forEach(task => {
                const li = this.createElement('li');
                li.id = task.id;

                const checkbox = this.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = task.complete

                const span = this.createElement('span');
                span.contentEditable = true;
                span.classList.add('editable');

                const button = this.createElement('button', 'delete');
                button.textContent = 'Apagar';

                if (task.complete) {
                    const strike = this.createElement('s');
                    strike.textContent = task.text;
                    span.append(strike);
                } else {
                    span.textContent = task.text;
                }

                li.append(checkbox, span, button);

                this.taskList.append(li);
            });
        }
    }

    createElement(tag, className) {
        const element = document.createElement(tag);

        if (className) element.classList.add(className);

        return element;
    }

    getElement(selector) {
        return document.querySelector(selector);
    }

}