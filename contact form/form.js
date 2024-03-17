const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const button = document.getElementById('button');
const form = document.getElementById('form');
const confirmationBanner = document.getElementById('confirmation-banner');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (checkInputs()) {
        // If checkInputs returns true (indicating successful validation), submit the form
        displayConfirmation();
        logToConsole();
    }
});

function checkInputs() {
    let isValid = true;

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (nameValue === '') {
        setErrorFor(name, 'Name cannot be blank');
        isValid = false;
    } else {
        setSuccessFor(name);
    }

    if (messageValue === '') {
        setErrorFor(message, 'Message cannot be blank');
        isValid = false;
    } else {
        setSuccessFor(message);
    }

    return isValid;
}

function displayConfirmation() {
    // Display confirmation banner with user's first name
    const firstName = name.value.trim();
    confirmationBanner.innerText = `Thank you, ${firstName}! Your form has been submitted.`;
    confirmationBanner.style.display = 'block';
}

function logToConsole() {
    // Log input values to the console
    console.log('Name:', name.value.trim());
    console.log('Email:', email.value.trim());
    console.log('Message:', message.value.trim());
}
