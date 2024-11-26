import React from 'react'
import { assets } from '../assets/assets'
import './About.css'

const About = () => {
  return (
    <div className="about-container">

      <div className="section-title">
        <p>SOBRE <span className="highlight-text">NOSOTROS</span></p>
      </div>

      <div className="about-content">
        <img className="about-image" src={assets.about_image} alt="Sobre nosotros" />
        <div className="about-text">
          <p>Bienvenido a <b>Aula 20's</b>, tu socio de confianza para gestionar tus necesidades educativas de manera sencilla y eficiente. En <b>Aula 20's</b>, entendemos los desafíos a los que se enfrentan estudiantes y padres al buscar y programar clases con docentes especializados.</p>
          <p>Nos comprometemos con la excelencia en la tecnología educativa. Trabajamos continuamente para mejorar nuestra plataforma, integrando los últimos avances tecnológicos para ofrecerte una experiencia de usuario superior. Ya sea que estés reservando tu primera clase o gestionando sesiones continuas, <b>ReserváDocente</b> está aquí para apoyarte en cada paso del camino.</p>
          <b className="text-dark">Nuestra Visión</b>
          <p>En <b>ReserváDocente</b>, nuestra visión es crear una experiencia educativa fluida para cada usuario. Nuestro objetivo es cerrar la brecha entre estudiantes y docentes, facilitando el acceso a la enseñanza que necesitas, cuando la necesitas.</p>
        </div>
      </div>

      <div className="why-choose-us-title">
        <p>¿POR QUÉ <span className="highlight-text">ELEGIRNOS?</span></p>
      </div>

      <div className="why-choose-us">
        <div className="why-option">
          <b>EFICIENCIA:</b>
          <p>Agenda clases fácilmente, adaptándose a tu horario.</p>
        </div>
        <div className="why-option">
          <b>COMODIDAD:</b>
          <p>Acceso a una red de docentes confiables y especializados en tu área.</p>
        </div>
        <div className="why-option">
          <b>PERSONALIZACIÓN:</b>
          <p>Recomendaciones y recordatorios adaptados para ayudarte a alcanzar tus metas académicas.</p>
        </div>
      </div>

    </div>
  )
}

export default About
