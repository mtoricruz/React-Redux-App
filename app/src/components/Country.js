import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCountry } from '../actions/countryAction';

import './Country.css'

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
            <div className='app-title-container'>
                <div className='app-title-div'>
                    <h1>USA Covid-19 Info</h1>
                </div>
            </div>
            {isFetchingCountry && <h3>Fetching Data...</h3>}
            {/* list of stats */}
            {!isFetchingCountry && (
                <div>
                    <div className='new-cases'>
                        <h2>New Cases</h2>
                        <p>New Confirmed Cases: {NewConfirmed}</p>
                        <p>New Death Cases: {NewDeaths}</p>
                        <p>Newly Recovered Cases: {NewRecovered}</p>
                    </div>
                    <div className='total-cases'>
                        <h2>Total Cases</h2>
                        <p>Total Confirmed Cases: {TotalConfirmed}</p>
                        <p>Total Death Cases: {TotalDeaths}</p>
                        <p>Total Recovered Cases: {TotalRecovered}</p>
                    </div>
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