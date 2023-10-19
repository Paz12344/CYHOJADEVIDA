document.addEventListener("DOMContentLoaded", function () {
    // Recupera los datos desde localStorage y muestra las tutorías
    const storedTutorias = JSON.parse(localStorage.getItem("tutoriasRegistradas"));
    if (storedTutorias) {
        tutoriasRegistradas = storedTutorias;
    }

    // Muestra las tutorías registradas al cargar la página
    mostrarTutorias();

    // Agregar evento click al botón de borrar tutoría
    document.getElementById("borrar-tutoria-button").addEventListener("click", function () {
        borrarTutoria();
    });
});

function mostrarTutorias() {
    const listaTutorias = document.getElementById("lista-tutorias");
    listaTutorias.innerHTML = "";

    // Muestra las tutorías registradas
    tutoriasRegistradas.forEach((tutoria, indice) => {
        const item = document.createElement("li");
        item.textContent = `Tutoría#: ${indice + 1}, Nombre: ${tutoria.nombre}, Correo Electrónico: ${tutoria.email}, Teléfono: ${tutoria.telefono}, Hora: ${tutoria.hora}, Tema: ${tutoria.tema}, Tutor: ${tutoria.tutor}`;

        // Agrega un botón de borrado junto a cada tutoría
        const botonBorrar = document.createElement("button");
        botonBorrar.textContent = "Borrar";
        botonBorrar.addEventListener("click", function () {
            borrarTutoriaPorIndice(indice);
        });

        item.appendChild(botonBorrar);
        listaTutorias.appendChild(item);
    });
}

function borrarTutoriaPorIndice(indice) {
    if (confirm("¿Estás seguro de que deseas borrar esta tutoría?")) {
        tutoriasRegistradas.splice(indice, 1); // Borra la tutoría del array
        localStorage.setItem("tutoriasRegistradas", JSON.stringify(tutoriasRegistradas)); // Actualiza los datos en localStorage
        mostrarTutorias(); // Vuelve a mostrar la lista de tutorías actualizada
    }
}

function borrarTutoria() {
    // Aquí puedes implementar la lógica para borrar una tutoría específica.
    // Puedes pedir un identificador o utilizar cualquier criterio para identificar la tutoría que se va a borrar.
    // Luego, utiliza un método similar a borrarTutoriaPorIndice para eliminar la tutoría del array.
    // Recuerda actualizar los datos en localStorage y volver a mostrar la lista actualizada.
}

