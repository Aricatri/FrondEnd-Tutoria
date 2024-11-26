import React from 'react'
import { assets } from '../assets/assets'
import './Header.css'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>

<div class="header-container">
            <div class="header-left">
                <h1>Descubre y Reserva <br /> Tu Curso Ideal</h1>
                <div class="header-description">
                <img className='w-28' src={assets.group_profiles} alt="grupo de estudiantes" />
                <p>
                    Explora nuestra extensa lista de cursos impartidos por <br />
                    expertos y mejora tus habilidades sin complicaciones.
                </p>
                </div>
                <a href="#speciality" class="header-button">
                Ver Cursos
                <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            <div class="header-right">
                <img src={assets.header_class} alt="Cursos disponibles" />
            </div>
            </div>

        </div>
    )
}

export default Header
