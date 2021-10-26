import './App.css';
import React, {PureComponent} from "react";

import {connect} from "react-redux";

import CardList from "./components/displayField/CardList/CardList";
import AppCountry from "./components/filters/AppCountry/AppCountry";
import AppType from "./components/filters/AppType/AppType";
import AppStars from "./components/filters/AppStars/AppStars";
import ReviewsCount from "./components/filters/ReviewsCount/ReviewsCount";
import AppPrice from "./components/filters/AppPrice/AppPrice";

import {setHotelList} from "./store/actions/hotels";

import hotel from "./assets/hotels.json"
import {resetSelectCountry} from "./store/actions/country";

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hotelList: hotel.hotels
        }
    }

    componentDidMount() {
        this.props.setHotelList(this.state.hotelList)
    }

    transformDataToNameArray = (dataArray, isFieldValue) => {
        return dataArray.reduce((acc, item) => {
            if(item[isFieldValue]) {
                acc.push(item.name || item.count)
            }
            return acc
        }, [])
    }

    filterDataByParam = (hotelList, checkedItemList, param) => {
        return hotelList.filter((hotel) => checkedItemList.includes(hotel[param]))
    }

    filterDataByCount = (hotelList, param, minCount, maxCount) => {
        if(!maxCount)
            return hotelList.filter((hotel) => hotel[param] >= minCount );
        if(typeof maxCount === 'number') {
            return hotelList.filter((hotel) => hotel[param] >= minCount && hotel[param] <= maxCount);
        }
    }

    filterData = () => {
        const {country, stars, types, review, price, hotels} = this.props;

        const selectedCountryList = this.transformDataToNameArray(country.countryList, 'isChecked')
        const selectedTypeList = this.transformDataToNameArray(types.typeList, 'isChecked')
        const selectedStarList = this.transformDataToNameArray(stars.selectStar, 'isChecked')

        const filteredByCountry =  this.filterDataByParam(hotels.hotelList, selectedCountryList, 'country');
        const filteredByType =  this.filterDataByParam(filteredByCountry, selectedTypeList, 'type');
        const filteredByStars =  this.filterDataByParam(filteredByType, selectedStarList, 'stars');
        const filterByReviewsCount = this.filterDataByCount(filteredByStars, 'reviews_amount', review.reviewsCount);
        const filterByPriceRange = this.filterDataByCount(filterByReviewsCount, 'min_price', price.minPrice, price.maxPrice)

        this.setState({hotelList: filterByPriceRange})
    }

    applyFilters = () => {
        this.filterData();
    }

    resetFilters = () => {
        console.log('====')
        this.props.resetSelectCountry();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Learn React
                </header>
                <main className='Main'>
                    <section className='Filters'>
                        <AppCountry />
                        <AppType />
                        <AppStars />
                        <ReviewsCount />
                        <AppPrice min={5} max={100500} defaultValue={[10, 90000]} />
                        <button className='Filters__button Filters__button--apply' onClick={this.applyFilters}>
                            Применить фильтр
                        </button>
                        <button className='Filters__button Filters__button--refresh' onClick={this.resetFilters}>
                            Сбросить фильтр
                        </button>
                    </section>
                    <section className='Hotel-list'>
                        <CardList hotelsList={this.state.hotelList} />
                    </section>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        country: state.country,
        stars: state.stars,
        types: state.types,
        review: state.review,
        price: state.price,
        hotels: state.hotels
    }
};
    const mapDispatchToProp = (dispatch) => {
        return {
            setHotelList: (hotelList) => dispatch(setHotelList(hotelList)),
            resetSelectCountry: () => dispatch(resetSelectCountry())
        }
    }

export default connect(mapStateToProps, mapDispatchToProp)(App);
