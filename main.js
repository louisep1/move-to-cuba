const img1s = document.querySelectorAll('.pop-up .imgs .img1')
const img2s = document.querySelectorAll('.pop-up .imgs .img2')
const img3s = document.querySelectorAll('.pop-up .imgs .img3')

const dot1s = document.querySelectorAll('.pop-up .dots .dot1');
const dot2s = document.querySelectorAll('.pop-up .dots .dot2');
const dot3s = document.querySelectorAll('.pop-up .dots .dot3');


// VARIABLES

// Property list
const allProperties = document.getElementsByClassName('all');
// Filter buttons
const allBtns = document.querySelectorAll('.refine-btn');





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















// Property page "see more" pop-up open and close functions, scroll through imgs and event listeners
const popUpBtns = document.querySelectorAll(".pop-up-btn");
const closeBtns = document.querySelectorAll(".pop-up .close");
const popUps = document.querySelectorAll(".pop-up");



// Manipulating dots in pop-up section
function addDot(dot) {
  dot.classList.add('current-dot')
}

function removeDots() {
  // removes all the dots and sets all imgs to display: none
  dot1s.forEach(dot => dot.classList.remove('current-dot'));
  dot2s.forEach(dot => dot.classList.remove('current-dot'));
  dot3s.forEach(dot => dot.classList.remove('current-dot'));
  displayNoneArr(img1s);
  displayNoneArr(img2s);
  displayNoneArr(img3s);
}


function openPopUp(e) {
  // because it is NOT an ARRAY, it's a NODE LIST
  const index = Array.prototype.indexOf.call(popUpBtns, this);
  displayBlock(popUps[index]);
  displayBlock(img1s[index]);
  addDot(dot1s[index]);
}

function closePopUp(e) {
  displayNoneArr(popUps)
  removeDots()
}



function scrollImg1s(e) {
  const index = Array.prototype.indexOf.call(dot1s, this);
  removeDots()
  addDot(dot1s[index])
  displayBlock(img1s[index]);
}

function scrollImg2s(e) {
  const index = Array.prototype.indexOf.call(dot2s, this);
  removeDots()
  addDot(dot2s[index])
  displayBlock(img2s[index]);
}

function scrollImg3s(e) {
  const index = Array.prototype.indexOf.call(dot3s, this);
  removeDots()
  addDot(dot3s[index])
  displayBlock(img3s[index]);
}

popUpBtns.forEach(btn => btn.addEventListener('click', openPopUp));
closeBtns.forEach(btn => btn.addEventListener('click', closePopUp));

dot1s.forEach(d => d.addEventListener('click', scrollImg1s));
dot2s.forEach(d => d.addEventListener('click', scrollImg2s));
dot3s.forEach(d => d.addEventListener('click', scrollImg3s));