import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem('token');
    setToken(false);
    navigate('/login');
  };

  return (
    <div className="navbar-container">
      <img onClick={() => navigate('/')} className="navbar-logo" src={assets.aula} alt="Logo" />
      <ul className="navbar-links">
        <NavLink to="/"><li>INICIO</li><hr /></NavLink>
        <NavLink to="/profesores"><li>VER PROFESORES</li><hr /></NavLink>
        <NavLink to="/about"><li>BUSCANOS</li><hr /></NavLink>
        <NavLink to="/contact"><li>PRESENCIAL?</li><hr /></NavLink>
      </ul>

      <div className="navbar-user">
        {token && userData ? (
          <div className="navbar-dropdown">
            <img src={userData.image} alt="User" />
            <img src={assets.dropdown_icon} alt="Dropdown" />
            <div className="navbar-dropdown-menu">
              <p onClick={() => navigate('/my-profile')}>Mi perfil</p>
              <p onClick={() => navigate('/my-appointments')}>Mis reservas</p>
              <p onClick={logout}>Salir</p>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className="navbar-button">Registrarse</button>
        )}
        <img onClick={() => setShowMenu(true)} className="navbar-mobile" src={assets.menu_icon} alt="Menu" />
      </div>

      {/* Menú Mobile */}
      <div className={`navbar-mobile-menu ${showMenu ? 'open' : ''}`}>
        <div className="navbar-mobile-header">
          <img src={assets.aula} alt="Logo" />
          <img onClick={() => setShowMenu(false)} className="close-icon" src={assets.cross_icon} alt="Cerrar" />
        </div>
        <ul className="navbar-mobile-links">
          <NavLink onClick={() => setShowMenu(false)} to="/">INICIO</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/profesores">VER PROFESORES</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/about">NOSOTROS</NavLink>
          <NavLink onClick={() => setShowMenu(false)} to="/contact">SEDES</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
