import React from 'react';
import { assets } from '../assets/assets';
import './Contact.css';

const Contact = () => {
  return (
    <div className='background1'>
      {/* Título principal */}
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>
          BUSCANOS!! <span className='text-gray-700 font-semibold'>
            AHORA TUTORÍAS VIRTUALES Y PRESENCIALES EN NUESTRAS 6 SEDES EN LIMA
          </span>
        </p>
      </div>

      {/* Contenido principal */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        {/* Imagen */}
        <img className='w-full md:max-w-[360px]' src={assets.ubicacion} alt="Ubicacion" />

        {/* Información de contacto */}
        <div className='flex flex-col justify-center items-start gap-6'>
          {/* Subtítulo */}
          <p className='font-semibold text-lg text-gray-600'>Nuestras sede principal</p>
          {/* Dirección */}
          <p className='text-gray-500'>
            Miraflores Los rosales 204 <br /> Lima , Perú
          </p>
          {/* Contacto */}
          <p className='text-gray-500'>
            Tel: (+51) 945 832 354  <br /> Email: aricatri@gmail.com
          </p>

          {/* Nueva sección: Beneficios */}
          <p className='font-semibold text-lg text-gray-600'>¿Por qué elegirnos?</p>
          <p className='text-gray-500'>
            Conecta con expertos en educación desde casa o en nuestras academias.
            Educación personalizada adaptada a tus necesidades.
          </p>

          {/* Llamado a la acción */}
          <p className='font-semibold text-lg text-gray-600'>Encuentra tu sede</p>
          <p className='text-gray-500'>
            Descubre dónde estamos y empieza tu experiencia de aprendizaje hoy mismo.
          </p>
          {/* Botón */}
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Descubre nuestras sedes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
