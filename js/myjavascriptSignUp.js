let signUpForm = document.getElementById('sign-up-form');
let signUpButton = document.getElementById('sign-up-button');
let firstNameSignUp = document.getElementById('first-name-input-sign-up');
let lastNameSignUp = document.getElementById('last-name-input-sign-up');
let usernameSignUp = document.getElementById('username-input-sign-up');
let passwordSignUp = document.getElementById('password-input-sign-up'); 
let errorSignUpFirstName = document.getElementById('empty-field-error-first-name-sign-up');
let errorSignUpLastName = document.getElementById('empty-field-error-last-name-sign-up');
let errorSignUpUsername = document.getElementById('empty-field-error-username-sign-up');
let errorSignUpPassword = document.getElementById('empty-field-error-password-sign-up');

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    signUpClick();
});

function signUpClick() {
    let firstNameValue = firstNameSignUp.value.trim();
    let lastNameValue = lastNameSignUp.value.trim();
    let usernameValue = usernameSignUp.value.trim();
    let passwordValue = passwordSignUp.value.trim();

    signUpForm.style.gap = '0';

    if(firstNameValue === '' && firstNameSignUp.style.marginBottom === '20px') {
        errorSignUpFirstName.style.display = 'block';
        errorSignUpFirstName.style.margin = '10px 0';
        firstNameSignUp.style.marginBottom = '0';
    } else if(firstNameValue === '') {
        errorSignUpFirstName.style.display = 'block';
        errorSignUpFirstName.style.margin = '10px 0';
    } else if(errorSignUpFirstName.style.display = 'block' && firstNameValue.length > 0) {
        errorSignUpFirstName.style.display = 'none';
        firstNameSignUp.style.marginBottom = '20px';
    } else {
        firstNameSignUp.style.marginBottom = '20px';
    }

    if(lastNameValue === '' && lastNameSignUp.style.marginBottom === '20px') {
        errorSignUpLastName.style.display = 'block';
        errorSignUpLastName.style.margin = '10px 0';
        lastNameSignUp.style.marginBottom = '0';
    } else if(lastNameValue === '') {
        errorSignUpLastName.style.display = 'block';
        errorSignUpLastName.style.margin = '10px 0';
    } else if(errorSignUpLastName.style.display = 'block' && lastNameValue.length > 0) {
        errorSignUpLastName.style.display = 'none';
        lastNameSignUp.style.marginBottom = '20px';
    } else {
        lastNameSignUp.style.marginBottom = '20px';
    }

    if(usernameValue === '' && usernameSignUp.style.marginBottom === '20px') {
        errorSignUpUsername.style.display = 'block';
        errorSignUpUsername.style.margin = '10px 0';
        usernameSignUp.style.marginBottom = '0';
    } else if(usernameValue === '') {
        errorSignUpUsername.style.display = 'block';
        errorSignUpUsername.style.margin = '10px 0';
    } else if(errorSignUpUsername.style.display = 'block' && usernameValue.length > 0) {
        errorSignUpUsername.style.display = 'none';
        usernameSignUp.style.marginBottom = '20px';
    } else {
        usernameSignUp.style.marginBottom = '20px';
    }

    if(passwordValue === '' && passwordSignUp.style.marginBottom === '20px') {
        errorSignUpPassword.style.display = 'block';
        errorSignUpPassword.style.margin = '10px 0';
        passwordSignUp.style.marginBottom = '0';
    } else if(passwordValue === '') {
        errorSignUpPassword.style.display = 'block';
        errorSignUpPassword.style.margin = '10px 0';
    } else if(errorSignUpPassword.style.display = 'block' && passwordValue.length > 0) {
        errorSignUpPassword.style.display = 'none';
        passwordSignUp.style.marginBottom = '20px';
    } else {
        passwordSignUp.style.marginBottom = '20px';
    }
}