import React from 'react';
import PropTypes from 'prop-types';
import TeamModel from '../../Models/team';
import goalPost from '../../Assets/football-goal.png';

const Team = ({ onClick, team: TeamModel }) => {

}

Team.propTypes = {
    onClick: PropTypes.func.isRequired,
    team: TeamModel
}

export default Team