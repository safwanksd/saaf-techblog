function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.trim() === '') {
        emailError.innerHTML = 'Email cannot be blank';
        return false;
    } else if (!email.match(regEx)) {
        emailError.innerHTML = 'Email is not in correct format';
        return false;
    } else {
        emailError.innerHTML = '';
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('password-error');

    if (password.trim() === '') {
        passwordError.innerHTML = 'Password cannot be blank';
        return false;
    } else if (password.length < 6 || password.length > 20) {
        passwordError.innerHTML = 'Password must be between 6 and 20 characters';
        return false;
    } else {
        passwordError.innerHTML = '';
        return true;
    }
}

function validateLoginForm() {
    const submitError = document.getElementById('submit-error');

    if (!validateEmail() || !validatePassword()) {
        submitError.innerHTML = 'Please resolve the errors';
        return false;
    } else {
        submitError.innerHTML = '';
        alert('Form submitted successfully!');
        return true;
    }
}
