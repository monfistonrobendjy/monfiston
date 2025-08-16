
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
  

document.getElementById('search-btn').addEventListener('click', () => {
  const query = document.getElementById('search-input').value.toLowerCase();
  const students = getStudents(); 
  const filtered = students.filter(s =>
    s.firstName.toLowerCase().includes(query) ||
    s.lastName.toLowerCase().includes(query) ||
    s.phone.includes(query) ||
    s.email.toLowerCase().includes(query)
  );
  renderStudents(filtered); 
});
