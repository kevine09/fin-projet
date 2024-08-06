let score = 0;
const clickButton = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');
const clickSound = new Audio('../sounds/click.mp3');

clickSound.addEventListener('canplaythrough', function() {
  console.log('Audio is ready to play');
});

clickButton.addEventListener('click', function() {
  score++;
  scoreDisplay.textContent = 'Score: ' + score;
  scoreDisplay.classList.add('animate');
  setTimeout(() => scoreDisplay.classList.remove('animate'), 500);
  clickSound.play();
});


  