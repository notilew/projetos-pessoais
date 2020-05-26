class UserController {

    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindCreateUser(this.handlerCreateUser);
        this.view.bindSelectUserFile();
    }
    
    handlerCreateUser = (user) => {
        this.model.createUser(user);
    }

}