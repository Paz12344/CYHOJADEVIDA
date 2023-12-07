import React, { useState } from 'react';

export const RegistroUsuario = (props) => {
  const [message] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const nombreUsuario = form.nombreUsuario.value;
    const apellido = form.apellido.value;
    const celular = form.celular.value;
    const nombre = form.nombre.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form['confirm-password'].value;
    const carrera = form.carrera.value;

    if (!nombre || !email || !password || !confirmPassword || !carrera || !apellido || !celular || !nombreUsuario) {
      showAlert('Por favor, complete todos los campos.');
      return;
    }

    if (password.length < 6) {
      showAlert('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      showAlert('Las contraseñas no coinciden.');
      return;
    }
    if (celular.length !== 10) {
      showAlert('El número de celular debe tener 10 dígitos.');
      return;
    }
    // Validación de nombre y apellido con letras, espacios y vocales con acento
  const nombreApellidoFormat = /^[a-zA-ZÁáÉéÍíÓóÚúÜü\s]+$/;
  if (!nombreApellidoFormat.test(nombre) || !nombreApellidoFormat.test(apellido)) {
    showAlert('El nombre y el apellido solo pueden contener letras, espacios y vocales con acento.');
    return;
  }
  // Validación de nombre de usuario máximo de 10 caracteres
  if (nombreUsuario.length > 20) {
    showAlert('El nombre de usuario debe tener como máximo 20 caracteres.');
    return;
  }
  if (carrera.length > 200) {
    showAlert('El nombre de la carrera debe tener como máximo 10 caracteres.');
    return;
  }
    // Simular una validación de formato de correo electrónico
    const emailFormat = /\S+@\S+\.\S+/;
    if (!emailFormat.test(email)) {
      showAlert('Ingrese un correo electrónico válido.');
      return;
    }

    // Almacenar los datos en el localStorage
    // Almacenar los datos en el localStorage
    const userData = {
      nombreUsuario,
      nombre,
      apellido,
      celular,
      email,
      password,
      carrera,
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    showAlert('Registro exitoso. Su cuenta ha sido creada.');
    clearForm(form);
  };

  const showAlert = (message) => {
    alert(message);
  };

  const clearForm = (form) => {
    form.reset();
  };

  

  return (
    <div className="container">
      <div className="form-container">
        <h1>Registro de Usuario</h1>
        <form id="registro-form" onSubmit={handleSubmit}>
          <input type="text" id="nombreUsuario" placeholder="Nombre de Usuario" required />
          <input type="text" id="nombre" placeholder="Nombre" required />
          <input type="text" id="apellido" placeholder="Apellido" required />
          <input type="number" id="celular" placeholder="Celular" required />
          <input type="email" id="email" placeholder="Correo Electrónico" required />
          <input type="password" id="password" placeholder="Contraseña" required />
          <input type="password" id="confirm-password" placeholder="Confirmar Contraseña" required />
          <input type="text" id="carrera" placeholder="Carrera" required />
          <button type="submit">Registrarse</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>¿Ya tienes cuenta? Inicia sesión</button>
      </div>
      {message && <div id="message">{message}</div>}
    </div>
  );
};
