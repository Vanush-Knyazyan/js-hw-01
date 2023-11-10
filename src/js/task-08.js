const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formVarification);

function formVarification(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (mail === '' || password === '') {
    return alert('все поля должны быть заполнены');
  }

  const formData = {
    mail,
    password,
  };
  console.log(formData);

  document.querySelector('.login-form').reset();
}
