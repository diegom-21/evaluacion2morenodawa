document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!email || !password) {
                e.preventDefault();
                alert('Por favor, completa todos los campos.');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!name || !email || !password) {
                e.preventDefault();
                alert('Por favor, completa todos los campos.');
            }
        });
    }
});
