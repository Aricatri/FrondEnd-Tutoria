import React, { useContext } from 'react'
import './ProfessorDisplay.css'
import { AppContext } from '../../context/AppContext'

const ProfessorDisplayDefaulf = ({ category }) => {
  const { autoProfessors } = useContext(AppContext);

  if (!autoProfessors || autoProfessors.length === 0) {
    return <p>No hay profesores disponibles.</p>;
  }

  return (
    <div className='food-display' id='food-display'>
      <h2>La mejor experiencia para tu viaje te está esperando!</h2>
      <div className='food-display-list'>
        {autoProfessors.map((item) => {
          if (category === "All" || category === item.food_category) {
            return (
              <Proffesor_item
                key={item.food_id}
                image={item.food_image}
                name={item.food_name}
                price={item.food_price}
                desc={item.food_desc}
                id={item.food_id}
              />
            );
          }
          return null; // Asegúrate de devolver algo si no cumple la condición
        })}
      </div>
    </div>

  );

};


export default ProfessorDisplayDefaulf
