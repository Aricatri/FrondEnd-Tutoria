import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'
import './Professor.css' // Importa el archivo CSS externo

const Profesores = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(prof => prof.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div className="profesores-container">
      <p className='description'>Conoce a nuestros profesores totalmente verificados</p>
      <div className='filters-section'>
        <button onClick={() => setShowFilter(!showFilter)} className={`filter-button ${showFilter ? 'active-filter' : ''}`}>Ver filtros</button>
        <div className={`filter-options ${showFilter ? 'visible-filters' : ''}`}>
          <p onClick={() => speciality === 'Trigonometria' ? navigate('/profesores') : navigate('/profesores/Trigonometria')} className={`filter-item ${speciality === 'Trigonometria' ? 'active-item' : ''}`}>Trigonometria</p>
          <p onClick={() => speciality === 'Aritmetica' ? navigate('/profesores') : navigate('/profesores/Aritmetica')} className={`filter-item ${speciality === 'Aritmetica' ? 'active-item' : ''}`}>Aritmética</p>
          <p onClick={() => speciality === 'Lenguaje' ? navigate('/profesores') : navigate('/profesores/Lenguaje')} className={`filter-item ${speciality === 'Lenguaje' ? 'active-item' : ''}`}>Lenguaje</p>
          <p onClick={() => speciality === 'Algebra_geometria' ? navigate('/profesores') : navigate('/profesores/Algebra_geometria')} className={`filter-item ${speciality === 'Algebra_geometria' ? 'active-item' : ''}`}>Algebra & Geometria</p>
          <p onClick={() => speciality === 'Estadistica' ? navigate('/profesores') : navigate('/profesores/Estadistica')} className={`filter-item ${speciality === 'Estadistica' ? 'active-item' : ''}`}>Estadística</p>
          <p onClick={() => speciality === 'Fisica' ? navigate('/profesores') : navigate('/profesores/Fisica')} className={`filter-item ${speciality === 'Fisica' ? 'active-item' : ''}`}>Fisica</p>
        </div>
        <div className='professors-grid'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='professor-card' key={index}>
              <img className='professor-image' src={item.image} alt="" />
              <div className='professor-info'>
                <div className={`availability ${item.available ? 'available' : 'not-available'}`}>
                  <p className={`status-dot ${item.available ? 'available-dot' : 'not-available-dot'}`}></p>
                  <p>{item.available ? 'Available' : 'Not Available'}</p>
                </div>
                <p className='professor-name'>{item.name}</p>
                <p className='professor-speciality'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profesores
