class UserModel {

    constructor() {
        this.users = [];
    }
 
    createUser(user) {
        this.users.push(user);
        console.log(this.users);
    }

    updateUser(user) { }

    deleteUser(user) { }

}