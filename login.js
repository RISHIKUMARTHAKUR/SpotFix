const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const publicLoginButton = document.getElementById('public-login');
const adminLoginButton = document.getElementById('admin-login');
const loginMessage = document.getElementById('login-message');
const dashboard = document.querySelector('.dashboard');

// Replace with your actual authentication logic
function authenticate(username, password, role) {
    // Simulate successful login for demonstration
    if (username === 'public' && password === 'public123' && role === 'public') {
        return true;
    } else if (username === 'admin' && password === 'admin123' && role === 'admin') {
        return true;
    } else {
        return false;
    }
}

publicLoginButton.addEventListener('click', () => {
    login(usernameInput.value, passwordInput.value, 'public');
});

adminLoginButton.addEventListener('click', () => {
    login(usernameInput.value, passwordInput.value, 'admin');
});

function login(username, password, role
               
