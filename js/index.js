// popups

const openFirstPopup = document.querySelector(".first-movie-popup");
const firstPopup = document.querySelector(".first-movie");
const closeFirstPopup = document.querySelector(".close-first-movie");

const openSecondPopup = document.querySelector(".second-movie-popup");
const secondPopup = document.querySelector(".second-movie");
const closeSecondPopup = document.querySelector(".close-second-movie");

const openThirdPopup = document.querySelector(".third-movie-popup");
const thirdPopup = document.querySelector(".third-movie");
const closeThirdPopup = document.querySelector(".close-third-movie");

const openFourthPopup = document.querySelector(".fourth-movie-popup");
const fourthPopup = document.querySelector(".fourth-movie");
const closeFourthPopup = document.querySelector(".close-fourth-movie");

const openFifthPopup = document.querySelector(".fifth-movie-popup");
const fifthPopup = document.querySelector(".fifth-movie");
const closeFifthPopup = document.querySelector(".close-fifth-movie");

const openSixthPopup = document.querySelector(".sixth-movie-popup");
const sixthPopup = document.querySelector(".sixth-movie");
const closeSixthPopup = document.querySelector(".close-sixth-movie");

// easter egg

const easterEggButton = document.querySelector("body button.motion-tracker");
const easterEgg = document.querySelector("body .motion-tracker-img");

const motionTracker = new Audio("../sound/motiondetector.mp3");

let shown = false;

// popups

// first movie

openFirstPopup.addEventListener("click", () => {
  firstPopup.classList.remove("hidden");
  firstPopup.classList.add("shown");
});

closeFirstPopup.addEventListener("click", () => {
  firstPopup.classList.remove("shown");
  firstPopup.classList.add("hidden");
});

// second movie

openSecondPopup.addEventListener("click", () => {
  secondPopup.classList.remove("hidden");
  secondPopup.classList.add("shown");
});

closeSecondPopup.addEventListener("click", () => {
  secondPopup.classList.remove("shown");
  secondPopup.classList.add("hidden");
});

// third movie

openThirdPopup.addEventListener("click", () => {
  thirdPopup.classList.remove("hidden");
  thirdPopup.classList.add("shown");
});

closeThirdPopup.addEventListener("click", () => {
  thirdPopup.classList.remove("shown");
  thirdPopup.classList.add("hidden");
});

// fourth movie

openFourthPopup.addEventListener("click", () => {
  fourthPopup.classList.remove("hidden");
  fourthPopup.classList.add("shown");
});

closeFourthPopup.addEventListener("click", () => {
  fourthPopup.classList.remove("shown");
  fourthPopup.classList.add("hidden");
});

// fifth movie

openFifthPopup.addEventListener("click", () => {
  fifthPopup.classList.remove("hidden");
  fifthPopup.classList.add("shown");
});

closeFifthPopup.addEventListener("click", () => {
  fifthPopup.classList.remove("shown");
  fifthPopup.classList.add("hidden");
});

// sixth movie

openSixthPopup.addEventListener("click", () => {
  sixthPopup.classList.remove("hidden");
  sixthPopup.classList.add("shown");
});

closeSixthPopup.addEventListener("click", () => {
  sixthPopup.classList.remove("shown");
  sixthPopup.classList.add("hidden");
});

// easter egg

easterEggButton.addEventListener("click", () => {
  motionTracker.play();
  // shown = true;
  if (shown) {
    easterEgg.classList.remove("hide-motion-tracker");
    easterEgg.classList.add("show-motion-tracker");
  } else {
    shown = false;
    easterEgg.classList.remove("show-motion-tracker");
    easterEgg.classList.add("hide-motion-tracker");
    motionTracker.pause();
  }

  shown = !shown;
});
