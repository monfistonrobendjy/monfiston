// Pou enskripsyon 
document.getElementById('inscriptionForm').onsubmit = function(e) {
      e.preventDefault();
      const nom = nom.value.trim();
      const prenom = prenom.value.trim();
      const email = email.value.trim();
      const password = password.value;
      const cpassword = cpassword.value;

      // Verifye tout chan yo
      if (!nom || !prenom || !email || !password || !cpassword) {
        alert("Tanpri ranpli tout chan yo!");
        return;
      }
      // Verifye modpas
      if (password.length < 6) {
        alert("Modpas la dwe gen omwen 6 karaktè.");
        return;
      }
      if (password !== cpassword) {
        alert("Modpas ak konfimasyon pa menm.");
        return;
      }
      // Verifye si deja egziste
      let users = JSON.parse(localStorage.getItem('users') || "[]");
      if (users.find(u => u.email === email)) {
        alert("Itilizatè sa deja egziste!");
        return;
      }
      // anrejistre itilizatè a
      users.push({ nom, prenom, email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert("Ou anrejistre ak siksè!");
      window.location.href = "ajouterEtudiant.html";
    };
 