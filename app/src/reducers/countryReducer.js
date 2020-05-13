import { FETCH_COUNTRIES_START } from '../actions/countryAction'

const initialState = {
    isFetchingCountry: false,
    countries: null,
    countryError: ''
}

export const countryReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COUNTRIES_START:
            return {
                ...state,
                isFetchingCountry: true
            };
        default:
            return state;
    };
};