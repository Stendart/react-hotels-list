import React, {PureComponent} from 'react';

import HotelCard from "../HotelCard/HotelCard";
import './CardList.css'

class CardList extends PureComponent {

    changeHandler(e) {
        console.log('change star', e)
    }
    render() {
        return (
            <div>
                {
                    this.props.hotelsList.map((hotel) => {
                        return <HotelCard title={hotel.name}
                                          key={hotel.name}
                                          className='card-list__item'
                                          type={hotel.type}
                                          ratingChanged={this.changeHandler}
                                          reviews={hotel.reviews_amount}
                                          country={hotel.country}
                                          price={hotel.min_price}
                                          description={hotel.description}
                                          stars={hotel.stars}
                        />
                    })
                }

            </div>
        );
    }
}


export default CardList;