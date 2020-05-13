window.addEventListener('load', function () {
  const btnSave = document.querySelector('#btn-save');
  
  btnSave.addEventListener('click', function () {
    const form = document.querySelector('form');
    const user = new User();

    user.setName = form.querySelector('#name').value;
    user.setSurname = form.querySelector('#surname').value;
    user.setBirthday = form.querySelector('#birthday').value;
    
    user.setOffice = form.querySelector('#office').value;
    user.setCompany = form.querySelector('#company').value;
debugger;
    console.log(form.querySelector('photograph').value);
  });
});