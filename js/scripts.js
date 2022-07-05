(function () {
  let firstNameInput = document.querySelector('#contact-first-name');
  let lastNameInput = document.querySelector('#contact-last-name');
  let emailInput = document.querySelector('#contact-email');
  let telInput = document.querySelector('#contact-tel');
  let messageInput = document.querySelector('#contact-message');

  function validateFirstName() {
    let value = firstNameInput.value;

    if (!value) {
      showErrorMessage(firstNameInput, 'First name is a required field.');
      return false;
    }

    if (!/^[a-zA-Z]+$/.test(value)) {
      showErrorMessage(firstNameInput, 'Please only use letters in first name.');
      return false;
    }

    showErrorMessage(firstNameInput, null);
    return true;
  }

  function validateLastName() {
    let value = lastNameInput.value;

    if (!value) {
      showErrorMessage(lastNameInput, 'Last name is a required field.');
      return false;
    }

    if (!/^[a-zA-Z]+$/.test(value)) {
      showErrorMessage(lastNameInput, 'Please only use letters in last name.');
      return false;
    }

    showErrorMessage(lastNameInput, null);
    return true;
  }

  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field.');
      return false;
    }

    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid email address.');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function validateTel() {
    let value = telInput.value;

    if (!value) {
      showErrorMessage(telInput, null);
      return true;
    }

    if (!/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(value)) {
      showErrorMessage(telInput, 'Please enter the number in the displayed format.');
      return false;
    }

    showErrorMessage(telInput, null);
    return true;
  }

  function validateMessage() {
    let value = messageInput.value;

    if (!value) {
      showErrorMessage(messageInput, 'Message is a required field.');
      return false;
    }

    showErrorMessage(messageInput, null);
    return true;
  }

  function showErrorMessage(input, message) {
    let container = input.parentElement;

    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  firstNameInput.addEventListener('input', validateFirstName);
  lastNameInput.addEventListener('input', validateLastName);
  emailInput.addEventListener('input', validateEmail);
  telInput.addEventListener('input', validateTel);
  messageInput.addEventListener('input', validateMessage);

})();
