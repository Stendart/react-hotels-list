import logo from './logo.svg';
import './App.css';
import React, {PureComponent} from "react";


// import {useState, useEffect} from "react";
import {useSelector, connect} from "react-redux";


import CardList from "./components/displayField/CardList/CardList";
import AppCountry from "./components/filters/AppCountry/AppCountry";
import AppType from "./components/filters/AppType/AppType";
import AppStars from "./components/filters/AppStars/AppStars";

import hotel from "./assets/hotels.json"

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hotelList: hotel.hotels
        }
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

    filterData = () => {
        const {country, stars, types} = this.props;
        const selectedCountryList = this.transformDataToNameArray(country.countryList, 'isChecked')
        const selectedTypeList = this.transformDataToNameArray(types.typeList, 'isChecked')
        const selectedStarList = this.transformDataToNameArray(stars.selectStar, 'isChecked')

        const filteredByCountry =  this.filterDataByParam(this.state.hotelList, selectedCountryList, 'country');
        const filteredByType =  this.filterDataByParam(filteredByCountry, selectedTypeList, 'type');
        const filteredByStars =  this.filterDataByParam(filteredByType, selectedStarList, 'stars');

        return filteredByStars;
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
                    </section>
                    <section className='Hotel-list'>
                        <CardList hotelsList={this.filterData()} />
                    </section>
                </main>
            </div>
        );
    }


}

const mapSTateToProps = (state) => {
    return {
        country: state.country,
        stars: state.stars,
        types: state.types
    }

}

export default connect(mapSTateToProps)(App);
