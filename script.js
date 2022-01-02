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

// dot variable and remove dot function
const dot = document.querySelector('.dot');

function removeDot() {
  allBtns.forEach(item => item.classList.remove('dot'));
}

// Functions for event listeners
function openAll(e) {
  removeDot();
  this.classList.add('dot')
  for (let i = 0; i < allProperties.length; i++) {
    allProperties[i].style.display = 'grid';
  }
}

function openVillas(e) {
  removeDot();
  this.classList.add('dot')
  for (let i = 0; i < allProperties.length; i++) {
    allProperties[i].style.display = 'none';
  }
  for (let i = 0; i < villas.length; i++) {
    villas[i].style.display = 'grid';
  }
}

function openApartments(e) {
  removeDot();
  this.classList.add('dot')
  for (let i = 0; i < allProperties.length; i++) {
    allProperties[i].style.display = 'none';
  }
  for (let i = 0; i < apartments.length; i++) {
    apartments[i].style.display = 'grid';
  }
}

function openHavana(e) {
  removeDot();
  this.classList.add('dot')
  for (let i = 0; i < allProperties.length; i++) {
    allProperties[i].style.display = 'none';
  }
  for (let i = 0; i < havana.length; i++) {
    havana[i].style.display = 'grid';
  }
}

function openSanta(e) {
  removeDot();
  this.classList.add('dot')
  for (let i = 0; i < allProperties.length; i++) {
    allProperties[i].style.display = 'none';
  }
  for (let i = 0; i < santa.length; i++) {
    santa[i].style.display = 'grid';
  }
}

function openIsla(e) {
  removeDot();
  this.classList.add('dot')
  for (let i = 0; i < allProperties.length; i++) {
    allProperties[i].style.display = 'none';
  }
  for (let i = 0; i < isla.length; i++) {
    isla[i].style.display = 'grid';
  }
}



// Event Listeners
allBtn.addEventListener('click', openAll);
villaBtn.addEventListener('click', openVillas);
apartmentBtn.addEventListener('click', openApartments);
havanaBtn.addEventListener('click', openHavana);
santaBtn.addEventListener('click', openSanta);
islaBtn.addEventListener('click', openIsla);