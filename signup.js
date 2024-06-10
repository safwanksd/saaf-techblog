function validateFullName() {
    let fullnameError = document.getElementById('fullname-error');
    let fullname = document.getElementById('fullname');
    let fullnameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+){0,2}$/;

    if (fullname.value.trim() == '') {
        fullnameError.innerHTML = 'Full name cannot be blank';
        return false;
    } else if (!fullnameRegex.test(fullname.value)) {
        fullnameError.innerHTML = 'Full name must be up to 20 characters long, can contain letters and spaces, and should not start with a space.';
        return false;
    } else {
        fullnameError.innerHTML = '';
        return true;
    }
}

function validateName() {
    let nameError = document.getElementById('username-error');
    let name = document.getElementById('username');

    if (name.value.trim() == '') {
        nameError.innerHTML = 'Username cannot be blank';
        return false;
    } else if (name.value.length < 5) {
        nameError.innerHTML = 'Username must not be less than 5 characters';
        return false;
    } else {
        nameError.innerHTML = '';
        return true;
    }
}

function validateEmail() {
    let email = document.getElementById('email');
    let emailError = document.getElementById('email-error');
    let regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.value.trim() == '') {
        emailError.innerHTML = 'Email ID cannot be blank!!';
        return false;
    } else if (!email.value.match(regEx)) {
        emailError.innerHTML = 'Email ID not in correct format!!';
        return false;
    } else {
        emailError.innerHTML = '';
        return true;
    }
}

function validatePassword() {
    let password = document.getElementById('password');
    let passwordError = document.getElementById('password-error');

    if (password.value.trim() == '') {
        passwordError.innerHTML = 'Password cannot be blank';
        return false;
    } else if (password.value.length < 6 || password.value.length > 20) {
        passwordError.innerHTML = 'Password length cannot be less than 6 or greater than 20 characters';
        return false;
    } else {
        passwordError.innerHTML = '';
        return true;
    }
}

function validateRepeat() {
    let password = document.getElementById('password');
    let repeat = document.getElementById('repeat');
    let repeatError = document.getElementById('repeat-error');

    if (repeat.value.trim() == '') {
        repeatError.innerHTML = 'Repeat password cannot be blank';
        return false;
    } else if (password.value != repeat.value) {
        repeatError.innerHTML = 'Passwords do not match';
        return false;
    } else {
        repeatError.innerHTML = '';
        return true;
    }
}

function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    let submitError = document.getElementById('submit-error');
    if (!validateFullName() || !validateName() || !validateEmail() || !validatePassword() || !validateRepeat()) {
        submitError.innerHTML = 'Please resolve the errors before submitting';
        return false;
    } else {
        submitError.innerHTML = '';
        alert('Signup successful!');
        return true; 
    }
}
