import React from "react";
import "../assets/css/Header.css";
import Logo from "../assets/images/geek.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="conteiner-header">
        <div className="conteiner-logo">
          <img src={Logo} alt="geekstoreLogo" />

          <div className="conteiner-h1">
            <h1>GeekStore</h1>
          </div>
        </div>

        <div className="conteiner-search">
          <ul>
            <li className="inicio">
              <a href="#inicio ">Inicio</a>
            </li>
            <li className="porque-elegirnos">
              <a a href=" #servicios ">Servicios</a>
            </li>
            <li className="contacto">
              <a a href=" #contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="conteiner-menu-hamburguesa">
      
          <button
            className="btn "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom"
            aria-controls="offcanvasBottom"
          >
            {" "}
            <i className="bi bi-list"></i>
          </button>

          <div
            className="offcanvas offcanvas-bottom"
            // tabindex="-1"
            id="offcanvasBottom"
            aria-labelledby="offcanvasBottomLabel"
          >
            <div className="offcanvas-header">
              <ul>
                <li>
                  <a href=" #inicio" className="offcanvas-title" id="offcanvasBottomLabel">
                    Inicio
                  </a>
                </li>

                <li>
                  <a  href=" #servicios" className="offcanvas-title" id="offcanvasBottomLabel">
                    Servicios
                  </a>
                </li>

                <li>
                  <a href=" #contacto" className="offcanvas-title" id="offcanvasBottomLabel">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
