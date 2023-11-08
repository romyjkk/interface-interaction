const title = document.querySelector("body header section h1");
const mainTheme = new Audio("sound/maintitle.mp3");

let audioPlaying = false;

// speel audio af wanneer er op de H1 geklikt wordt, pauzeer wanneer er nog eens geklikt wordt

title.addEventListener("click", () => {
  if (audioPlaying) {
    mainTheme.pause();
    audioPlaying = false;
  } else {
    mainTheme.play();
    audioPlaying = true;
  }
});
