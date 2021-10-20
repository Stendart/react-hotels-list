import {combineReducers} from "redux";

import countryReducer from "./countryReducer";
import starsReducer from "./starsReducer";
import typeReducer from "./typeReducer";

export default combineReducers({
    country: countryReducer,
    stars: starsReducer,
    types: typeReducer
})