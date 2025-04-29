import React from "react";

const Services = () => {
  const services = [
    {
      title: "Textiles",
      description: "Personalización de camisetas, buzos, gorras y más",
    },
    {
      title: "Tazas y Termos",
      description: "Diseños únicos en productos de uso diario",
    },
    {
      title: "Articulos Promocionales",
      description: "Merchandising corporativo y regalos personalizados",
    },
  ];
  return (
    <section className="section-padding bg-light" id="servicios">
      <div className="container pt-4 pb-4"> 
        <h2 className="  text-center fw-bold text-secondary mb-4">
          Nuestros Servicios
        </h2>
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.title} className="col-md-4">
              <div className="card h-100 shadow border-0">
                <div className="card-body">
                  <h3 className="card-title h5 text-primary">
                    {service.title}
                  </h3>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
