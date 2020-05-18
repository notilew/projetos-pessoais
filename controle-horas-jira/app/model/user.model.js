class User {

  constructor() {
    this.name = '';
    this.surname = '';
    this.birthday = '';
    this.office = '';
    this.company = '';
    this.photograph = '';
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getSurname() {
    return this.surname;
  }

  setSurname(surname) {
    this.surname = surname;
  }

  getBirthday() {
    return this.birthday;
  }

  setBirthday(birthday) {
    this.birthday = birthday;
  }

  getOffice() {
    return this.office;
  }

  setOffice(office) {
    this.office = office;
  }

  getCompany() {
    return this.company;
  }

  setCompany(company) {
    this.company = company;
  }

  getPhotograph() {
    return this.photograph;
  }

  setPhotograph(photograph) {
    this.photograph = photograph;
  }

  validatePhotographType(type) {
    if (type && typeof type === 'string') {
      let isValid = false;

      if (type.indexOf('/png') !== -1 || type.indexOf('/jpeg') !== -1 || type.indexOf('/jpg') !== -1) {
        isValid = true;
      }

      return isValid;
    } else {
      throw new Error('É necessário enviar o tipo da fotografia!');
    }
  }

  static importPhotograph(file) {
    if (file) {
      if (this.validatePhotographType(file.type)) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.addEventListener('load', function (e) {
          this.getPhotograph = e.target.result;
        });
      } else {
        alert('A fotografia deve ser uma imagem do tipo .png, .jpeg ou .jpg!');
      }
    } else {
      throw new Error('É necessário enviar um objeto do tipo File!');
    }
  }

}