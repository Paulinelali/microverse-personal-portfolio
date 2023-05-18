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
