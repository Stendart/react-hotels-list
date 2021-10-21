import {combineReducers} from "redux";

import countryReducer from "./countryReducer";
import starsReducer from "./starsReducer";
import typeReducer from "./typeReducer";
import reviewsReducer from "./reviewsReducer";

export default combineReducers({
    country: countryReducer,
    stars: starsReducer,
    types: typeReducer,
    review: reviewsReducer
})