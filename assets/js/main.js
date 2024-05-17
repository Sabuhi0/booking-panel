// Resbonsive menu bar

const resbonsive_menu = document.getElementById('hamburger');
const resbonsive_close = document.getElementById('resbonsive-close');

resbonsive_menu.addEventListener('click', () => {
  document.getElementById('resbonsive-menu').classList.toggle('active');
});
resbonsive_close.addEventListener('click', () => {
  document.getElementById('resbonsive-menu').classList.remove('active');
})
