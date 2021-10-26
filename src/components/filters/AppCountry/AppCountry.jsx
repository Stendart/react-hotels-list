import React, {PureComponent} from "react";
import './AppCountry.css';
import AppInput from "../InputSearch/AppInput";
import CheckboxList from "../CheckboxList/CheckboxList";
import {connect} from "react-redux";
import {addCountryToList, changeSelectCountry} from "../../../store/actions/country";

class AppCountry extends PureComponent {

    state = {
        searchString: ''
    }

    handleCheckboxChange = (element, index ) => {
        this.props.toggleSelectCountry(element.target.checked, index)
    }

    prepareCountryList = () => {
        const countryList = this.props.countryList.map(country => {
            const {name: label, ...other} = country
            return {
                label,
                ...other
            }
        })
        return countryList;
    }

    getCountryList = () => {
        const countryList = this.prepareCountryList()
        if(this.state.searchString.length) {
            return countryList.filter((country) => country.label.toUpperCase().includes(this.state.searchString.toUpperCase()))
        }
        return countryList
    }

    handleInput = (input) => {
        this.setState({searchString: input.target.value})
    }

    render() {
        return (
            <div>
                <h3>Страна</h3>

                <AppInput handleInput={this.handleInput} placeholder='Поиск стран' />
                <CheckboxList list={this.getCountryList()} handleInputChange={this.handleCheckboxChange} />
            </div>

        );
    }

}

function mapStateToProps(state) {
    return {
        countryList: state.country.countryList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCountry: (country) => {
            dispatch(addCountryToList(country))
        },
        toggleSelectCountry: (isSelectCountry, countryIndex) => {
            dispatch(changeSelectCountry(isSelectCountry, countryIndex))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppCountry);
