// Tabs
document.querySelectorAll('.tab-button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// Gallery Modal
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = '<span class="close">&times;</span><img class="modal-content">';
document.body.appendChild(modal);

const modalImg = modal.querySelector('.modal-content');
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});
modal.querySelector('.close').onclick = () => (modal.style.display = 'none');

// Carousel
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
let index = 0;
document.querySelector('.carousel-btn.next').onclick = () => {
  index = (index + 1) % items.length;
  track.style.transform = `translateX(-${index * 100}%)`;
};
document.querySelector('.carousel-btn.prev').onclick = () => {
  index = (index - 1 + items.length) % items.length;
  track.style.transform = `translateX(-${index * 100}%)`;
};
