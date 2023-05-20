const worksContainer = document.querySelector(".works-container");

// array to hold each card
const cardObjects = [
  {
    img: "./assets/1.png",
    title: "Tonic",
    type: "CANOPY",
    dev: "Back End Dev",
    year: 2015,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tech: ["HTML", "CSS", "JavaScript"],
    btn: "See projects",
  },

  {
    img: "./assets/2.png",
    title: "Multi-Post Stories",
    type: "CANOPY",
    dev: "Back End Dev",
    year: 2015,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tech: ["HTML", "CSS", "JavaScript"],
    btn: "See projects",
  },
  {
    img: "./assets/3.png",
    title: "Tonic",
    type: "CANOPY",
    dev: "Back End Dev",
    year: 2015,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tech: ["HTML", "CSS", "JavaScript"],
    btn: "See projects",
  },
  
  {
    img: "./assets/4.png",
    title: "Multi-Post Stories",
    type: "CANOPY",
    dev: "Back End Dev",
    year: 2015,
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tech: ["HTML", "CSS", "JavaScript"],
    btn: "See projects",
  },
]

// create default card objects 
function loadCardObjectsToPage(cardObjects){cardObjects.forEach((obj) => {
  
  worksContainer.innerHTML += `
  
  <li class="card-wrapper  margin-h-24 pad-both">
                <img class="" src="${obj.img}" alt="">
                <div class="card-content-wrapper">
                    <h2>${obj.title}</h2>
                    <div class="canopy-list-wrapper">
                        <ul class="canopy-list">
                            <li><b>${obj.type}</b></li>
                            <li class="card-empty-list"></li>
                            <li>${obj.dev}</li>
                            <li class="card-empty-list"></li>
                            <li>${obj.year}</li>
                        </ul>
                    </div>
                    <p>${obj.description}</p>
                    <ul class="tech-used">
                        <li>${obj.tech[0]}</li>
                        <li>${obj.tech[1]}</li>
                        <li>${obj.tech[2]}</li>
                    </ul>
                    <button type="button" class="see-projects-btn one btn btn-1">${obj.btn}</button>
                </div>
            </li>
  `
})}

// load cards onto page when page load
window.onload = () => {
  loadCardObjectsToPage(cardObjects);
  
  }
















  // pop iup menu
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
  bgMobile.classList.toggle('add-bg-on-mobile');
}
hamburger.addEventListener('click', toggleMenu);
cancelMobile.addEventListener('click', closeMenu);
tags.forEach((tag) => {
  tag.addEventListener('click', () => {
    closeMenu();
  });
});

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  // Prevent form submission
  e.preventDefault();

  // Validate form fields
  const email = document.querySelector('#user-email').value;

  // Check if name is empty
  if (email !== email.toLowerCase()) {
    const errorDiv = document.querySelector('#email-error');
    errorDiv.innerText = 'The email address must be lowercase';
  } else {
    form.submit();
  }
});
