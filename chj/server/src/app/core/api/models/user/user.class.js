class User {

    constructor() {
        this.name = null;
        this.surname = null;
        this.birthday = null;
        this.email = null;
        this.photo = null;
        this.office = null;
        this.company = null;
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name.toLowerCase();
    }

    get surname() {
        return this.surname;
    }

    set surname(surname) {
        this.surname = surname.toLoweCase();
    }

    get birthday() {
        return this.birthday;
    }

    set birthday(birthday) {
        this.birthday = birthday;
    }

    get email() {
        return this.email;
    }

    set email(email) {
        this.email = email;
    }

    get photo() {
        return this.photo;
    }

    set photo(photo) {
        this.photo = photo;
    }

    get office() {
        return this.office;
    }

    set office(office) {
        this.office = office;
    }

    get company() {
        return this.company;
    }

    set company(company) {
        this.company = company.toLoweCase();
    }

}

module.exports = User;