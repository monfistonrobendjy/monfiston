
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-box');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Jwenn tout jaden yo
        const inputs = form.querySelectorAll('input');
        const [non, prenon, email, password, confirm] = Array.from(inputs).map(input => input.value);
        
        // Tcheke si modpas yo matche
        if (password !== confirm) {
            alert('Modpas yo pa matche! Tanpri verifye.');
            return;
        }
        
        // Kreye objè itilizatè
        const itilizate = {
            non,
            prenon,
            email,
            password
        };
        
        // Sove nan localStorage
        localStorage.setItem(email, JSON.stringify(itilizate));
        
        // Afiche mesaj siksè epi redirije
        alert(`Byenvini ${non} pami nou`);
        window.location.href = 'connexion.html';
    });
});




// koneksyon
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-box');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Valè yo
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;
        
        // Chèche itilizatè nan localStorage
        const itilizateStorage = localStorage.getItem(email);
        
        if (!itilizateStorage) {
            alert('Pa gen kont  a imèl sa a');
            return;
        }
        
        // JSON 
        const itilizate = JSON.parse(itilizateStorage);
        
        // Verifye modpas
        if (itilizate.password !== password) {
            alert('Modpas ou an pa kòrèk');
            return;
        }
        
        // Sove sesyon kouran
        sessionStorage.setItem('kounye_a', JSON.stringify(itilizate));
        
        // Redirije sou paj welkòm
        window.location.href = 'ajouterEtudiant.html';
    });
});