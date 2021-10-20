import React from 'react';
import ReactStars from 'react-stars'

import './HotelCard.css'

function HotelCard(props) {
    return (
        <div className={'hotel-card ' + props.className}>
            <div className='hotel-card__info'>
                <h3 className='hotel-card__title'>{props.title}</h3>
                <div className='hotel-card__rating'>
                    <ReactStars className='hotel-card__rating-item'
                        count={5}
                        onChange={props.ratingChanged}
                        size={24}
                        color2={'#ffd700'}
                        value={props.stars}
                    />
                    <span className='hotel-card__rating-item'>{props.type}</span>
                    <span className='hotel-card__rating-item'>{props.reviews}</span>
                    <span className='hotel-card__rating-item'>{props.country}</span>
                </div>
                <p>{props.description}</p>
            </div>

            <div className='hotel-card__booking'>
                <div className='hotel-card__price'>
                    <div>{props.price}</div>
                    <div>Цена за 1 ночь</div>
                </div>
                <button className='hotel-card__button'>Забронировать</button>
            </div>
        </div>
    );
}


export default HotelCard;