// const { name } = require("xml-name-validator");

// see project popup
const buttons = document.querySelectorAll('.see-projects-btn');
const modalWraper = document.querySelector('.modal-wraper');
const mainContent = document.querySelector('#main-content');

// projects as an elementect
const modalelement = [{
  id: 1,
  name: 'Tonic',
  img: './assets/1.png',
  type: 'Canopy',
  dev: 'Back End Dev',
  year: 2015,
  source: 'link',
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
  source: 'link',
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
  source: 'link',
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
  source: 'link',
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

const displayModal = (element) => {
  modalWraper.innerHTML = `
    <div class="modal">
        <ul class="ven-modal-ul">
            <li class="ven-modal-ul-li">
                <ul class="title-canopy-cancel-wrapper">
                    <li>
                        <h2>${element.name}</h2>
                        <ul class="canopy-list canopy-list-wrapper">
                            <li><b>${element.type}</b></li>
                            <li class="card-empty-list"></li>
                            <li>${element.dev}</li>
                            <li class="card-empty-list"></li>
                            <li>${element.year}</li>
                        </ul>
                    </li>
                    <li>
                        <img src="./assets2/Normal Button/Tertiary/Icons/Normal Button/Tertiary/Icons/Icon.svg" alt="cancel icon" style=" width: 10px;">
                    </li>
                </ul>
                <div class="featured-img-wrapper">
                    <img class="" src="${element.img}"">
                </div>
                <div class="ven-detail-stack-wrapper">
                    <p>
                        ${element.details}
                    </p>
                    <div class="ven-tech-used">
                        <ul>
                            <li>
                                ${element.stack[1]}
                            </li>
                            <li>
                            ${element.stack[2]}
                            </li>
                            <li>
                            ${element.stack[3]}
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    `;
};

// <button type="button" class="see-projects-btn tow btn">
//     ${element.btn}
// </button>

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    document.body.classList.add('screen-cover');
    modalWraper.classList.toggle('hide');
    // modal.classList.toggle("hide");
    modalWraper.style.backgroundColor = 'rgba(193, 199, 208, 0.4)';
    mainContent.classList.add('blurer');
    window.scrollTo(0, 0);
    if (btn.classList.contains('btn-1')) {
      displayModal(modalelement[0]);
    }

    if (btn.classList.contains('btn-2')) {
      displayModal(modalelement[1]);
    }

    if (btn.classList.contains('btn-3')) {
      displayModal(modalelement[2]);
    }

    if (btn.classList.contains('btn-4')) {
      displayModal(modalelement[3]);
    }
  });
});

//   buttons.forEach(btn => {
//     btn.addEventListener("click", () => {
//         if(btn.classList.contains("btn-1")){

//         }
//     })
//   });

// const displayPopUp = (modalelement) => {
//     modalelement = modalelement.map((element) => {
//         .join("")
//     return modal.innerHTML = modalelement
// }

// console.log(displayPopUp(modalelement))