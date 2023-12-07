import React, { useState, useEffect } from 'react';

export const TutoriaPersonalizada = (props) => {
  const [tutoriasRegistradas, setTutoriasRegistradas] = useState([]);

  useEffect(() => {
    const storedTutorias = JSON.parse(localStorage.getItem('tutoriasRegistradas')) || [];
    setTutoriasRegistradas(storedTutorias);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const nombre = event.target.nombre.value;
    const email = event.target.email.value;
    const telefono = event.target.telefono.value;
    const hora = event.target.hora.value;
    const tema = event.target.tema.value;
    const tutor = event.target.tutor.value;
    const fecha = event.target.fecha.value;

    // Validación de formato de correo electrónico
    const emailFormat = /\S+@\S+\.\S+/;
    if (!emailFormat.test(email)) {
      alert('Ingrese un correo electrónico válido.');
      return;
    }

    // Validación de número de teléfono (opcional)
    const telefonoFormat = /^\d{10}$/;
    if (!telefonoFormat.test(telefono)) {
      alert('Ingrese un número de teléfono válido de 10 dígitos.');
      return;
    }

    // Validación de letras, espacios y vocales con acentos para nombre, tutor y tema
    const letrasAcentosEspacios = /^[a-zA-ZÁáÉéÍíÓóÚúÜü\s]+$/;
    if (!letrasAcentosEspacios.test(nombre) || !letrasAcentosEspacios.test(tutor) || !letrasAcentosEspacios.test(tema)) {
      alert('Nombre, tutor y tema solo pueden contener letras, espacios y vocales con acento.');
      return;
    }

    // Validación de longitud máxima
    if (nombre.length > 20 || tutor.length > 20 || tema.length > 20) {
      alert('Nombre, tutor y tema deben tener como máximo 20 caracteres.');
      return;
    }

    if (!nombre || !email || !telefono || !hora || !tema || !tutor || !fecha) {
      alert('Por favor, complete todos los campos obligatorios.');
      return;
    }

    const tutoria = { nombre, email, telefono, hora, tema, tutor, fecha };
    const updatedTutorias = [...tutoriasRegistradas, tutoria];

    setTutoriasRegistradas(updatedTutorias);

    localStorage.setItem('tutoriasRegistradas', JSON.stringify(updatedTutorias));
    event.target.reset();

    alert('Registro exitoso. Se ha guardado la tutoría.');
  };

  return (
    <main>
      <div className='container'> 
        <div id="registro-tutoria">
          <h2>Registro de Tutoría</h2>
          <form id="tutoria-form" onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" required />

            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" required />

            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" required />

            <label htmlFor="hora">Hora:</label>
            <input type="time" id="hora" required />
            <label htmlFor="fecha">Fecha:</label>
            <input type="date" id="fecha" required />

            <label htmlFor="tema">Tema:</label>
            <input type="text" id="tema" required />

            <label htmlFor="tutor">Tutor:</label>
            <input type="text" id="tutor" required />

            <input type="submit" value="Guardar" />
          </form>
        </div>

        {/* Lista de tutorías registradas
        <ul id="lista-tutorias">
          {tutoriasRegistradas.map((tutoria, index) => (
            <li key={index}>
              Nombre: {tutoria.nombre}, Correo Electrónico: {tutoria.email}, Teléfono: {tutoria.telefono}, Hora: {tutoria.hora}, Tema: {tutoria.tema}, Tutor: {tutoria.tutor}
            </li>
          ))}
        </ul> */}
        <button onClick={() => props.onFormSwitch('perfil')}>Regresar a perfil</button>
        <button onClick={() => props.onFormSwitch('tutoriaRegistradas')}>Ver tutorias registradas</button>
      </div>
    </main>
  );
};
