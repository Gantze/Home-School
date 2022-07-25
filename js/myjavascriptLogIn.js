let logInForm = document.getElementById('log-in-form');
let logInButton = document.getElementById('log-in-button');
let usernameLogIn = document.getElementById('username-input-log-in');
let passwordLogIn = document.getElementById('password-input-log-in');
let errorLogInUsername = document.getElementById('empty-field-error-username-log-in');
let errorLogInPassword = document.getElementById('empty-field-error-password-log-in');
let rememberForgot = document.getElementById('remember-forgot-section');

logInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    logInClick();
});

function logInClick() {
    let usernameValue = usernameLogIn.value.trim();
    let passwordValue = passwordLogIn.value.trim();

    logInForm.style.gap = '0';
    rememberForgot.style.marginBottom = '20px';

    if(usernameValue === '' && usernameLogIn.style.marginBottom === '20px') {
        errorLogInUsername.style.display = 'block';
        errorLogInUsername.style.margin = '10px 0';
        usernameLogIn.style.marginBottom = '0';
    } else if(usernameValue === '') {
        errorLogInUsername.style.display = 'block';
        errorLogInUsername.style.margin = '10px 0';
    } else if(errorLogInUsername.style.display = 'block' && usernameValue.length > 0) {
        errorLogInUsername.style.display = 'none';
        usernameLogIn.style.marginBottom = '20px';
    } else {
        usernameLogIn.style.marginBottom = '20px';
    }

    if(passwordValue === '' && passwordLogIn.style.marginBottom === '20px') {
        errorLogInPassword.style.display = 'block';
        errorLogInPassword.style.margin = '10px 0';
        passwordLogIn.style.marginBottom = '0';
    } else if(passwordValue === '') {
        errorLogInPassword.style.display = 'block';
        errorLogInPassword.style.margin = '10px 0';
    } else if(errorLogInPassword.style.display = 'block' && passwordValue.length > 0) {
        errorLogInPassword.style.display = 'none';
        passwordLogIn.style.marginBottom = '20px';
    } else {
        passwordLogIn.style.marginBottom = '20px';
    }
}