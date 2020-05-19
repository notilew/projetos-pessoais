window.addEventListener('load', function () {
  const btn = document.getElementById('btn-save');
  
  btn.addEventListener('click', function () {
    const form = document.querySelector('form');
    const user = new User();

    user.setName(form.querySelector('#name').value);
    user.setSurname(form.querySelector('#surname').value);
    user.setBirthday(form.querySelector('#birthday').value);
    
    user.setOffice(form.querySelector('#office').value);
    user.setCompany(form.querySelector('#company').value);

    User.importPhotograph(form.querySelector('#photograph').files[0]);
  });

  const photograph = document.getElementById('photograph');

  if (photograph.files[0]) {
    photograph.addEventListener('change', function() {
      
    });
  }
});