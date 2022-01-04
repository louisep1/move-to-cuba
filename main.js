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

// Dots and imgs node lists for 1st slide
const slide1 = document.querySelectorAll('.pop-up .slide1 .imgs img');
const dots1 = document.querySelectorAll('.pop-up .slide1 .dots .dot');


// FUNCTIONS
// Stand-alone functions which don't call other (non pre-defined) functions within them
// display/hide element function
function displayBlock(elem) {
  elem.style.display = 'block';
}
function displayNone(...elems) {
  elems.forEach(elem => elem.style.display = 'none')
}

function displayNoneArr([...elems]) {
  elems.forEach(elem => elem.style.display = 'none')
}
function displayGridArr([...elems]) {
  elems.forEach(elem => elem.style.display = 'grid')
}

// Manipulating dots in pop-up section
function addDot(dot) {
  dot.classList.add('current-dot')
}

function removeDots([...dots]) {
  dots.forEach(dot => dot.classList.remove('current-dot'))
}


// highlight variable and remove highlight function
const highlight = document.querySelector('.highlight');

function removeHighlight() {
  allBtns.forEach(item => item.classList.remove('highlight'));
}


// Functions for event listeners - these ALL call another function inside
function resetFilter() {
  removeHighlight();
  displayNoneArr(allProperties)
}

function openAll(e) {
  removeHighlight();
  this.classList.add('highlight');
  displayGridArr(allProperties);
}

function openVillas(e) {
  // console.log("first: " + e)
  // console.log("second: " + e.target)
  resetFilter();
  this.classList.add('highlight');
  displayGridArr(villas);
}

function openApartments(e) {
  resetFilter();
  this.classList.add('highlight');
  displayGridArr(apartments);
}

function openHavana(e) {
  resetFilter();
  this.classList.add('highlight');
  displayGridArr(havana);
}

function openSanta(e) {
  resetFilter();
  this.classList.add('highlight');
  displayGridArr(santa);
}

function openIsla(e) {
  resetFilter();
  this.classList.add('highlight');
  displayGridArr(isla);
}



// EVENT LISTENERS
allBtn.addEventListener('click', openAll);
villaBtn.addEventListener('click', openVillas);
apartmentBtn.addEventListener('click', openApartments);
havanaBtn.addEventListener('click', openHavana);
santaBtn.addEventListener('click', openSanta);
islaBtn.addEventListener('click', openIsla);












// Property page "see more" pop-up and close functions and event listeners
const popUpBtn = document.querySelector(".pop-up-btn");
// // later revise this as an array of all buttons and loop through to display correct one

const closeBtn = document.querySelector(".pop-up .close");

const popUp = document.querySelector(".pop-up");

function openPopUp(e) {
  displayBlock(popUp);
  displayBlock(slide1[0]);

  removeDots(dots1)
  addDot(dots1[0]);
}

function closePopUp(e) {
  displayNone(popUp)
  displayNoneArr(dots1)
}

popUpBtn.addEventListener('click', openPopUp);
closeBtn.addEventListener('click', closePopUp)







// View images function and event listener
function scrollImgs(e) {
  displayNoneArr(slide1)
  removeDots(dots1)
  for (let i = 0; i < dots1.length; i++) {
    if (dots1[i] === this) {
      displayBlock(slide1[i])
      addDot(dots1[i])
    }
  }
}

dots1.forEach(d => d.addEventListener('click', scrollImgs));
