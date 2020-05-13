import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCountry } from '../actions/countryAction'

const Country = ({
    isFetchingCountry,
    NewConfirmed,
    NewDeaths,
    NewRecovered,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
    fetchCountry
}) => {
    useEffect(() => {
        fetchCountry();
    }, [fetchCountry]);

    return (
        <main>
            <h1>USA Covid-19 Info</h1>
            {isFetchingCountry && <h3>Fetching Data...</h3>}
            {/* list of stats */}
            {!isFetchingCountry && (
                <div>
                    <p>New Confirmed Cases: {NewConfirmed}</p>
                    <p>New Death Cases: {NewDeaths}</p>
                    <p>Newly Recovered Cases: {NewRecovered}</p>
                    <p>Total Confirmed Cases: {TotalConfirmed}</p>
                    <p>Total Death Cases: {TotalDeaths}</p>
                    <p>Total Recovered Cases: {TotalRecovered}</p>
                </div>
            )}
        </main>
    );
}



const mapStateToProps = state => {
    console.log({ state });
    return {
        isFetchingCountry: state.isFetchingCountry,
        NewConfirmed: state.NewConfirmed,
        NewDeaths: state.NewDeaths,
        NewRecovered: state.NewRecovered,
        TotalConfirmed: state.TotalConfirmed,
        TotalDeaths: state.TotalDeaths,
        TotalRecovered: state.TotalRecovered,
        countryError: ''
    }
}

export default connect(
    mapStateToProps,
    { fetchCountry }
)(Country)