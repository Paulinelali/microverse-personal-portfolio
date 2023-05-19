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

const worksContainer = document.querySelector('.works-container');

// define cards elements to be created unto page
const cardObjects = [
  {
    img: './assets/1.png',
    title: 'Tonic',
    type: 'CANOPY',
    dev: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    btn: 'See projects',
  },

  {
    img: './assets/2.png',
    title: 'Multi-Post Stories',
    type: 'CANOPY',
    dev: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    btn: 'See projects',
  },
  {
    img: './assets/3.png',
    title: 'Tonic',
    type: 'CANOPY',
    dev: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    btn: 'See projects',
  },

  {
    img: './assets/4.png',
    title: 'Multi-Post Stories',
    type: 'CANOPY',
    dev: 'Back End Dev',
    year: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    btn: 'See projects',
  },
];
// create card unto page
function createCard() {
  for (let card = 0; card < cardObjects.length; card++) {
    worksContainer.innerHTML += `
    
    <li class="card-wrapper  margin-h-24 pad-both">
                  <img class="" src="${cardObjects[card].img}" alt="">
                  <div class="card-content-wrapper">
                      <h2>${cardObjects[card].title}</h2>
                      <div class="canopy-list-wrapper">
                          <ul class="canopy-list">
                              <li><b>${cardObjects[card].type}</b></li>
                              <li class="card-empty-list"></li>
                              <li>${cardObjects[card].dev}</li>
                              <li class="card-empty-list"></li>
                              <li>${cardObjects[card].year}</li>
                          </ul>
                      </div>
                      <p>${cardObjects[card].description}</p>
                      <ul class="tech-used">
                          <li>${cardObjects[card].tech[0]}</li>
                          <li>${cardObjects[card].tech[1]}</li>
                          <li>${cardObjects[card].tech[2]}</li>
                      </ul>
                      <button type="button" class="see-projects-btn one btn btn-${card + 1}">${cardObjects[card].btn}</button>
                  </div>
              </li>
    `;
  }
}

// define modal elemnts
const modalElement = [{
  id: 1,
  name: 'Tonic',
  img: './assets/1.png',
  type: 'Canopy',
  dev: 'Back End Dev',
  year: 2015,
  source: 'https://paulinelali.github.io/potfoilo.github.io/',
  sourceIcon: 'img-link',
  liveLink: 'link to life project',
  stack: {
    1: 'HTML', 2: 'CSS', 3: 'JavaScript', 4: 'Ruby', 5: 'Bootstrap',
  },
  tag: {
    1: 'pattern', 2: 'poster', 3: 'abstraction', 4: 'people', 5: 'technology', 6: 'media', 7: 'nature', 8: 'food',
  },
  price: '45',
  btn: 'Choose illustration',
  title: 'Nature',
  tagline: 'catchy look inspiring bionic form',
  details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
},

{
  id: 2,
  name: 'Tonic',
  img: './assets/2.png',
  type: 'Canopy',
  dev: 'Back End Dev',
  year: 2015,
  source: 'https://paulinelali.github.io/potfoilo.github.io/',
  sourceIcon: 'img-link',
  liveLink: 'link to life project',
  stack: {
    1: 'HTML', 2: 'CSS', 3: 'JavaScript', 4: 'Ruby', 5: 'Bootstrap',
  },
  tag: {
    1: 'pattern', 2: 'poster', 3: 'abstraction', 4: 'people', 5: 'technology', 6: 'media', 7: 'nature', 8: 'food',
  },
  price: '45',
  btn: 'Choose illustration',
  title: 'Nature',
  tagline: 'catchy look inspiring bionic form',
  details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
},

{
  id: 3,
  name: 'Multi-Post Stories',
  img: './assets/3.png',
  type: 'Canopy',
  dev: 'Back End Dev',
  year: 2015,
  source: 'https://paulinelali.github.io/potfoilo.github.io/',
  sourceIcon: 'img-link',
  liveLink: 'link to life project',
  stack: {
    1: 'HTML', 2: 'CSS', 3: 'JavaScript', 4: 'Ruby', 5: 'Bootstrap',
  },
  tag: {
    1: 'pattern', 2: 'poster', 3: 'abstraction', 4: 'people', 5: 'technology', 6: 'media', 7: 'nature', 8: 'food',
  },
  price: '45',
  btn: 'Choose illustration',
  title: 'Nature',
  tagline: 'catchy look inspiring bionic form',
  details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
},

{
  id: 4,
  name: 'Multi-Post Stories',
  img: './assets/4.png',
  type: 'Canopy',
  dev: 'Back End Dev',
  year: 2015,
  source: 'https://paulinelali.github.io/potfoilo.github.io/',
  sourceIcon: 'img-link',
  liveLink: 'link to life project',
  stack: {
    1: 'HTML', 2: 'CSS', 3: 'JavaScript', 4: 'Ruby', 5: 'Bootstrap',
  },
  tag: {
    1: 'pattern', 2: 'poster', 3: 'abstraction', 4: 'people', 5: 'technology', 6: 'media', 7: 'nature', 8: 'food',
  },
  price: '45',
  btn: 'Choose illustration',
  title: 'Nature',
  tagline: 'catchy look inspiring bionic form',
  details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`,
}];

// create modal
const displayModal = (element) => {
  modalWrapper.innerHTML = `
    <div class="ven-modal ven-overlay">
        <ul class="ven-modal-ul">
            <li class="ven-modal-ul-li">
                <ul class="ven-title-canopy-cancel-wrapper">
                    <li class="ven-title-canopy-year">
                        <h2>${element.name}</h2>
                        <ul class="ven-canopy-list ven-canopy-list-wrapper">
                            <li><b>${element.type}</b></li>
                            <li class="ven-card-empty-list"></li>
                            <li>${element.dev}</li>
                            <li class="ven-card-empty-list"></li>
                            <li>${element.year}</li>
                        </ul>
                    </li>
                    <li>
                        <img src="./assets2/Normal Button/Tertiary/Icons/Normal Button/Tertiary/Icons/Icon.svg" alt="cancel icon" class="ven-cancel-icon" id="cancel-icon" style="cursor: pointer">
                    </li>
                </ul>
                <div class="ven-featured-img-wrapper">
                    <img class="" src="${element.img}"">
                </div>
                <div class="ven-detail-stack-wrapper">
                    <p>
                        ${element.details}
                    </p>
                    <ul class="ven-tech-used">
                        <li>
                            <ul class="ven-tech-used-stack">
                                <li>
                                    ${element.stack[1]}
                                </li>
                                <li>
                                    ${element.stack[2]}
                                </li>
                                <li>
                                    ${element.stack[3]}
                                </li>
                                <li>
                                    ${element.stack[4]}
                                </li>
                                <li>
                                    ${element.stack[5]}
                                </li>
                            </ul>
                        </li>
                        <li class="ven-sources">
                            <a href="${element.source}"><button>See live <img src="./assets2/Normal Button/Secondary/Icons/Icon.png"></button></a>
                            <a href="${element.source}"><button>See source <img src="./assets2/Normal Button/Secondary/Icons/Vector.png"></button></a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    `;
};

const modalWrapper = document.querySelector('.modal-wrapper');
const mainBg = document.querySelector('.main-bg');

window.onload = function () {
  createCard();

  const venBtn = document.querySelectorAll('.btn');

  venBtn.forEach((btn) => {
    const body = document.querySelector('body');
    btn.addEventListener('click', () => {
      body.classList.add('no-scroll');
      mainBg.classList.add('bg-blur');

      if (btn.classList.contains('btn-1')) {
        modalWrapper.classList.remove('hide');
        displayModal(modalElement[0]);
      }

      if (btn.classList.contains('btn-2')) {
        modalWrapper.classList.remove('hide');

        displayModal(modalElement[1]);
      }

      if (btn.classList.contains('btn-3')) {
        modalWrapper.classList.remove('hide');
        displayModal(modalElement[2]);
      }

      if (btn.classList.contains('btn-4')) {
        modalWrapper.classList.remove('hide');
        displayModal(modalElement[3]);
      }

      const cancelIcon = document.querySelector('.ven-cancel-icon');
      const modalContainer = document.querySelector('.ven-modal');
      cancelIcon.addEventListener('click', () => {
        body.classList.remove('no-scroll');
        mainBg.classList.remove('bg-blur');
        modalContainer.classList.toggle('hide');
      });
    });
  });
};
