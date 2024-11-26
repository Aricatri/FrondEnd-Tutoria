import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';
import './SpecialityMenu.css'; // Importa el archivo CSS separado

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='speciality-container'>
            <h1 className='speciality-title'>Encuentra tu Especialidad</h1>
            <p className='speciality-description'>Explora nuestra lista de tutores expertos en diferentes materias y mejora tus habilidades de forma personalizada y eficiente.</p>
            <div className='speciality-grid'>
                {specialityData.map((item, index) => (
                    <Link
                        to={`/profesores/${item.speciality}`}
                        onClick={() => scrollTo(0, 0)}
                        className='speciality-item'
                        key={index}
                    >
                        <img className='speciality-image' src={item.image} alt={item.speciality} />
                        <p className='speciality-name'>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SpecialityMenu;
