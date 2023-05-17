const hamburger = document.querySelector('.hamburger-container');
const mobileMenu = document.querySelector('.mobile-menu');
const cancelMobile = document.querySelector('.cancel-mobile');
const bgMobile = document.querySelector('.bg-mobile');
const tags = document.querySelectorAll('.mobile-menu-link');

function toggleMenu() {
  mobileMenu.classList.toggle('hide');
  hamburger.classList.toggle('hide');
  bgMobile.classList.toggle('hide');
  bgMobile.classList.toggle('add-bg-on-mobile');
}

function closeMenu() {
  mobileMenu.classList.toggle('hide');
  hamburger.classList.toggle('hide');
  bgMobile.classList.toggle('hide');
  bgMobile.classList.toggle('add-bg-on-mobile');
}
hamburger.addEventListener('click', toggleMenu);
cancelMobile.addEventListener('click', closeMenu);
tags.forEach((tag) => {
  tag.addEventListener('click', () => {
    closeMenu();
  });
});

// projects as an object

// let tonic_1 ={
//   name : "Tonic",
//   type : "Canopy",
//   dev : "Back End Dev",
//   year : 2015,
//   source : "link",
//   sourceIcon : "img-link",
//   liveLink : "link to life project",
//   stack : { 1 : "HTML", 2 : "CSS", 3 : "JavaScript", 4 : "Ruby", 5 : "Bootstrap"  },
//   tag : { 1 : "pattern", 2 : "poster", 3 : "abstraction", 4 : "people", 5 : "technology", 6 : "media", 7 : "nature", 8 : "food" },
//   price : "45",
//   btn : "Choose illustration",
//   title : "Nature",
//   tagline : "catchy look inspiring bionic form",
//   details : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`
// }

// let tonic_2 ={
//   name : "Tonic",
//   type : "Canopy",
//   dev : "Back End Dev",
//   year : 2015,
//   source : "link",
//   sourceIcon : "img-link",
//   liveLink : "link to life project",
//   stack : { 1 : "HTML", 2 : "CSS", 3 : "JavaScript", 4 : "Ruby", 5 : "Bootstrap"  },
//   tag : { 1 : "pattern", 2 : "poster", 3 : "abstraction", 4 : "people", 5 : "technology", 6 : "media", 7 : "nature", 8 : "food" },
//   price : "45",
//   btn : "Choose illustration",
//   title : "Nature",
//   tagline : "catchy look inspiring bionic form",
//   details : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`
// }

// let multiPostStories ={
//   name : "Multi-Post Stories",
//   type : "Canopy",
//   dev : "Back End Dev",
//   year : 2015,
//   source : "link",
//   sourceIcon : "img-link",
//   liveLink : "link to life project",
//   stack : { 1 : "HTML", 2 : "CSS", 3 : "JavaScript", 4 : "Ruby", 5 : "Bootstrap"  },
//   tag : { 1 : "pattern", 2 : "poster", 3 : "abstraction", 4 : "people", 5 : "technology", 6 : "media", 7 : "nature", 8 : "food" },
//   price : "45",
//   btn : "Choose illustration",
//   title : "Nature",
//   tagline : "catchy look inspiring bionic form",
//   details : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`
// }

// let multiPostStories_2 ={
//   name : "Multi-Post Stories",
//   type : "Canopy",
//   dev : "Back End Dev",
//   year : 2015,
//   source : "link",
//   sourceIcon : "img-link",
//   liveLink : "link to life project",
//   stack : { 1 : "HTML", 2 : "CSS", 3 : "JavaScript", 4 : "Ruby", 5 : "Bootstrap"  },
//   tag : { 1 : "pattern", 2 : "poster", 3 : "abstraction", 4 : "people", 5 : "technology", 6 : "media", 7 : "nature", 8 : "food" },
//   price : "45",
//   btn : "Choose illustration",
//   title : "Nature",
//   tagline : "catchy look inspiring bionic form",
//   details : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
//               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.`
// }

// // see project popup
// const modal = document.querySelector(".popup-project");
// const projectBtn = document.querySelectorAll(".popup-project");


