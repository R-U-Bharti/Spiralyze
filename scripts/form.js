function handleSubmit() {
    // event.preventDefault();

    // const form = event.target;

    const form = document.getElementById("contact-form")
    const inputFields = form.querySelectorAll('input, select');

    let isValid = true;

    for (let i = 0; i < inputFields.length; i++) {
        const field = inputFields[i];
        const errorMessage = field.getAttribute('data-error-message');
        const value = field.value.trim();

        if (!value) {
            isValid = false;

            const errorTooltip = document.createElement('span');
            errorTooltip.className = 'error-tooltip';
            errorTooltip.innerText = errorMessage;
            errorTooltip.style.display = 'block';

            const inputGroup = field.closest('.input-group');
            if (inputGroup) {
                inputGroup.classList.add('error-field')
                inputGroup.style.position = 'relative';
                inputGroup.appendChild(errorTooltip);
            }

            break;
        }
    }


    if (isValid)
        window.location.href = './thank-you.html';

}

function handleChange(event) {
    const field = event.target;
    const inputGroup = field.closest('.input-group');
    const errorTooltip = inputGroup.querySelector('.error-tooltip');

    if (field.value.trim() !== '') {
        if (errorTooltip) {
            errorTooltip.remove();
            inputGroup.classList.remove('error-field');
        }
    }
}

// Attach event listener to the form and input fields once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.onsubmit = handleSubmit;

    const inputFields = form.querySelectorAll('input, select');
    inputFields.forEach(field => {
        field.addEventListener('input', handleChange);
    });
});