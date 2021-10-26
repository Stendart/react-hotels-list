import {combineReducers} from "redux";

import countryReducer from "./countryReducer";
import starsReducer from "./starsReducer";
import typeReducer from "./typeReducer";
import reviewsReducer from "./reviewsReducer";
import priceReducer from "./priceReducer";
import hotelsReducer from "./hotelsReducer";

export default combineReducers({
    country: countryReducer,
    stars: starsReducer,
    types: typeReducer,
    review: reviewsReducer,
    price: priceReducer,
    hotels: hotelsReducer
})