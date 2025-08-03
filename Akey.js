// Menu mobil toggle
const menuBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('mainMenu');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Toggle tèm klè/fènwa
const themeBtn = document.getElementById('toggle-theme');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? 'Klè' : 'Thème';
});