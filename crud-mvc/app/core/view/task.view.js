class TaskView {

    constructor() {
        this.app = this.getElement('body');
        this.list = this.createElement('ul', 'task-list');

        this.app.append(this.list);
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