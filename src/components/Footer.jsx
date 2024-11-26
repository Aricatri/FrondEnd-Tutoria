import React from 'react'
import { assets } from '../assets/assets'
import './Footer.css';


const Footer = () => {
  return (
      <div class="footer-container">
        <div class="footer-content">
        <div class="footer-section">
          <img class="footer-logo" src={assets.logotipe } alt="Logo Profesores Virtuales" />
            <p class="footer-description">
              Encuentra a los mejores profesores virtuales para clases interactivas y personalizadas. Aprende a tu propio ritmo con expertos calificados en diversas áreas del conocimiento.
            </p>
        </div>

    <div class="footer-section">
      <p class="footer-title">SOBRE NOSOTROS </p>
      <ul class="footer-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre Nosotros</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Política de Privacidad</a></li>
      </ul>
    </div>

    <div class="footer-section">
      <p class="footer-title">CONTÁCTANOS</p>
      <ul class="footer-contact">
        <li>(+51) 945 832 354</li>
        <li>aricatri@gmal.com</li>
      </ul>
    </div>
  </div>

  <div class="footer-bottom">
    <hr />
    <p class="footer-copyright">
      Copyright 2024 @ Aula20's.com - Todos los Derechos Reservados.
    </p>
  </div>
</div>


  )
}

export default Footer
