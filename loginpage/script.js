// --- Animation Logic ---
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
registerBtn.addEventListener('click', () => container.classList.add("active"));
loginBtn.addEventListener('click', () => container.classList.remove("active"));

// --- API Logic ---
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');
const signUpMessage = document.getElementById('signUpMessage');
const signInMessage = document.getElementById('signInMessage');

// Handle Sign Up
signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;
    signUpMessage.textContent = 'Registering...';
    signUpMessage.style.color = 'black';
    try {
        const response = await fetch('http://127.0.0.1:5000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        signUpMessage.textContent = data.message;
        signUpMessage.style.color = 'green';
    } catch (error) {
        signUpMessage.textContent = error.message;
        signUpMessage.style.color = 'red';
    }
});

// Handle Sign In 
signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    signInMessage.textContent = 'Logging in...';
    signInMessage.style.color = 'black';
    try {
        const response = await fetch('http://127.0.0.1:5000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        signInMessage.textContent = data.message;
        signInMessage.style.color = 'green';
        setTimeout(() => {
            // Yahan aap user ko dashboard par bhej sakte hain
            // window.location.href = '/dashboard.html'; 
        }, 1000);
    } catch (error) {
        signInMessage.textContent = error.message;
        signInMessage.style.color = 'red';
    }
});

// --- NEW: Handle Forgot Password ---
const forgotPasswordLink = document.querySelector('.sign-in form a');
forgotPasswordLink.addEventListener('click', async (event) => {
    event.preventDefault();
    const email = window.prompt("Please enter your email address to reset your password:");

    if (email) {
        signInMessage.textContent = 'Sending reset link...';
        signInMessage.style.color = 'black';
        try {
            const response = await fetch('http://127.0.0.1:5000/api/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email }),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            signInMessage.textContent = data.message;
            signInMessage.style.color = 'green';
        } catch (error) {
            signInMessage.textContent = error.message;
            signInMessage.style.color = 'red';
        }
    }
});


// --- Password ko show/hide karne ke liye ---
function setupPasswordToggle(toggleId, passwordId) {
    const togglePassword = document.getElementById(toggleId);
    const passwordInput = document.getElementById(passwordId);

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
}

setupPasswordToggle('toggleSignUpPassword', 'signUpPassword');
setupPasswordToggle('toggleSignInPassword', 'signInPassword');
