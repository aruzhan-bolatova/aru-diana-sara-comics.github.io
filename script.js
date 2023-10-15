AOS.init();

const playButton = document.getElementById("playButton");
const bgMusic = document.getElementById("bgMusic");

 playButton.addEventListener("click", () => {
     if (bgMusic.paused) {
         bgMusic.play();
         playButton.textContent = "Pause Music";
     } else {
         bgMusic.pause();
         playButton.textContent = "Play Music";
     }
 });
