import React from 'react';
// import '../css/paginaPrincipal.css'
import escudoImg from './escudo.jpg';
import horarioImg from './HORARIOS.jpg';
import oipImg from './OIP.jpg';
import seguimientoImg from  './SEGUIMIENTO.jpg';

export const Inicio = (props) => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
             <img src={escudoImg} alt="Logo de la Universidad" />
          </div>
          <ul>
            <button onClick={() => props.onFormSwitch('inicio')}>Inicio</button>
            <button onClick={() => props.onFormSwitch('registro')}>Registro</button>
            <button onClick={() => props.onFormSwitch('login')}>Iniciar sesión</button>
          </ul>
        </nav>
      </header>

      <div className="hero">
        <div className="container">
          <h1>Bienvenido al Sistema de Control de Tutorías de Titulación</h1>
          <p>La plataforma que te ayudará a gestionar y optimizar el proceso de tutorías de titulación en la ULEAM.</p>
        </div>
      </div>
      
      <section className="about">
        <div className="container">
          <h2>Acerca de Nosotros</h2>
          <p>Nuestro sistema de control de tutorías de titulación está diseñado para facilitar la interacción entre estudiantes, tutores y administradores. Ofrecemos herramientas poderosas para la programación de tutorías, seguimiento de progreso y generación de horarios.</p>
        </div>
      </section>
      

      <section className="features">
        <h2>Características Principales</h2>
        
        <div className="feature">
          <div>
            <img src={oipImg} alt="Programación de tutorias" />
            <h3>Programación de Tutorías</h3>
            <p>Programa y gestiona las tutorías de titulación de manera eficiente y sencilla.</p>
            <button onClick={() => props.onFormSwitch('tutoria')}>ir</button>
          </div>
        </div>
        <div className="feature">
          <div>
            <img src={seguimientoImg} alt="Seguimiento de progreso" />
            <h3>Seguimiento de Progreso</h3>
            <p>Realiza un seguimiento detallado del progreso de los estudiantes y tutores.</p>
            <button onClick={() => props.onFormSwitch('seguimento')}>ir</button>
          </div>
        </div>
        <div className="feature">
          <div>
            <img src={horarioImg} alt="Horarios registrados" />
            <h3>Horarios</h3>
            <p>Gstiona tus horarios personalizados para las tutorías y reuniones académicas.</p>
            <button onClick={() => props.onFormSwitch('tutoriaRegistradas')}>ir</button>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2023 Sistema de Control de Tutorías de Titulación - ULEAM</p>
      </footer>
    </>
  );
}


