import React from 'react';

import { connect } from 'react-redux';

const Country = props => {
    return (
        <h2>Country</h2>
    )
}

const mapStateToProps = state => {
    console.log({ state });
    return {
        state
    }
}

export default connect(
    mapStateToProps,
    {}
)(Country)