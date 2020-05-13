const initialState = {
    isFetchingCountry: false,
    countries: null,
    countryError: ''
}

export const countryReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    };
};