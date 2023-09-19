document.addEventListener("DOMContentLoaded", function () {
    // Recupera los datos desde localStorage y muestra los clientes
    const storedClientes = JSON.parse(localStorage.getItem("clientesRegistrados"));
    if (storedClientes) {
        clientesRegistrados = storedClientes;
    }

    // Muestra los clientes registrados al cargar la página
    mostrarClientes();

    // Agregar evento click al botón de borrar cliente
    document.getElementById("borrar-cliente-button").addEventListener("click", function () {
        borrarCliente();
    });
});

function mostrarClientes() {
    const listaClientes = document.getElementById("lista-clientes");
    listaClientes.innerHTML = "";

    // Muestra los clientes registrados
    clientesRegistrados.forEach((cliente, indice) => {
        const item = document.createElement("li");
        item.textContent = `Cliente#: ${indice + 1}, Nombre: ${cliente.nombre}, Correo Electronico: ${cliente.email}, Telefono: ${cliente.telefono}`;

        // Agrega un botón de borrado junto a cada cliente
        const botonBorrar = document.createElement("button");
        botonBorrar.textContent = "Borrar";
        botonBorrar.addEventListener("click", function () {
            borrarClientePorIndice(indice);
        });

        item.appendChild(botonBorrar);
        listaClientes.appendChild(item);
    });
}

function borrarClientePorIndice(indice) {
    if (confirm("¿Estas seguro de que deseas borrar este cliente?")) {
        clientesRegistrados.splice(indice, 1); // Borra el cliente del array
        localStorage.setItem("clientesRegistrados", JSON.stringify(clientesRegistrados)); // Actualiza los datos en localStorage
        mostrarClientes(); // Vuelve a mostrar la lista de clientes actualizada
    }
}

function borrarCliente() {
    // Aquí puedes implementar lógica para borrar un cliente específico.
    // Puedes pedir un identificador o utilizar cualquier criterio para identificar al cliente que se va a borrar.
    // Luego, usa un método similar a borrarClientePorIndice para eliminar el cliente del array.
    // Recuerda actualizar los datos en localStorage y volver a mostrar la lista actualizada.
}


