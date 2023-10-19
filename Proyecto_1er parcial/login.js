document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        showMessage("Por favor, complete todos los campos.");
        return;
    }

    // Validar las credenciales (simulación, debes implementar la lógica real)
    if (email === "usuario@example.com" && password === "contraseña123") {
        showMessage("¡Bienvenido! Has iniciado sesión con éxito.");
        clearForm("login-form");
    } else {
        showMessage("Las credenciales son incorrectas. Por favor, inténtalo de nuevo.");
    }
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
