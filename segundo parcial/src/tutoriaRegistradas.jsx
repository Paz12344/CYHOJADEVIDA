import React, { useState, useEffect } from 'react';

export const TutoriaRegistradas = (props) => {
  const [tutoriasRegistradas, setTutoriasRegistradas] = useState([]);

  useEffect(() => {
    const storedTutorias = JSON.parse(localStorage.getItem('tutoriasRegistradas')) || [];
    setTutoriasRegistradas(storedTutorias);
  }, []);

  const borrarTutoriaPorIndice = (indice) => {
    if (window.confirm('¿Estás seguro de que deseas borrar esta tutoría?')) {
      const updatedTutorias = tutoriasRegistradas.filter((tutoria, index) => index !== indice);
      setTutoriasRegistradas(updatedTutorias);
      localStorage.setItem('tutoriasRegistradas', JSON.stringify(updatedTutorias));
    }
  };

  return (
    <main className='containers'>
      <div id="tutorias-registradas">
        <h2>Tutorías Registradas</h2>
        <ul id="lista-tutorias">
          {tutoriasRegistradas.map((tutoria, index) => (
            <li key={index}>
              Tutoría#: {index + 1}, Nombre: {tutoria.nombre}, Correo Electrónico: {tutoria.email}, Teléfono: {tutoria.telefono}, Hora: {tutoria.hora}, Tema: {tutoria.tema}, Tutor: {tutoria.tutor}, Fecha: {tutoria.fecha}
              <button onClick={() => borrarTutoriaPorIndice(index)}>Borrar</button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => props.onFormSwitch('tutoria')}>Regresar a Tutoria</button>
      <button onClick={() => props.onFormSwitch('perfil')}>Regresar a perfil</button>
    </main>
  );
};

