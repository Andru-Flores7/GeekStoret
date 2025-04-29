import React from 'react'
import "../assets/css/Footer.css"; // Importa tu archivo CSS aquí
const Footer = () => {
  return (
    <footer className=" text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h3 className="h5 fw-bold mb-3"> GeekStore</h3>
            <p className="text-white-50">
              Transformando ideas en realidad desde 2021. Especialistas en sublimación de alta calidad.
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="h5 fw-bold mb-3">Contacto</h3>
            <div>
              <div className="d-flex align-items-center mb-2">
                <i className="bi bi-telephone me-2"></i>
                <span>+5493885203201</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-envelope me-2"></i>
                <span>GeekStore@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className="h5 fw-bold mb-3">Síguenos</h3>
            <div className="d-flex gap-3">
              <a href="www.facebook.com" className="text-white fs-5 hover-opacity">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="www.instagram.com" className="text-white fs-5 hover-opacity">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-top border-light mt-4 pt-4 text-center text-white-50">
          <p>&copy; GeekStore Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer