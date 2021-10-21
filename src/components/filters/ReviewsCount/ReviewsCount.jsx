import React, {PureComponent} from 'react';
import {connect} from "react-redux";

import AppInput from "../InputSearch/AppInput";
import './ReviewsCount.css'
import {changeReviewsCount} from "../../../store/actions/reviews";

class ReviewsCount extends PureComponent {

    inputHandler = ({target}) => {
        console.log(target.value)
    }

    render() {
        return (
            <div>
                <h3 className='reviews-count'>Количество отзывов (от)</h3>
                <AppInput handleInput={this.inputHandler} placeholder='Например, от 10' />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeReviewsCount: (reviewsCount) => {
            dispatch(changeReviewsCount(reviewsCount))
        }
    }
}

export default connect(null, mapDispatchToProps)(ReviewsCount);