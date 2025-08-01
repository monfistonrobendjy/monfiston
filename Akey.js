// Bouton meni toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('nav.navbar');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navbar.classList.toggle('open');
});

// Fè bouton tèm nan mache
const themeBtn = document.getElementById('toggle-theme');
function applyTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeBtn.textContent = '☀️'; // Klè
  } else {
    document.body.classList.remove('dark-theme');
    themeBtn.textContent = '🌙'; // Fènwa
  }
}
themeBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    themeBtn.textContent = '🌙';
  } else {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    themeBtn.textContent = '☀️';
  }
});
applyTheme();