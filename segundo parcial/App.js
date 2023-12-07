import React, { useState } from 'react';
import './App.css';
import { Inicio } from './pages/paginaPrincipal';
import { RegistroUsuario } from './pages/registro';
import { IniciarSesion } from './pages/login';
import { Perfil } from './pages/perfil';
import { TutoriaPersonalizada } from './pages/tutoriaUsuario';
import { TutoriaRegistradas } from './pages/tutoriaRegistradas';
import { SistemaControlTutorias } from './pages/seguimiento';
import { SeguimientosAlmacenados } from './pages/seguimientoRegistrados';
import { AdminGestion } from './pages/adminGestion';
import { AdminLogin } from './pages/administrador';

function App() {
  //raiz
  const [currentForm, setCurrentForm] = useState('inicio');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const components = {
    inicio: <Inicio onFormSwitch={toggleForm} />,
    registro: <RegistroUsuario onFormSwitch={toggleForm} />,
    login: <IniciarSesion onFormSwitch={toggleForm} />,
    perfil: <Perfil onFormSwitch={toggleForm} />,
    tutoria: <TutoriaPersonalizada onFormSwitch={toggleForm} />,
    tutoriaRegistradas: <TutoriaRegistradas onFormSwitch={toggleForm} />,
    seguimiento: <SistemaControlTutorias onFormSwitch={toggleForm} />,
    seguimientoAlmacenado: <SeguimientosAlmacenados onFormSwitch={toggleForm} />,
    adminLogin: <AdminLogin onFormSwitch={toggleForm} />,
    adminGestion: <AdminGestion onFormSwitch={toggleForm} />,
  };

  const CurrentComponent = components[currentForm];

  return (
    <div className="App">
      {CurrentComponent}
    </div>
  );
}

export default App;
