import React, { useState } from 'react';

export const IniciarSesion = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (!storedUserData) {
      setErrorMessage('No hay usuarios registrados.');
      return;
    }

    if (email !== storedUserData.email || password !== storedUserData.password) {
      setErrorMessage('Credenciales incorrectas.');
      return;
    }

    // Inicio de sesión exitoso
    // Redirigir a la página del perfil (puedes usar history.push('/perfil') si estás usando React Router)
    window.open(props.onFormSwitch('perfil'));
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={() => props.onFormSwitch('adminLogin')}>Iniciar sesión como administrador</button>
        <button onClick={() => props.onFormSwitch('registro')}>¿No tienes cuenta? Registrate</button>
        <button onClick={() => props.onFormSwitch('inicio')}>Regresar a inicio</button>
      </div>
    </div>
  );
};


