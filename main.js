// VARIABLES

// Property page filter
// Property lists for each category
const allProperties = document.getElementsByClassName('grid');
const villas = document.querySelectorAll('.villa');
const apartments = document.querySelectorAll('.apartment');
const havana = document.querySelectorAll('.havana');
const santa = document.querySelectorAll('.santa');
const isla = document.querySelectorAll('.isla');

// Filter buttons
const allBtns = document.querySelectorAll('.refine-btn');
const allBtn = document.getElementById('all');
const villaBtn = document.getElementById('villa');
const apartmentBtn = document.getElementById('apartment');
const havanaBtn = document.getElementById('havana');
const santaBtn = document.getElementById('santa');
const islaBtn = document.getElementById('isla');

// Property page popup - clickable dots and viewable imgs
const slide1Img1 = document.querySelector(".pop-up .slide1 .imgs .img1")
const slide1Img2 = document.querySelector(".pop-up .slide1 .imgs .img2")
const slide1Img3 = document.querySelector(".pop-up .slide1 .imgs .img3")

const slide1Dot1 = document.querySelector(".pop-up .slide1 .dots .dot1")
const slide1Dot2 = document.querySelector(".pop-up .slide1 .dots .dot2")
const slide1Dot3 = document.querySelector(".pop-up .slide1 .dots .dot3")










// FUNCTIONS
// highlight variable and remove highlight function
const highlight = document.querySelector('.highlight');

function removeHighlight() {
  allBtns.forEach(item => item.classList.remove('highlight'));
}

// Functions for event listeners
function openAll(e) {
  removeHighlight();
  this.classList.add('highlight')
  for (let i = 0; i < allProperties.length; i++) {
    allProperties[i].style.display = 'grid';
  }
}

function openVillas(e) {
  removeHighlight();
  this.classList.add('highlight')
  for (let i = 0; i < allProperties.length; i++) {
    allProperties[i].style.display = 'none';
  }
  for (let i = 0; i < villas.length; i++) {
    villas[i].style.display = 'grid';
  }
}

function openApartments(e) {
  removeHighlight();
  this.classList.add('highlight')
  for (let i = 0; i < allProperties.length; i++) {
    allProperties[i].style.display = 'none';
  }
  for (let i = 0; i < apartments.length; i++) {
    apartments[i].style.display = 'grid';
  }
}

function openHavana(e) {
  removeHighlight();
  this.classList.add('highlight')
  for (let i = 0; i < allProperties.length; i++) {
    allProperties[i].style.display = 'none';
  }
  for (let i = 0; i < havana.length; i++) {
    havana[i].style.display = 'grid';
  }
}

function openSanta(e) {
  removeHighlight();
  this.classList.add('highlight')
  for (let i = 0; i < allProperties.length; i++) {
    allProperties[i].style.display = 'none';
  }
  for (let i = 0; i < santa.length; i++) {
    santa[i].style.display = 'grid';
  }
}

function openIsla(e) {
  removeHighlight();
  this.classList.add('highlight')
  for (let i = 0; i < allProperties.length; i++) {
    allProperties[i].style.display = 'none';
  }
  for (let i = 0; i < isla.length; i++) {
    isla[i].style.display = 'grid';
  }
}


// display/hide element function
function displayBlock(elem) {
  elem.style.display = 'block';
}
function displayNone(...elems) {
  elems.forEach(elem => elem.style.display = 'none')
}

// Manipulating dots in pop-up section
function addDot(dot) {
  dot.classList.add('current-dot')
}
function removeDot(...dots) {
  dots.forEach(dot => dot.classList.remove('current-dot'))
}


// EVENT LISTENERS
allBtn.addEventListener('click', openAll);
villaBtn.addEventListener('click', openVillas);
apartmentBtn.addEventListener('click', openApartments);
havanaBtn.addEventListener('click', openHavana);
santaBtn.addEventListener('click', openSanta);
islaBtn.addEventListener('click', openIsla);












// Property page "see more"
const popUpBtn = document.querySelector(".pop-up-btn");
// later revise this as an array of all buttons and loop through to display correct one

const closeBtn = document.querySelector(".pop-up .close");

const popUp = document.querySelector(".pop-up");

function openPopUp(e) {
  displayBlock(popUp);
  displayBlock(slide1Img1);
  addDot(slide1Dot1);
  removeDot(slide1Dot2, slide1Dot3)
}

function closePopUp(e) {
  displayNone(popUp, slide1Img1, slide1Img2, slide1Img3)
}

popUpBtn.addEventListener('click', openPopUp);
closeBtn.addEventListener('click', closePopUp)







// View images

function showImg1(e) {
  displayBlock(slide1Img1);
  displayNone(slide1Img2, slide1Img3);
  addDot(slide1Dot1);
  removeDot(slide1Dot2, slide1Dot3)
}

function showImg2(e) {
  displayBlock(slide1Img2);
  displayNone(slide1Img1, slide1Img3);
  addDot(slide1Dot2);
  removeDot(slide1Dot1, slide1Dot3)
}

function showImg3(e) {
  displayBlock(slide1Img3);
  displayNone(slide1Img1, slide1Img2);
  addDot(slide1Dot3);
  removeDot(slide1Dot1, slide1Dot2)
}

slide1Dot1.addEventListener('click', showImg1);
slide1Dot2.addEventListener('click', showImg2);
slide1Dot3.addEventListener('click', showImg3);