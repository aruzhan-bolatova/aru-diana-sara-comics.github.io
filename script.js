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

 document.addEventListener('DOMContentLoaded', function() {
  //giving the event as "click", so when the mouse is clicked on the first image with advice called "FirstAdvice", another image with more detailed advice called "FirstAdviceText" appears.
  document.getElementById('first-frame').addEventListener('click', function() {
      var first_frame_text = document.getElementById('first-frame-text');
  //the conditional to make the second image hide and appear by the click of the mouse. So, if the image "FirstAdviceText" is hidden, with the click of the mouse on the "FirstAdvice" image, it appears and vice versa.
      if (first_frame_text.style.display === 'none' || first_frame_text.style.display === '') {
          first_frame_text.style.display = 'block'; // Show the image "firstframeText"
          first_frame_text.style.width = '70%';
          first_frame_text.style.margin = 'auto';
      } else {
          first_frame_text.style.display = 'none'; // Hide the image "firstAdviceText"
      }
  });
  //the same event and conditionals are done with other four shown and four hidden images.
  document.getElementById('second-frame').addEventListener('click', function() {
      var second_frame_text = document.getElementById('second-frame-text');
      if (second_frame_text.style.display === 'none' || second_frame_text.style.display === '') {
          second_frame_text.style.display = 'block';
          second_frame_text.style.width = '70%';
          second_frame_text.style.margin = 'auto';
      } else {
          second_frame_text.style.display = 'none';
      }
  });
  document.getElementById('third-frame').addEventListener('click', function() {
      var third_frame_text = document.getElementById('third-frame-text');
      if (third_frame_text.style.display === 'none' || third_frame_text.style.display === '') {
          third_frame_text.style.display = 'block';
          third_frame_text.style.width = '70%';
          third_frame_text.style.margin = 'auto';
      } else {
          third_frame_text.style.display = 'none';
      }
  });
  document.getElementById('fourth-frame').addEventListener('click', function() {
      var fourth_frame_text = document.getElementById('fourth-frame-text');
      if (fourth_frame_text.style.display === 'none' || fourth_frame_text.style.display === '') {
          fourth_frame_text.style.display = 'block';
          fourth_frame_text.style.width = '70%';
          fourth_frame_text.style.margin = 'auto';
      } else {
          fourth_frame_text.style.display = 'none';
      }
  });
  document.getElementById('fifth-frame').addEventListener('click', function() {
      var fifth_frame_text = document.getElementById('fifth-frame-text');
      if (fifth_frame_text.style.display === 'none' || fifth_frame_text.style.display === '') {
          fifth_frame_text.style.display = 'block';
          fifth_frame_text.style.width = '70%';
          fifth_frame_text.style.margin = 'auto';
      } else {
          fifth_frame_text.style.display = 'none';
      }
  });
  document.getElementById('sixth-frame').addEventListener('click', function() {
      var sixth_frame_text = document.getElementById('sixth-frame-text');
      if (sixth_frame_text.style.display === 'none' || sixth_frame_text.style.display === '') {
          sixth_frame_text.style.display = 'block';
          sixth_frame_text.style.width = '70%';
          sixth_frame_text.style.margin = 'auto';
      } else {
          sixth_frame_text.style.display = 'none';
      }
  });
});
