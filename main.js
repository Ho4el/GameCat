const playBtn = document.getElementById('play-btn');
const gameArea = document.getElementById('game-area');
const goalText = document.getElementById('goal-text');
const timerText = document.getElementById('timer-text');
const catImage = document.getElementById('cat-image');
const winText = document.getElementById('win-text');

const catImages = [
  '/GameCat/image/cat.jpg',
  '/GameCat/image/cat2.jpg',
  '/GameCat/image/cat3.jpg',
  '/GameCat/image/cat4.jpg',
  '/GameCat/image/cat5.jpg'
];

playBtn.addEventListener('click', () => {
  gameArea.style.display = 'block';
  playBtn.style.display = 'none';

  goalText.style.display = 'block';

  let timeLeft = 5;
  timerText.style.display = 'block';
  timerText.textContent = `Таймер: ${timeLeft} сек`;

  const countdown = setInterval(() => {
    timeLeft--;
    timerText.textContent = `Таймер: ${timeLeft} сек`;

    if (timeLeft <= 0) {
      clearInterval(countdown);

      goalText.style.display = 'none';
      timerText.style.display = 'none';

      const randomIndex = Math.floor(Math.random() * catImages.length);
      catImage.src = catImages[randomIndex];
      catImage.style.display = 'block';

      setTimeout(() => {
        winText.textContent = 'Вы выиграли!';
        winText.style.display = 'block';
      }, 500);
    }
  }, 1000);
});
