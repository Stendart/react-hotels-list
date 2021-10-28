import React, {PureComponent} from 'react';
import {connect} from "react-redux";

import AppInput from "../InputSearch/AppInput";
import './ReviewsCount.css'
import {changeReviewsCount} from "../../../store/actions/reviews";

class ReviewsCount extends PureComponent {

    inputHandler = ({target}) => {
        this.props.changeReviewsCount(+target.value)
    }

    render() {
        return (
            <div>
                <h3 className='reviews-count'>Количество отзывов (от)</h3>
                <AppInput handleInput={this.inputHandler} type="number" value={this.props.reviewsCount.reviewsCount} placeholder='Например, от 10' />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reviewsCount: state.review
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeReviewsCount: (reviewsCount) => {
            dispatch(changeReviewsCount(reviewsCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsCount);