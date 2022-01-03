// Variables

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

// Property page popup
const slide1Img1 = document.querySelector(".pop-up .slide1 .imgs .img1")
const slide1Img2 = document.querySelector(".pop-up .slide1 .imgs .img2")
const slide1Img3 = document.querySelector(".pop-up .slide1 .imgs .img3")

const slide1Dot1 = document.querySelector(".pop-up .slide1 .dots .dot1")
const slide1Dot2 = document.querySelector(".pop-up .slide1 .dots .dot2")
const slide1Dot3 = document.querySelector(".pop-up .slide1 .dots .dot3")










// Functions
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


// Property page "see more"
const popUpBtn = document.querySelector(".pop-up-btn");
// later revise this as an array of all buttons and loop through to display correct one

const closeBtn = document.querySelector(".pop-up .close");

const popUp = document.querySelector(".pop-up");

function openPopUp(e) {
  popUp.style.display = 'block';
  slide1Img1.style.display = "block";
  slide1Dot1.classList.add('current-dot')
  slide1Dot2.classList.remove('current-dot')
  slide1Dot3.classList.remove('current-dot')
}

function closePopUp(e) {
  popUp.style.display = 'none';
  // also need to close all imgs
  slide1Img1.style.display = "none";
  slide1Img2.style.display = "none";
  slide1Img3.style.display = "none";
}

popUpBtn.addEventListener('click', openPopUp);
closeBtn.addEventListener('click', closePopUp)



// View images
// const imgsSlide1 = document.querySelectorAll(".pop-up .slide1 .imgs img");
// const dotsSlide1 = document.querySelectorAll(".pop-up .slide1 .dots .dot")

// function changeImg(e) {
//   for (let i = 0; i < dotsSlide1; i++) {
//     if (e.target == dotsSlide1[i]) {
//       imgsSlide1[i].style.display = 'block'
//       // e.target.style.classList = 'current-dot';
//     } else {
//       imgsSlide1[i].style.display = 'hidden'
//     }
//   }
// }


// dotsSlide1.addEventListener('click', changeImg);




function showImg1(e) {
  slide1Img1.style.display = "block";
  slide1Dot1.classList.add('current-dot')
  slide1Img2.style.display = "none";
  slide1Dot2.classList.remove('current-dot')
  slide1Img3.style.display = "none";
  slide1Dot3.classList.remove('current-dot')
}

function showImg2(e) {
  slide1Img1.style.display = "none";
  slide1Dot1.classList.remove('current-dot')
  slide1Img2.style.display = "block";
  slide1Dot2.classList.add('current-dot')
  slide1Img3.style.display = "none";
  slide1Dot3.classList.remove('current-dot')
}

function showImg3(e) {
  slide1Img1.style.display = "none";
  slide1Dot1.classList.remove('current-dot')
  slide1Img2.style.display = "none";
  slide1Dot2.classList.remove('current-dot')
  slide1Img3.style.display = "block";
  slide1Dot3.classList.add('current-dot')
}

slide1Dot1.addEventListener('click', showImg1);
slide1Dot2.addEventListener('click', showImg2);
slide1Dot3.addEventListener('click', showImg3);