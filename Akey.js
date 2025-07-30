
<script>
  function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
  }
</script>
// Script à placer dans votre fichier JS ou dans une balise <script>
const themeBtn = document.getElementById('toggle-theme');
const body = document.body;

// Fonction pour appliquer le thème sauvegardé ou le thème par défaut
function applyTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
  } else {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
  }
}

// Changement de thème au clic sur le bouton
themeBtn.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  }
});

// Appliquer le thème au chargement de la page
applyTheme();