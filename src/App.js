import './App.css';
import React, {PureComponent} from "react";

import {connect} from "react-redux";

import CardList from "./components/displayField/CardList/CardList";
import AppCountry from "./components/filters/AppCountry/AppCountry";
import AppType from "./components/filters/AppType/AppType";
import AppStars from "./components/filters/AppStars/AppStars";
import ReviewsCount from "./components/filters/ReviewsCount/ReviewsCount";
import AppPrice from "./components/filters/AppPrice/AppPrice";
import AppPagination from "./components/displayField/AppPagination/AppPagination";

import {setHotelList} from "./store/actions/hotels";

import hotel from "./assets/hotels.json"
import {resetSelectCountry} from "./store/actions/country";
import {resetStarsSelect} from "./store/actions/stars";
import {resetSelectType} from "./store/actions/types";
import {resetReviewsCount} from "./store/actions/reviews";
import {resetPrice} from "./store/actions/price";

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hotelList: hotel.hotels,
            pageSize: 3,
            currentPage: 1
        }
    }

    componentDidMount() {
        this.props.setHotelList(this.state.hotelList)
        setTimeout(() => {
            this.filterData();
        }, 0)
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

    filterDataByCount = (hotelList, param, minCount) => {
        return hotelList.filter((hotel) => hotel[param] >= minCount );
    }

    filterDataByRange = (hotelList, param, minCount, maxCount) => {
        return hotelList.filter((hotel) => hotel[param] >= minCount && hotel[param] <= maxCount);
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
        const filterByPriceRange = this.filterDataByRange(filterByReviewsCount, 'min_price', price.minPrice, price.maxPrice);

        this.setState({hotelList: filterByPriceRange})
    }

    applyFilters = () => {
        this.filterData();
    }

    resetFilters = () => {
        this.props.resetSelectCountry();
        this.props.resetStarSelect();
        this.props.resetSelectType();
        this.props.resetReviewsCount();
        this.props.resetPrice();

        this.applyFilters();
    }

    pagination = () => {
        const start = this.state.pageSize * (this.state.currentPage - 1);
        const end = Math.min(this.state.pageSize * this.state.currentPage, this.state.hotelList.length);
        return this.state.hotelList.slice(start, end);
    }

    countPage = () =>  Math.ceil(this.state.hotelList.length / this.state.pageSize)

    handlePaginationPrevClick = () => {
        if (this.state.currentPage > 1) {
            this.setState({currentPage: this.state.currentPage - 1})
        }
    }

    handlePaginationNextClick = () => {
        if (this.state.currentPage < this.countPage()){
            this.setState({currentPage: this.state.currentPage + 1})
        }
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
                        <CardList className='Hotel-list__card-list' hotelsList={this.pagination()} />
                        <AppPagination
                            className='App__pagination'
                            value={this.state.currentPage}
                            countPage={this.countPage()}
                            prevClick={this.handlePaginationPrevClick}
                            nextClick={this.handlePaginationNextClick}
                        />
                    </section>
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
        country: state.country,
        stars: state.stars,
        types: state.types,
        review: state.review,
        price: state.price,
        hotels: state.hotels
    })

const mapDispatchToProp = (dispatch) => ({
        setHotelList: (hotelList) => dispatch(setHotelList(hotelList)),
        resetSelectCountry: () => dispatch(resetSelectCountry()),
        resetStarSelect: () => dispatch(resetStarsSelect()),
        resetSelectType: () => dispatch(resetSelectType()),
        resetReviewsCount: () => dispatch(resetReviewsCount()),
        resetPrice: () => dispatch(resetPrice())
})

export default connect(mapStateToProps, mapDispatchToProp)(App);
