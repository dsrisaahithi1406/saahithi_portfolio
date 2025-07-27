// ---------------------------
// Tab Switching
// ---------------------------
document.querySelectorAll('.tab-button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// ---------------------------
// Modal for Gallery & Collage Images
// ---------------------------
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = '<span class="close">&times;</span><img class="modal-content">';
document.body.appendChild(modal);

const modalImg = modal.querySelector('.modal-content');

// Attach click to both gallery and collage images
document.querySelectorAll('.gallery img, .collage img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

// Close modal on clicking close button
modal.querySelector('.close').onclick = () => modal.style.display = 'none';

// ---------------------------
// Carousel Functionality
// ---------------------------
const track = document.querySelector('.carousel-track');
if (track) {
  const items = document.querySelectorAll('.carousel-item');
  let idx = 0;

  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');

  const updateCarousel = () => {
    track.style.transform = `translateX(-${idx * 100}%)`;
  };

  nextBtn.onclick = () => {
    idx = (idx + 1) % items.length;
    updateCarousel();
  };

  prevBtn.onclick = () => {
    idx = (idx - 1 + items.length) % items.length;
    updateCarousel();
  };
}

// ---------------------------
// Optional: Close modal on outside click
// ---------------------------
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});
