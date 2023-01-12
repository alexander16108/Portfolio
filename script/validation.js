const emailEl = document.querySelector('#email');
const nameEI = document.querySelector('#username');
const message = document.querySelector('#msg');
const form = document.querySelector('#contact');

const isEmailValid = (email) => {
  const re = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return re.test(email);
};

const isRequired = function requireTest(value) {
  if (value === '') {
    return false;
  }
  return true;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
};

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');
  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

const checkEmail = () => {
  let valid = false;
  const email = emailEl.value.trim();
  if (!isRequired(email)) {
    showError(emailEl, 'Email cannot be blank.');
  } else if (!isEmailValid(email)) {
    showError(emailEl, 'Email is not valid.');

    emailEl.classList.add('invalidTest');
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};
const userData = {
};

form.addEventListener('submit', (e) => {
  // validate fields
  userData.emailUser = emailEl.value;
  userData.userName = nameEI.value;
  userData.userMessage = message.value;
  localStorage.setItem('userData', JSON.stringify(userData));
  const isEmailValid = checkEmail();
  const isFormValid = isEmailValid;
  if (!isFormValid) {
    e.preventDefault();
  }
});

window.onload = () => {
  const dataGet = localStorage.getItem('userData');
  const data = JSON.parse(dataGet);
  if (data) {
    nameEI.value = data.userName;
    emailEl.value = data.emailUser;
    message.value = data.userMessage;
  }
};