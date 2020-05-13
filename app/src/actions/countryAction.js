import axios from 'axios';

export const FETCH_COUNTRIES_START = 'FETCH_SPECIES_START';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_SPECIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_SPECIES_FAILURE';
export const fetchCountry = () => {
    // make an async request
    return dispatch => {
        dispatch({ type: FETCH_COUNTRIES_START });
        axios
          .get('https://api.covid19api.com/summary')
          .then(res => {
            //   console.log(res.data.Countries[176])
            dispatch({ type: FETCH_COUNTRIES_SUCCESS, payload: res.data.Countries[176]})
          })
          .catch(err => console.log(err));
    }
}

