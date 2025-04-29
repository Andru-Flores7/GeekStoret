import { useState } from "react";
import React from "react";
import "../assets/css/Contact.css"; // Importa tu archivo CSS aquí
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const whatsappNumber = "5493885203201"; // Cambia esto por el número real

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setIsError(true);
      setToastMessage("Por favor completa todos los campos");
      setShowToast(true);
      
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
      
      return;
    }

    const whatsappMessage = `*Nuevo contacto desde web*%0A%0A*Nombre:* ${name}%0A*Email:* ${email}%0A%0A*Mensaje:*%0A${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    setIsError(false);
    setToastMessage("¡Mensaje enviado! Serás redirigido a WhatsApp para completar tu mensaje");
    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
    
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="section-padding bg-gradient pt-5" id="contacto">
      <div className="container ">
        <h2 className="text-center fw-bold text-secondary mb-5">
          ¿Listo para hacer realidad tu proyecto?
        </h2>
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="mb-5">
              <h3 className="h4 fw-bold mb-4">Información de contacto</h3>
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-telephone text-primary"></i>
                  </div>
                  <div>
                    <p className="fw-medium mb-0">Llámanos</p>
                    <p className="text-muted mb-0">3884636451</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-envelope text-primary"></i>
                  </div>
                  <div>
                  <p className=" mb-0">Escribenos</p>
                    <p className="text-muted mb-0">geekstore@gmial.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-geo-alt text-primary"></i>
                  </div>
                  <div>
                    <p className=" mb-0">Visítanos</p>
                    <p className="text-muted mb-0">Humahuaca, Argentina</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                    <i className="bi bi-whatsapp text-primary"></i>
                  </div>
                  <div>
                    <p className="fw-medium mb-0">WhatsApp</p>
                    <p className="text-muted mb-0">3883316784</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="h4 fw-bold mb-4">¿Por qué elegirnos?</h3>
              <p className="text-muted mb-4">
                Nos especializamos en crear productos personalizados de alta calidad. 
                Con más de 2 años de experiencia, garantizamos resultados excepcionales 
                y un servicio al cliente sobresaliente.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <span className="bg-success rounded-circle d-inline-block me-2" style={{ width: '8px', height: '8px' }}></span>
                  <span className="text-muted">Materiales de primera calidad</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <span className="bg-success rounded-circle d-inline-block me-2" style={{ width: '8px', height: '8px' }}></span>
                  <span className="text-muted">Diseños únicos y personalizados</span>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <span className="bg-success rounded-circle d-inline-block me-2" style={{ width: '8px', height: '8px' }}></span>
                  <span className="text-muted">Entrega rápida y puntual</span>
                </li>
                <li className="d-flex align-items-center">
                  <span className="bg-success rounded-circle d-inline-block me-2" style={{ width: '8px', height: '8px' }}></span>
                  <span className="text-muted">Atención al cliente 24/7</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card shadow border-0">
              <div className="card-body p-4 p-lg-5">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre completo</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">¿Qué proyecto tienes en mente?</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      rows="5"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                  >
                    <i className="bi bi-whatsapp"></i>
                    Enviar por WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast notification */}
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <div className={`toast ${showToast ? 'show' : ''} ${isError ? 'bg-danger text-white' : 'bg-success text-white'}`} role="alert" aria-live="assertive" aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">
              {toastMessage}
            </div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setShowToast(false)} aria-label="Close"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
