import React, { useState, useEffect } from 'react';

export const SeguimientosAlmacenados = (props) => {
  const [storedData, setStoredData] = useState(null);

  useEffect(() => {
    // Obtener datos almacenados del Local Storage al cargar
    const data = JSON.parse(localStorage.getItem('formData'));
    if (data) {
      setStoredData(data);
    }
  }, []);

  const handleClearData = () => {
    // Limpiar datos almacenados y estado local
    localStorage.removeItem('formData');
    setStoredData(null);
  };

  return (
    <div>
      <h2>Datos Almacenados</h2>
      {storedData ? (
        <div>
          <p>Nombre: {storedData.nombre}</p>
          <p>Matrícula: {storedData.matricula}</p>
          <p>Tutor: {storedData.tutor}</p>
          <p>Comentarios: {storedData.comentarios}</p>
          <button onClick={handleClearData}>Borrar Datos</button>
        </div>
      ) : (
        <p>No hay datos almacenados.</p>
      )}

<button onClick={() => props.onFormSwitch('perfil')}>Regresar a perfil</button>
<button onClick={() => props.onFormSwitch('seguimientos')}>Regresar a seguimentos</button>
    </div>
    
  );
};


