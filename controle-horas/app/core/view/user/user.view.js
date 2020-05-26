class UserView {

    constructor() {
        this.app = this.selectElement('body');

        this.form = this.selectElement('form');
        this.name = this.selectElement('#name')
        this.surname = this.selectElement('#surname');
        this.birthday = this.selectElement('#birthday');
        this.file = this.selectElement('#file');
        this.office = this.selectElement('#office');
        this.company = this.selectElement('#company');

        this.photo = '';
        this.div = this.createElement('div');
        this.figure = this.createElement('figure');
        this.img = this.createElement('img');
        this.figcaption = this.createElement('figcaption');
    }

    bindCreateUser(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();

            const isValid = this.validateUser();

            if (isValid) {
                const user = {
                    name: this._getName,
                    surname: this._getSurname,
                    birthday: this._getBirthday,
                    photo: this._getPhoto,
                    office: this._getOffice,
                    company: this._getCompany
                };

                this.resetForm();

                handler(user);
            }
        });
    }

    bindSelectUserFile() {
        this.file.addEventListener('change', (event) => {
            if (event.target.files.length === 1) {
                this.importUserFile(this._getFile);
            }
        });
    }

    importUserFile(file) {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(this._getFile);

        fileReader.addEventListener('load', (event) => {
            this._setPhoto = event.target.result;
        });
    }

    validateUserFile(file) {
        if ()
    }

    validateUser() {
        let isValid = true;

        if (!this._getName, !this._getSurname, !this._getBirthday, !this._getOffice, !this._getCompany) isValid = false;

        return isValid;
    }

    resetForm() {
        this._setName = '';
        this._setSurname = '';
        this._setBirthday = '';
        this._setPhoto = '';
        this._setOffice = '';
        this._setCompany = '';
    }

    createElement(tagName, idName, className) {
        const element = document.createElement(tagName);

        if (idName) element.id = idName;
        if (className) element.classList.add(className);

        return element;
    }

    selectElement(selector) {
        return document.querySelector(selector);
    }

    get _getName() {
        return this.name.value;
    }

    set _setName(name) {
        this.name.value = name;
    }

    get _getSurname() {
        return this.surname.value;
    }

    set _setSurname(surname) {
        this.surname.value = surname;
    }

    get _getBirthday() {
        return this.birthday.value;
    }

    set _setBirthday(birthday) {
        this.birthday.value = birthday;
    }

    get _getFile() {
        return this.file.files[0];
    }

    set _setFile(file) {
        this.file.value = file;
    }

    get _getPhoto() {
        return this.photo;
    }

    set _setPhoto(photo) {
        this.photo = photo;
    }

    get _getOffice() {
        return this.office.value;
    }

    set _setOffice(office) {
        this.office.value = office;
    }

    get _getCompany() {
        return this.company.value;
    }

    set _setCompany(company) {
        this.company.value = company;
    }

}