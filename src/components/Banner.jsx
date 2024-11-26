import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'; // Asegúrate de que tus imágenes estén correctamente referenciadas
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="banner-container">
      {/* Lado Izquierdo - Texto */}
      <div className="banner-text">
        <div className="banner-title">
          <p>Encuentra a tu Tutor</p>
          <p className="banner-subtitle">
            Clases virtuales con 20+ Profesores Expertos y verificados por nuestros sistemas
          </p>
        </div>
        <button
          onClick={() => {
            navigate('/login');
            scrollTo(0, 0);
          }}
          className="banner-button"
        >
          Regístrate Ahora
        </button>
      </div>

      {/* Lado Derecho - Imagen */}
      <div className="banner-image-container">
        <img
          className="banner-image"
          src={assets.appointment_img }
          alt="Tutor 1 "
        />
      </div>
    </div>
  );
};

export default Banner;
