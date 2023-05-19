
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

const worksContainer = document.querySelector(".works-container");

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
  `
}
const modalWrapper = document.querySelector(".modal-wrapper");

window.onload = function(){
  const venBtn = document.querySelectorAll(".btn");
  venBtn.forEach( btn => {
    btn.addEventListener("click", jkl(btn))
  })}

  function jkl(e) {
    console.log(e)
  }

//   function callPopUp(e) {
//     e.addEventListener("click", function(){
//         // body.classList.add('no-scroll');
//         // mainBg.classList.add('bg-blur');
    
//         if (e.classList.contains('btn-1')) {
//           modalWrapper.classList.remove('hide');
//           displayModal(modalElement[0]);
//         }
    
//         if (e.classList.contains('btn-2')) {
//           modalWrapper.classList.remove('hide');
    
//           displayModal(modalElement[1]);
//         }
    
//         if (e.classList.contains('btn-3')) {
//           modalWrapper.classList.remove('hide');
//           displayModal(modalElement[2]);
//         }
    
//         if (e.classList.contains('btn-4')) {
//           modalWrapper.classList.remove('hide');
//           displayModal(modalElement[3]);
//       console.log(e)
//     }
//   })
// }

// buttons.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     body.classList.add('no-scroll');
//     mainBg.classList.add('bg-blur');

//     if (btn.classList.contains('btn-1')) {
//       modalWrapper.classList.remove('hide');
//       displayModal(modalElement[0]);
//     }

//     if (btn.classList.contains('btn-2')) {
//       modalWrapper.classList.remove('hide');

//       displayModal(modalElement[1]);
//     }

//     if (btn.classList.contains('btn-3')) {
//       modalWrapper.classList.remove('hide');
//       displayModal(modalElement[2]);
//     }

//     if (btn.classList.contains('btn-4')) {
//       modalWrapper.classList.remove('hide');
//       displayModal(modalElement[3]);
//     })