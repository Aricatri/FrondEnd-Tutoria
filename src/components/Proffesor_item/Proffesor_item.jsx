import React, { useContext, useState } from 'react'
import './Professor-item.css'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const Proffesor_item = ({ image, name, price, desc , id }) => {

    const [itemCount, setItemCount] = useState(0);

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt="" />

            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                   <p>{id}</p>
                    <p>{name}</p>
                    <p className="food-item-price"> ${price}</p>
                </div>
                <p className="food-item-desc">{desc}</p>
                <div className='hotel-item-name-review'>
                    <img src={assets.cuatroestrellas} alt="" />
                    <a className='button_reseñas' href="#">Reseñas</a>
                </div>
            </div>
        </div>
    )
}

export default FoodItem
