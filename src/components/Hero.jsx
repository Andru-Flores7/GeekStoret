import React from 'react';
import "../assets/css/Hero.css"; // Importa tu archivo CSS aquí


const Hero = () => {
    return (
      <section className="hero-section" id="inicio">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold text-secondary mb-4 pt-5">
                Transformamos tus ideas en realidad con sublimación
              </h1>
              <p className="lead text-muted mb-5">
                Desde 2021 creando productos personalizados de alta calidad. Deja que tu imaginación vuele y nosotros nos encargamos del resto.
              </p>
              <a href="#servicios" className="btn btn-primary btn-lg">
                Ver nuestros trabajos
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  