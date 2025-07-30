const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const popup = document.getElementById('popup');
const container = document.querySelector('.container');

yesBtn.addEventListener('click', () => {
  popup.style.display = 'block';
  setTimeout(() => (popup.style.display = 'none'), 3000);
});

function moveNoButtonRandomly() {
  const containerRect = container.getBoundingClientRect();
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const padding = 20;
  const minX = padding;
  const minY = 100;
  const maxX = containerRect.width - btnWidth - padding;
  const maxY = containerRect.height - btnHeight - padding;

  const randomX = Math.floor(Math.random() * (maxX - minX) + minX);
  const randomY = Math.floor(Math.random() * (maxY - minY) + minY);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

noBtn.addEventListener('click', moveNoButtonRandomly);
noBtn.addEventListener('mouseenter', moveNoButtonRandomly);
noBtn.addEventListener('touchstart', moveNoButtonRandomly); // For touch devices
