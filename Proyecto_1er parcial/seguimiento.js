document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll('.step');
    const stepContents = document.querySelectorAll('.step-content');
    const formElements = document.querySelectorAll('form');
    const nextButtons = document.querySelectorAll('.next-button');
    const submitButton = document.querySelector('.submit-button');

    // Almacena los datos del Paso 1 y Paso 2
    const formData = {};

    let currentStep = 0;

    nextButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (validateForm(formElements[currentStep])) {
                stepContents[currentStep].classList.remove('active');
                steps[currentStep].classList.remove('active');
                currentStep = index + 1;
                stepContents[currentStep].classList.add('active');
                steps[currentStep].classList.add('active');

                if (currentStep === 3) {
                    // Mostrar los datos en el Paso 3
                    document.getElementById('resumen-nombre').textContent = formData.nombre || '';
                    document.getElementById('resumen-matricula').textContent = formData.matricula || '';
                    document.getElementById('resumen-tutor').textContent = formData.tutor || '';
                    document.getElementById('resumen-comentarios').textContent = formData.comentarios || '';
                }
            }
        });
    });

    function validateForm(form) {
        // Implementa la lógica de validación de campos aquí
        const inputFields = form.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;

        for (let i = 0; i < inputFields.length; i++) {
            if (inputFields[i].value.trim() === '') {
                alert('Por favor, completa todos los campos obligatorios.');
                isValid = false;
            }

            // Almacena los datos en la estructura formData
            formData[inputFields[i].name] = inputFields[i].value;
        }

        return isValid;
    }
});



