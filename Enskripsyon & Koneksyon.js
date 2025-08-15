
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-box');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = form.querySelectorAll('input');
        const [non, prenon, email, password, confirm] = Array.from(inputs).map(input => input.value);
        
        if (password !== confirm) {
            alert('Modpas yo pa matche! Tanpri verifye.');
            return;
        }
        
        const itilizate = {
            non,
            prenon,
            email,
            password
        };
        
        localStorage.setItem(email, JSON.stringify(itilizate));
        
        alert(`Byenvini ${non} pami nou`);
        window.location.href = 'connexion.html';
    });
});




// koneksyon
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-box');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
       
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;
        
        const itilizateStorage = localStorage.getItem(email);
        
        if (!itilizateStorage) {
            alert('Pa gen kont  a imèl sa a');
            return;
        }
        
        const itilizate = JSON.parse(itilizateStorage);
        
        if (itilizate.password !== password) {
            alert('Modpas ou an pa kòrèk');
            return;
        }
        
        sessionStorage.setItem('kounye_a', JSON.stringify(itilizate));
        
        window.location.href = 'ajouterEtudiant.html';
    });
});