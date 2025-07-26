function openTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}
function openModal(img) {
  document.getElementById('imageModal').style.display = 'block';
  document.getElementById('modalImage').src = img.src;
}
function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}