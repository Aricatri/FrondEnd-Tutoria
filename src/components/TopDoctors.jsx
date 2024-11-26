import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import './TopDoctors.css'; // Importa el archivo CSS

const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);

    return (
        <div className="container">
            <h1 className="title">Top Profesores registrados</h1>
            <p className="subtitle">Todos nuestros profesores </p>
            <div className="doctors-grid">
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                        onClick={() => {
                            navigate(`/appointment/${item._id}`);
                            scrollTo(0, 0);
                        }}
                        className={`doctor-card ${item.available ? 'available' : 'not-available'}`}
                        key={index}
                    >
                        <img className="doctor-image" src={item.image} alt="" />
                        <div className="doctor-info">
                            <div className={`availability ${item.available ? 'available' : 'not-available'}`}>
                                <p className="status-indicator"></p>
                                <p>{item.available ? 'Available' : 'Not Available'}</p>
                            </div>
                            <p className="doctor-name">{item.name}</p>
                            <p className="doctor-speciality">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={() => {
                    navigate('/profesores');
                    scrollTo(0, 0);
                }}
                className="more-button"
            >
                more
            </button>
        </div>
    );
};

export default TopDoctors;
