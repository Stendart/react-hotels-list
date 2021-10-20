import {connect} from "react-redux";
import React, {PureComponent} from "react";

import './AppStars.css';
import CheckboxList from "../CheckboxList/CheckboxList";

import {changeStarsCount, changeStarsSelect} from "../../../store/actions/stars";

class AppStars extends PureComponent {

    countStarsLabelPrepare = () => {
        return this.props.stars.map((st) => {
            return {
                label: `${st.count} ${this.declOfNum(st.count, ['звезда', 'звезды', 'звезд'])}`,
                isChecked: st.isChecked
            }
        })
    }

    getStarsList = () => this.countStarsLabelPrepare();

    declOfNum = (number, words) => {
        return words[(number % 100 > 4 && number % 100 < 20)
            ? 2
            : [2, 0, 1, 1, 1, 2][(number % 10 < 5)
                ? Math.abs(number) % 10
                : 5]];
    }

    handleInputChange = (data, checkboxIndex) => {
        this.props.changeStarsSelect(data.target.checked, checkboxIndex)
    }

    render() {
        return (
            <div>
                <h3>Количество звезд</h3>
                <CheckboxList list={this.getStarsList()} handleInputChange={this.handleInputChange} />
            </div>

        );
    }
}

function mapStateToProps (state) {
    return {
        stars: state.stars.selectStar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeStarsCount: (starsCount) => dispatch(changeStarsCount(starsCount)),
        changeStarsSelect: (isStarSelect, starIndex) => dispatch(changeStarsSelect(isStarSelect, starIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppStars);
