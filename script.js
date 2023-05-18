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

function validate () {
  const name = document.getElementById('user-name').value;

  if(name.lenght == 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Invalid name';
    return false;
  }
  nameError.innerHTML = '<img src="checkbox-checked-solid-24 (1).png" alt="check icon">';
  return true;
}


function validateEmail () {
  const email = document.getElementById('user-email').value;

  if(email.lenght === 0){
    emailError.innerHTML = 'Email is required'
    return false;
  }
  if(!email.match(/^([a-za-z0-9_\-\.])+\@([a-za-z0-9_\-\.])+\.([a-za-z]{2,4})$/)){
    emailError.innerHTML = 'Invalid email'
    return false;
  }
  emailError.innerHTML = '<img src="checkbox-checked-solid-24 (1).png" alt="check icon">';
  return true;
}

function validateForm (){
  if(!validate() || !validateEmail()){
  submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix errors to submit';
    setTimeout(function(){submitError.style.display = 'none';}, 3000)
    return false;
  }
}