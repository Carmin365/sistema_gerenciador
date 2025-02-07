// script.js
const loginForm = document.getElementById('login-form');
const app = document.getElementById('app');
const projectList = document.getElementById('project-list');

// Função que simula um login (substituir por autenticação real)
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        loginForm.style.display = 'none';
        app.style.display = 'block';

        // Carregando projetos do usuário (simulando)
        const projects = ['Projeto 1', 'Projeto 2', 'Projeto 3'];
        projects.forEach(project => {
            const li = document.createElement('li');
            li.textContent = project;
            projectList.appendChild(li);
        });
    } else {
        alert('Usuário ou senha inválidos');
    }
}

function createProject() {
    const projectName = prompt('Digite o nome do projeto:');
    if (projectName) {
        const li = document.createElement('li');
        li.textContent = projectName;
        projectList.appendChild(li);
    }
}