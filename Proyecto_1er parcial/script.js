
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fecha = form.querySelector("#fecha").value;
        const hora = form.querySelector("#hora").value;
        const tutor = form.querySelector("#tutor").value;
        const tema = form.querySelector("#tema").value;

        // Usar una variable para rastrear la validación
        let isValid = true;

        // Validación simple: campos no pueden estar vacíos
        if (!fecha) {
            alert("El campo Fecha es obligatorio.");
            isValid = false;
        }

        if (!hora) {
            alert("El campo Hora es obligatorio.");
            isValid = false;
        }

        if (!tutor) {
            alert("El campo Tutor es obligatorio.");
            isValid = false;
        }

        if (!tema) {
            alert("El campo Tema es obligatorio.");
            isValid = false;
           
        }

        // Si todos los campos son válidos, enviar los datos al servidor
        if (isValid) {
            alert("Formulario válido. Datos enviados al servidor.");
            form.reset(); // Limpia el formulario
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const tutoriaForm = document.querySelector("form");
    const verHorarioButton = document.getElementById("ver-horario");

    verHorarioButton.addEventListener("click", function() {
        const fecha = tutoriaForm.querySelector("#fecha").value;
        const hora = tutoriaForm.querySelector("#hora").value;
        const tutor = tutoriaForm.querySelector("#tutor").value;
        const tema = tutoriaForm.querySelector("#tema").value;

        // Construye la URL con los datos como parámetros
        const url = `Generacion%20de%20tutoria.html?fecha=${fecha}&hora=${hora}&tutor=${tutor}&tema=${tema}`;

        // Redirige a la nueva página
        window.location.href = url;
    });
});
