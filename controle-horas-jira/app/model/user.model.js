class User {

  constructor () {
    this.name = '';
    this.surname = '';
    this.birthday = '';
    this.office = '';
    this.company = '';
    this.photograph = '';
  }

  get getName() {
    return this.name;
  }

  set setName(name) {
    this.name = name;
  }

  get getSurname() {
    return this.surname;
  }

  set setSurname(surname) {
    this.surname = surname;
  }

  get getBirthday() {
    return this.birthday;
  }

  set setBirthday(birthday) {
    this.birthday = birthday;
  }

  get getOffice() {
    return this.office;
  }

  set setOffice(office) {
    this.office = office;
  }

  get getCompany() {
    return this.company;
  }

  set setCompany(company) {
    this.company = company;
  }

  get getPhotograph() {
    return this.photograph;
  }

  set setPhotograph(photograph) {
    this.photograph = photograph;
  }

  importPhotograph(file) {
    
  }

}