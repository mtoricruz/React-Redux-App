import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCountries } from '../actions/countryAction'

const Country = ({
    fetchCountries
}) => {
    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    return (
        <main>
            <h1>Country</h1>
            
            {/* list of countries */}
        </main>
    );
}



const mapStateToProps = state => {
    console.log({ state });
    return {
        state
    }
}

export default connect(
    mapStateToProps,
    { fetchCountries }
)(Country)