import { FETCH_COUNTRIES_START, FETCH_COUNTRIES_SUCCESS } from '../actions/countryAction'

const initialState = {
    isFetchingCountry: false,
    NewConfirmed: null,
    NewDeaths: null,
    NewRecovered: null,
    TotalConfirmed: null,
    TotalDeaths: null,
    TotalRecovered: null,
    countryError: ''
}

export const countryReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COUNTRIES_START:
            return {
                ...state,
                isFetchingCountry: true
            };
        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                isFetchingCountry: false,
                NewConfirmed: action.payload.NewConfirmed,
                NewDeaths: action.payload.NewDeaths,
                NewRecovered: action.payload.NewRecovered,
                TotalConfirmed: action.payload.TotalConfirmed,
                TotalDeaths: action.payload.TotalDeaths,
                TotalRecovered: action.payload.TotalRecovered,
            }
        default:
            return state;
    };
};