import React, { useState, useEffect } from 'react';
import '../css/seguimiento.css';

export const SistemaControlTutorias = (props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    nombre: '',
    matricula: '',
    tutor: '',
    comentarios: ''
  });

  const handleNextStep = (e) => {
    e.preventDefault();
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = (e) => {
    e.preventDefault();
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.matricula || !formData.tutor || !formData.comentarios) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    // Almacenar en localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    // Muestra una alerta cuando se envían los datos
    alert('Los datos fueron registrados');
    // Limpiar el formulario
    setFormData({
      nombre: '',
      matricula: '',
      tutor: '',
      comentarios: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'comentarios' && value.length > 20) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  useEffect(() => {
    // Mostrar datos almacenados en localStorage al cargar
    const storedData = JSON.parse(localStorage.getItem('formData'));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  return (
    <div className="container">
      <h1>Sistema de Control de Tutorías de Titulación</h1>
      <div className="progress-bar">
        <div className={`step ${currentStep === 0 ? 'active' : ''}`}>Paso 1</div>
        <div className={`step ${currentStep === 1 ? 'active' : ''}`}>Paso 2</div>
        <div className={`step ${currentStep === 2 ? 'active' : ''}`}>Paso 3</div>
      </div>
      <div className="content">
        <div id="paso-1" className={`step-content ${currentStep === 0 ? 'active' : ''}`}>
          <h2>Información del Estudiante</h2>
          <form id="form-paso-1" onSubmit={handleNextStep}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <br /><br />
            <label htmlFor="matricula">Matrícula:</label>
            <input
              type="text"
              id="matricula"
              name="matricula"
              value={formData.matricula}
              onChange={handleChange}
              required
            />
            <br /><br />
            <button type="submit" className="next-button">Siguiente</button>
          </form>
        </div>
        <div id="paso-2" className={`step-content ${currentStep === 1 ? 'active' : ''}`}>
          <h2>Selección del Tutor</h2>
          <form id="form-paso-2" onSubmit={handleNextStep}>
            <label htmlFor="tutor">Tutor:</label>
            <select
              id="tutor"
              name="tutor"
              value={formData.tutor}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione un tutor</option>
              <option value="tutor1">Tutor 1</option>
              <option value="tutor2">Tutor 2</option>
              <option value="tutor3">Tutor 3</option>
            </select><br /><br />

            <label htmlFor="comentarios">Comentarios:</label>
            <textarea
              id="comentarios"
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
              rows="4"
              cols="50"
              required
            ></textarea><br /><br />

            <button className="prev-button" onClick={handlePrevStep}>Anterior</button>
            <button type="submit" className="next-button">Siguiente</button>
          </form>
        </div>
        <div id="paso-3" className={`step-content ${currentStep === 2 ? 'active' : ''}`}>
          <h2>Resumen y Envío</h2>
          <form id="form-paso-3" onSubmit={handleSubmit}>
            <p>Nombre: <span>{formData.nombre}</span></p>
            <p>Matrícula: <span>{formData.matricula}</span></p>
            <p>Tutor: <span>{formData.tutor}</span></p>
            <p>Comentarios: <span>{formData.comentarios}</span></p>

            <button className="prev-button" onClick={handlePrevStep}>Anterior</button>
            <button type="submit" className="submit-button">Enviar Solicitud</button>
          </form>
        </div>
        <button onClick={() => props.onFormSwitch('inicio')}>Regresar a inicio</button>
        <button onClick={() => props.onFormSwitch('perfil')}>Regresar a perfil</button>
        <button onClick={() => props.onFormSwitch('seguimientoAlmacenado')}>Ver seguimientos registrados</button>
      </div>
    </div>
  );
};
