import React, {PureComponent} from 'react';
import {connect} from "react-redux";

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import PriceInput from './PriceInput/PriceInput'
import {changeMaxPrice, changeMinPrice} from "../../../store/actions/price";
import './AppPrice.css'


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class AppPrice extends PureComponent {

    state = {
        rangeTipProps: {
            placement: 'top',
            prefixCls: 'rc-slider-tooltip',
        }
    }

    tipFormatter = (value) => {
        return value
    }

    handleChangeRange = (val) => {
        this.props.changeMinPrice(val[0])
        this.props.changeMaxPrice(val[1])
    }

    inputHandler = (val, type) => {
        switch (type) {
            case 'min': this.props.changeMinPrice(+val.target.value)
                return;
            case 'max': this.props.changeMaxPrice(+val.target.value)
                return;
            default:
                return;
        }
    }

    render() {
        return (
            <div className='app-price'>
                <h3>Цена</h3>
                <div className='app-price__input-wrap'>
                    <PriceInput className='app-price__input'
                                value={this.props.minPrice}
                                placeholder={this.props.minPrice} inputHandler={(el) => this.inputHandler(el, 'min')} /> -
                    <PriceInput className='app-price__input'
                                value={this.props.maxPrice}
                                placeholder={this.props.maxPrice} inputHandler={(el) => this.inputHandler(el, 'max')} />
                </div>
                <Range tipProps={this.state.rangeTipProps}
                       className='app-price__range'
                       min={this.props.min}
                       max={this.props.max}
                       value={[this.props.minPrice, this.props.maxPrice]}
                       defaultValue={this.props.defaultValue}
                       onChange={this.handleChangeRange}  />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        minPrice: state.price.minPrice,
        maxPrice: state.price.maxPrice
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        changeMinPrice: (minPrice) => dispatch(changeMinPrice(minPrice)),
        changeMaxPrice: (maxPrice) => dispatch(changeMaxPrice(maxPrice))
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(AppPrice);