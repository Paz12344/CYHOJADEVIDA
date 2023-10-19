// Cambia la variable tutoriasRegistradas a un array vacío
let tutoriasRegistradas = [];

// Recupera los datos desde localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    const storedTutorias = JSON.parse(localStorage.getItem("tutoriasRegistradas"));
    if (storedTutorias) {
        tutoriasRegistradas = storedTutorias;
    }
});

document.getElementById("tutoria-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const hora = document.getElementById("hora").value;
    const tema = document.getElementById("tema").value;
    const tutor = document.getElementById("tutor").value;

    const tutoria = {
        nombre,
        email,
        telefono,
        hora, 
        tema,
        tutor
    };

    tutoriasRegistradas.push(tutoria);

    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("hora").value = "";
    document.getElementById("tema").value = "";
    document.getElementById("tutor").value = "";
    // Validación: Comprueba si los campos obligatorios están completos
    if (!nombre || !email || !telefono || !hora || !tema || !tutor) {
        mostrarMensaje("Por favor, complete todos los campos obligatorios.");
        return;
    }


    // Agregar un evento click al botón "Ver Tutorías Registradas"
    document.getElementById("ver-tutorias-button").addEventListener("click", function () {
        // Redirecciona a la segunda página
        window.location.href = "segunda_pagina.html";
    });

    // Guarda los datos en localStorage
    localStorage.setItem("tutoriasRegistradas", JSON.stringify(tutoriasRegistradas));

    // Limpiar la lista actual antes de mostrarla
    const listaTutorias = document.getElementById("lista-tutorias");
    listaTutorias.innerHTML = "";

    // Muestra las tutorías registradas
    tutoriasRegistradas.forEach((tutoria) => {
        const item = document.createElement("li");
        item.textContent = `Nombre: ${tutoria.nombre}, Correo Electrónico: ${tutoria.email}, Teléfono: ${tutoria.telefono}, Hora: ${tutoria.hora}, Tema: ${tutoria.tema}, Tutor: ${tutoria.tutor}`;
        listaTutorias.appendChild(item);
    });
});

// Agregar un evento click al botón "Ver Tutorías Registradas"
document.getElementById("ver-tutorias-button").addEventListener("click", function () {
    // Redirecciona a la segunda página
    window.location.href = "segunda_pagina.html";
});
