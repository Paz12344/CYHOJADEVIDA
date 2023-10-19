document.getElementById("registro-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!nombre || !email || !password || !confirmPassword) {
        showMessage("Por favor, complete todos los campos.");
        return;
    }

    if (password.length < 6) {
        showMessage("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    if (password !== confirmPassword) {
        showMessage("Las contraseñas no coinciden.");
        return;
    }

    // Simulación de registro en el servidor (debes implementar la lógica real)
    // Aquí puedes guardar los datos en una base de datos, por ejemplo.

    showMessage("Registro exitoso. Su cuenta ha sido creada.");
    clearForm("registro-form");
});

function showMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.innerText = message;
    messageElement.classList.remove("hidden");
    setTimeout(function () {
        messageElement.classList.add("hidden");
    }, 3000);
}

function clearForm(formId) {
    document.getElementById(formId).reset();
}



