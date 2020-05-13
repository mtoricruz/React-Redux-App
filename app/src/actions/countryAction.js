import axios from 'axios';

export const FETCH_COUNTRIES_START = 'FETCH_SPECIES_START';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_SPECIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_SPECIES_FAILURE';
export const fetchCountries = () => {
    // make an async request
    return dispatch => {
        dispatch({ type: FETCH_COUNTRIES_START });
        axios
          .get('https://api.covid19api.com/summary')
          .then(res => {
              console.log(res)
          })
          .catch(err => console.log(err));
    }
}

