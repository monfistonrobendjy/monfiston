// ENKRIPSYON
if(document.getElementById('inscriptionForm')) {
  document.getElementById('inscriptionForm').onsubmit = function(e) {
    e.preventDefault();
    const nom = nom.value.trim();
    const prenom = prenom.value.trim();
    const email = email.value.trim();
    const password = password.value;
    const cpassword = cpassword.value;
    if(!nom || !prenom || !email || !password || !cpassword) {
      alert("Tanpri ranpli tout chan yo!");
      return;
    }
    if(password.length < 6) {
      alert("Modpas la dwe gen omwen 6 karaktè.");
      return;
    }
    if(password !== cpassword) {
      alert("Modpas ak konfimasyon pa menm.");
      return;
    }
    let users = JSON.parse(localStorage.getItem('users') || "[]");
    if(users.find(u => u.email === email)) {
      alert("Itilizatè sa deja egziste!");
      return;
    }
    users.push({ nom, prenom, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = "ajouterEtudiant.html";
  }
}

// KONEKSYON
if(document.getElementById('connexionForm')) {
  document.getElementById('connexionForm').onsubmit = function(e) {
    e.preventDefault();
    const email = loginEmail.value.trim();
    const password = loginPassword.value;
    if(!email || !password) {
      alert("Ranpli tout chan yo!");
      return;
    }
    let users = JSON.parse(localStorage.getItem('users') || "[]");
    let user = users.find(u => u.email === email && u.password === password);
    if(user) {
      window.location.href = "ajouterEtudiant.html";
    } else {
      alert("Enfòmasyon yo pa kòrèk oswa ou pa anrejistre.");
    }
  }
}