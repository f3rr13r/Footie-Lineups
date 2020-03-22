import React from 'react';
import PropTypes from 'prop-types';
import FixtureModel from '../../Models/fixture';

const Fixture = ({ onClick, fixture: FixtureModel }) => {
    <div className="fixture">
        {/* we will put team here */}
    </div>
}

Fixture.propTypes = {
    onClick: PropTypes.func.isRequired,
    fixture: FixtureModel
}

export default Fixture