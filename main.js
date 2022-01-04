// VARIABLES

// Property list
const allProperties = document.getElementsByClassName('all');
// Filter buttons
const allBtns = document.querySelectorAll('.refine-btn');

// Dots and imgs node lists for 1st slide ONLY !!!!!
const slide1 = document.querySelectorAll('.pop-up .slide1 .imgs img');
const dots1 = document.querySelectorAll('.pop-up .slide1 .dots .dot');



// FUNCTIONS

// HELPER FUNCTIONS
// display: block/none for single elements 
function displayBlock(elem) {
  elem.style.display = 'block';
}
function displayNone(...elems) {
  elems.forEach(elem => elem.style.display = 'none')
}
// display: none/grid for arrays of elements
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


// Functions for event listeners (these ALL call another function inside)
function resetFilter() {
  removeHighlight();
  displayNoneArr(allProperties)
}

function displayProperties(e) {
  resetFilter();
  this.classList.add('highlight');
  const matched = document.querySelectorAll(`.${this.id}`);
  displayGridArr(matched);
}

// EVENT LISTENERS
allBtns.forEach(btn => btn.addEventListener('click', displayProperties));




// Property page "see more" pop-up and close functions and event listeners
const popUpBtn = document.querySelector(".pop-up-btn");
// !!!!!!!!!  later revise this as an array of all buttons and loop through to display correct one

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
  displayNoneArr(slide1)
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
