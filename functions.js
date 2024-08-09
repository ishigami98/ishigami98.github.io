// Función para mostrar y ocultar el panel del menú
function toggleMenu() {
    const menuPanel = document.getElementById('menuPanel');
    menuPanel.classList.toggle('hidden');
}

// Evento para el botón del menú
document.getElementById('menuButton').addEventListener('click', toggleMenu);

// Función para mostrar y ocultar el panel de inicio de sesión
function toggleLoginPanel() {
    const loginPanel = document.getElementById('loginPanel');
    loginPanel.classList.toggle('hidden');
}

// Evento para el botón de inicio de sesión
document.getElementById('loginButton').addEventListener('click', toggleLoginPanel);

// Función para habilitar o deshabilitar el modo oscuro
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

// Evento para el botón del modo oscuro
document.getElementById('darkModeButton').addEventListener('click', toggleDarkMode);

// Función para validar el formulario de inicio de sesión
function validateLoginForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    // Aquí puedes agregar lógica adicional de validación o autenticación

    alert('Inicio de sesión exitoso');
    // Redirigir al usuario a otra página después de iniciar sesión
    window.location.href = 'home.html';
}

// Evento para la validación del formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', validateLoginForm);
