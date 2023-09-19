// Cambia la variable clientesRegistrados a un array vacío
let clientesRegistrados = [];

// Recupera los datos desde localStorage al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    const storedClientes = JSON.parse(localStorage.getItem("clientesRegistrados"));
    if (storedClientes) {
        clientesRegistrados = storedClientes;
    }
});

document.getElementById("cliente-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    const cliente = {
        nombre,
        email,
        telefono
    };

    clientesRegistrados.push(cliente);

    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefono").value = "";

    // Agregar un evento click al botón "Ver Clientes Registrados"
    document.getElementById("ver-clientes-button").addEventListener("click", function () {
    // Redirecciona a la segunda página
    window.location.href = "segunda_pagina.html";
});

    // Guarda los datos en localStorage
    localStorage.setItem("clientesRegistrados", JSON.stringify(clientesRegistrados));

    // Limpiar la lista actual antes de mostrarla
    const listaClientes = document.getElementById("lista-clientes");
    listaClientes.innerHTML = "";

    // Muestra los clientes registrados
    clientesRegistrados.forEach((cliente) => {
        const item = document.createElement("li");
        item.textContent = `Nombre: ${cliente.nombre}, Correo Electrónico: ${cliente.email}, Teléfono: ${cliente.telefono}`;
        listaClientes.appendChild(item);
    });
});



// Agregar un evento click al botón "Ver Clientes Registrados"
document.getElementById("ver-clientes-button").addEventListener("click", function () {
    // Redirecciona a la segunda página
    window.location.href = "segunda_pagina.html";
});