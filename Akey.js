// Meni
const menuBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('mainMenu');
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Tèm 
const themeBtn = document.getElementById('toggle-theme');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '🌝' : '🌚';
});