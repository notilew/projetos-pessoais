((window) => {
    'use strict';

    window.addEventListener('load', () => {
        const userModel = new UserModel();
        const userView = new UserView();
        const userController = new UserController(userModel, userView);
    });
})(window);