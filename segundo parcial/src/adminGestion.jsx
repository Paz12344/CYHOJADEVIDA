import React, { useState, useEffect } from 'react';

export const AdminGestion = (props) => {
  const [tutoriasRegistradas, setTutoriasRegistradas] = useState([]);
  const [datosRegistrados, setDatosRegistrados] = useState([]);

  useEffect(() => {
    const storedTutorias = JSON.parse(localStorage.getItem('tutoriasRegistradas')) || [];
    setTutoriasRegistradas(storedTutorias);

    const storedDatos = JSON.parse(localStorage.getItem('datosRegistrados')) || [];
    setDatosRegistrados(storedDatos);
  }, []);

  const borrarTutoriaPorIndice = (indice) => {
    if (window.confirm('¿Estás seguro de que deseas borrar esta tutoría?')) {
      const updatedTutorias = tutoriasRegistradas.filter((tutoria, index) => index !== indice);
      setTutoriasRegistradas(updatedTutorias);
      localStorage.setItem('tutoriasRegistradas', JSON.stringify(updatedTutorias));
    }
  };

  const borrarDatoPorIndice = (indice) => {
    if (window.confirm('¿Estás seguro de que deseas borrar este registro?')) {
      const updatedDatos = datosRegistrados.filter((dato, index) => index !== indice);
      setDatosRegistrados(updatedDatos);
      localStorage.setItem('datosRegistrados', JSON.stringify(updatedDatos));
    }
  };

  const aceptarRegistro = (tipo) => {
    if (storedData) {
      if (tipo === 'tutoria') {
        const registrosTutorias = JSON.parse(localStorage.getItem('tutoriasRegistradas')) || [];
        const updatedTutorias = [...registrosTutorias, storedData];
        setTutoriasRegistradas(updatedTutorias);
        localStorage.setItem('tutoriasRegistradas', JSON.stringify(updatedTutorias));
      } else if (tipo === 'dato') {
        const registrosDatos = JSON.parse(localStorage.getItem('datosRegistrados')) || [];
        const updatedDatos = [...registrosDatos, storedData];
        setDatosRegistrados(updatedDatos);
        localStorage.setItem('datosRegistrados', JSON.stringify(updatedDatos));
      }

      // Limpiar datos almacenados de la sesión actual
      localStorage.removeItem('formData');
      setStoredData(null);
    }
  };

  const [storedData, setStoredData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('formData'));
    if (data) {
      setStoredData(data);
    }
  }, []);

  const handleClearData = () => {
    localStorage.removeItem('formData');
    setStoredData(null);
  };

  return (
    <div>
      <h2>Seguimientos solicitados</h2>
      {storedData ? (
        <div>
          <p>Nombre: {storedData.nombre}</p>
          <p>Matrícula: {storedData.matricula}</p>
          <p>Tutor: {storedData.tutor}</p>
          <p>Comentarios: {storedData.comentarios}</p>
          <button onClick={handleClearData}>Borrar Datos</button>
          <button onClick={() => aceptarRegistro('dato')}>Aceptar Registro Datos</button>
          {/* <button onClick={() => aceptarRegistro('tutoria')}>Aceptar Registro Tutoría</button> */}
        </div>
      ) : (
        <p>No hay datos almacenados.</p>
      )}

      <div id="tutorias-registradas">
        <h2>Tutorías de usuarios Registradas</h2>
        <ul id="lista-tutorias">
          {tutoriasRegistradas.map((tutoria, index) => (
            <li key={index}>
              Tutoría#: {index + 1}, Nombre: {tutoria.nombre}, Correo Electrónico: {tutoria.email}, Teléfono: {tutoria.telefono}, Hora: {tutoria.hora}, Tema: {tutoria.tema}, Tutor: {tutoria.tutor}, Fecha: {tutoria.fecha}
              <button onClick={() => borrarTutoriaPorIndice(index)}>Borrar</button>
            </li>
          ))}
        </ul>
      </div>

      <div id="datos-registrados">
        <h2>Seguimientos aceptados</h2>
        <ul id="lista-datos">
          {datosRegistrados.map((dato, index) => (
            <li key={index}>
              Nombre: {dato.nombre}, Matrícula: {dato.matricula}, Tutor: {dato.tutor}, Comentarios: {dato.comentarios}
              <button onClick={() => borrarDatoPorIndice(index)}>Borrar</button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => props.onFormSwitch('adminLogin')}>Salir</button>
    </div>
  );
};
