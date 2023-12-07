import React, { useEffect, useState } from 'react';

export const Perfil = (props) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Obtener datos del usuario desde el localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  return (
    <div className="container">
      <div className="profile-container">
        <h1>Perfil de Usuario</h1>
        {userData ? (
          <div className="user-details">
            <p><strong>Nombre de usuario:</strong> {userData.nombreUsuario}</p>
            <p><strong>Correo Electrónico:</strong> {userData.email}</p>
            <p><strong>Celular:</strong> {userData.celular}</p>
            <p><strong>Nombre:</strong> {userData.nombre}</p>
            <p><strong>Apellido:</strong> {userData.apellido}</p>
            <p><strong>Carrera:</strong> {userData.carrera}</p>
            {/* Puedes mostrar más detalles del usuario aquí */}
          </div>
        ) : (
          <p>No hay datos de usuario disponibles.</p>
        )}
        <button onClick={() => props.onFormSwitch('login')}>Cerrar sesión</button>
      <button onClick={() => props.onFormSwitch('tutoria')}>Registrar tutoria</button>
      <button onClick={() => props.onFormSwitch('seguimiento')}>Registrar seguimiento</button>
      </div>
      
    </div>
  );
};

