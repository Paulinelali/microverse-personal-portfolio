const hamburger = document.querySelector('.hamburger-container');
const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
const cancelMobile = document.querySelector('.cancel-mobile');
const bgMobile = document.querySelector('.bg-mobile');
const tags = document.querySelectorAll('.mobile-menu-link');

function toggleMenu() {
  mobileMenuWrapper.classList.toggle('hide');
  hamburger.classList.toggle('hide');
}

function closeMenu() {
  mobileMenuWrapper.classList.toggle('hide');
  hamburger.classList.toggle('hide');
  // bgMobile.classList.toggle('hide');
  bgMobile.classList.toggle('add-bg-on-mobile');
}
hamburger.addEventListener('click', toggleMenu);
cancelMobile.addEventListener('click', closeMenu);
tags.forEach((tag) => {
  tag.addEventListener('click', () => {
    closeMenu();
  });
});

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const submitError = document.querySelector('#submit-error');
function validate() {
  const name = document.getElementById('user-name').value;
  if (name.lenght === 0) {
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Invalid name';
    return false;
  }
  nameError.innerHTML = '<img src="checkbox-checked-solid-24 (1).png" alt="check icon">';
  return true;
}

function validateEmail() {
  const email = document.getElementById('user-email').value;

  if (email.lenght === 0) {
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if (!email.match(/^([a-za-z0-9_\-.])+@([a-za-z0-9_\-.])+\.([a-za-z]{2,4})$/)) {
    emailError.innerHTML = 'Invalid email';
    return false;
  }
  emailError.innerHTML = '<img src="checkbox-checked-solid-24 (1).png" alt="check icon">';
  return true;
}

// LOCAL STORAGE
const formName = document.getElementById('user-name');
const email = document.getElementById('user-email');
const formText = document.getElementById('user-text');

const localData = () => {
  const userData = {
    userName: formName.value,
    UserMail: email.value,
    txt: formText.value,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
};
const storedDetails = () => {
  const info = JSON.parse(localStorage.getItem('userData'));
  formName.value = info.formName;
  email.value = info.email;
  formText.value = info.formText;
};

function validateForm() {
  if (!validate() || !validateEmail()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix errors to submit';
    setTimeout(() => { submitError.style.display = 'none'; }, 3000);
    return false;
  } 
  localData();
  storedDetails();
    return true;
}
validateForm();
