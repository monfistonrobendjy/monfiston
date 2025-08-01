// Toggle menu
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('nav.navbar');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navbar.classList.toggle('open');
});

// Rechèch: Filtre kou yo epi ouvè paj users.html si '1234'
const searchInput = document.getElementById('search');
const courseList = document.getElementById('courses-list');
const allCourses = Array.from(courseList.children);
searchInput.addEventListener('input', e => {
  const val = e.target.value.trim().toLowerCase();
  // Si '1234' tape, ouvè paj users.html
  if(val === '1234') {
    window.location.href = 'users.html';
    return;
  }
  // Filtaj
  allCourses.forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(val) ? '' : 'none';
  });
});