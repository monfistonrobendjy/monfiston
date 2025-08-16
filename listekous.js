
        const STORAGE_KEY = "school_students";
        
        const studentForm = document.getElementById('student-form');
        const studentList = document.getElementById('student-list');
        const submitBtn = document.getElementById('submit-btn');
        const notification = document.getElementById('notification');
        
        const studentIdInput = document.getElementById('student-id');
        const firstNameInput = document.getElementById('first-name');
        const lastNameInput = document.getElementById('last-name');
        const phoneInput = document.getElementById('phone');
        const emailInput = document.getElementById('email');
        
        document.addEventListener('DOMContentLoaded', () => {
            loadStudents();
            setupEventListeners();
        });
        
        function setupEventListeners() {
            studentForm.addEventListener('submit', saveStudent);
        }
        
        function loadStudents() {
            const students = getStudents();
            renderStudents(students);
        }
        
        function getStudents() {
            const studentsJSON = localStorage.getItem(STORAGE_KEY);
            return studentsJSON ? JSON.parse(studentsJSON) : [];
        }
       
        function saveStudents(students) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
        }
        
        function renderStudents(students) {
            if (students.length === 0) {
                studentList.innerHTML = `
                    <div class="empty-message">
                        <i class="fas fa-user-graduate"></i>
                        <p>Pa gen etidyan anrejistre. Ajoute premye etidyan ou a!</p>
                    </div>
                `;
                return;
            }
            
            studentList.innerHTML = '';
            
            students.forEach(student => {
                const studentItem = document.createElement('li');
                studentItem.className = 'student-item';
                studentItem.innerHTML = `
                    <div class="student-header">
                        <div class="student-name">${student.firstName} ${student.lastName}</div>
                    </div>
                    <div class="student-contact">
                        <div><i class="fas fa-phone"></i> ${student.phone}</div>
                        <div><i class="fas fa-envelope"></i> ${student.email}</div>
                    </div>
                    <div class="student-actions">
                        <button class="action-btn edit-btn" onclick="editStudent('${student.id}')">
                            <i class="fas fa-edit"></i> Modifye
                        </button>
                        <button class="action-btn delete-btn" onclick="deleteStudent('${student.id}')">
                            <i class="fas fa-trash"></i> Efase
                        </button>
                    </div>
                `;
                studentList.appendChild(studentItem);
            });
        }
        
        function saveStudent(e) {
            e.preventDefault();
            
            const students = getStudents();
            const studentId = studentIdInput.value;
            const firstName = firstNameInput.value;
            const lastName = lastNameInput.value;
            const phone = phoneInput.value;
            const email = emailInput.value;
            
            if (studentId) {
                const index = students.findIndex(s => s.id === studentId);
                if (index !== -1) {
                    students[index] = {
                        ...students[index],
                        firstName,
                        lastName,
                        phone,
                        email
                    };
                    showNotification("Etidyan mete ajou avèk siksè!", "success");
                }
            } else {
                const newStudent = {
                    id: 'etid-' + Date.now(),
                    firstName,
                    lastName,
                    phone,
                    email,
                    createdAt: new Date().toISOString()
                };
                students.push(newStudent);
                showNotification("Etidyan ajoute avèk siksè!", "success");
            }
            
            saveStudents(students);
            loadStudents();
            resetForm();
        }
        
        function editStudent(id) {
            const students = getStudents();
            const student = students.find(s => s.id === id);
            
            if (student) {
                studentIdInput.value = student.id;
                firstNameInput.value = student.firstName;
                lastNameInput.value = student.lastName;
                phoneInput.value = student.phone;
                emailInput.value = student.email;
                
                submitBtn.innerHTML = '<i class="fas fa-save"></i> Mete ajou';
                
                document.querySelector('.form-card').scrollIntoView({ behavior: 'smooth' });
                
                studentForm.classList.add('highlight');
                setTimeout(() => {
                    studentForm.classList.remove('highlight');
                }, 2000);
            }
        }
        
        function deleteStudent(id) {
            if (confirm('Èske w sèten ou vle efase etidyan sa a?')) {
                const students = getStudents();
                const filteredStudents = students.filter(s => s.id !== id);
                saveStudents(filteredStudents);
                loadStudents();
                showNotification("Etidyan efase avèk siksè!", "success");
            }
        }
        
        function resetForm() {
            studentForm.reset();
            studentIdInput.value = '';
            submitBtn.innerHTML = '<i class="fas fa-plus-circle"></i> Ajoute';
        }
        
        function showNotification(message, type) {
            notification.textContent = message;
            notification.className = `notification ${type} show`;
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
            function addSampleData() {
            const sampleStudents = [
                {
                    id: '',
                    firstName: "B.Tawens.G",
                    lastName: "PIERRE",
                    phone: "42523261",
                    email: "pierre@gmail.com",
                    createdAt: ""
                },
{
                    id: '',
                    firstName: "Brownson",
                    lastName: "DORCILIEN",
                    phone: "41150563",
                    email: "brown@gmail.com",
                    createdAt: ""
                },
{
                    id: '',
                    firstName: "Robendjy",
                    lastName: "MONFISTON",
                    phone: "41109375",
                    email: "monfiston@gmail.com",
                    createdAt: ""
                },
                 ];
            localStorage.setItem(STORAGE_KEY, JSON.stringify(sampleStudents));
            loadStudents();
        }
        
        if (getStudents().length === 0) {
            addSampleData();
        }
  





// Jwenn eleman rechèch la
const rechèchInput = document.getElementById('rechèch');

// Fonksyon pou chèche etidyan yo
function fèRechèch() {
    const tèmRechèch = rechèchInput.value.toLowerCase().trim();
    const etidyanItems = document.querySelectorAll('.student-item');
    let jwennOkennRezilta = true;
    
    // Parcouri tout etidyan yo
    etidyanItems.forEach(item => {
        const non = item.querySelector('.student-name').textContent.toLowerCase();
        const siyati = item.querySelector('.student-lastname').textContent.toLowerCase();
        const telefòn = item.querySelector('.student-phone').textContent.toLowerCase();
        const imèl = item.querySelector('.student-email').textContent.toLowerCase();
        
        // Tcheke si tèm nan nan youn nan jaden yo
        if (non.includes(tèmRechèch) || 
            siyati.includes(tèmRechèch) || 
            telefòn.includes(tèmRechèch) || 
            imèl.includes(tèmRechèch)) {
            
            item.style.display = 'block';
            jwennOkennRezilta = false;
            
            // Mete aksan sou tèm nan
            meteAksan(item, tèmRechèch);
        } else {
            item.style.display = 'none';
        }
    });
    
    // Afiche mesaj si pa gen rezilta
    const paGenReziltaElem = document.getElementById('pa-gen-rezilta');
    if (jwennOkennRezilta && tèmRechèch !== '') {
        paGenReziltaElem.style.display = 'block';
    } else {
        paGenReziltaElem.style.display = 'none';
    }
    
    // Afiche konbyen rezilta yo jwenn
    const kantiteReziltaElem = document.getElementById('kantite-rezilta');
    const kantiteVizib = document.querySelectorAll('.student-item[style="display: block;"]').length;
    kantiteReziltaElem.textContent = kantiteVizib;
    kantiteReziltaElem.style.display = kantiteVizib > 0 ? 'block' : 'none';
}

// Fonksyon pou mete aksan sou mo chèche a
function meteAksan(elem, tèm) {
    const jaden = ['student-name', 'student-lastname', 'student-phone', 'student-email'];
    
    jaden.forEach(jadenId => {
        const jadenElem = elem.querySelector(`.${jadenId}`);
        if (jadenElem) {
            const orijinalTèks = jadenElem.dataset.orijinal || jadenElem.textContent;
            jadenElem.dataset.orijinal = orijinalTèks;
            
            const nouvoTèks = orijinalTèks.replace(
                new RegExp(tèm, 'gi'), 
                match => `<span class="highlight">${match}</span>`
            );
            
            jadenElem.innerHTML = nouvoTèks;
        }
    });
}

// Reyajiste lis la lè rechèch la vid
function reyajisteLis() {
    if (rechèchInput.value === '') {
        const etidyanItems = document.querySelectorAll('.student-item');
        etidyanItems.forEach(item => {
            item.style.display = 'block';
            
            // Retire aksan yo
            const jaden = ['student-name', 'student-lastname', 'student-phone', 'student-email'];
            jaden.forEach(jadenId => {
                const jadenElem = item.querySelector(`.${jadenId}`);
                if (jadenElem && jadenElem.dataset.orijinal) {
                    jadenElem.textContent = jadenElem.dataset.orijinal;
                }
            });
        });
        
        document.getElementById('pa-gen-rezilta').style.display = 'none';
        document.getElementById('kantite-rezilta').style.display = 'none';
    }
}

// Ajoute evènman yo
rechèchInput.addEventListener('input', fèRechèch);
rechèchInput.addEventListener('keyup', reyajisteLis);

// Ajoute bouton netwayaj
const netwayajBtn = document.createElement('button');
netwayajBtn.id = 'netwayaj-btn';
netwayajBtn.innerHTML = '<i class="fas fa-times"></i>';
netwayajBtn.title = 'Netwaye rechèch';
netwayajBtn.addEventListener('click', () => {
    rechèchInput.value = '';
    reyajisteLis();
});

// Ajoute bouton nan bwat rechèch la
rechèchInput.parentNode.insertBefore(netwayajBtn, rechèchInput.nextSibling);