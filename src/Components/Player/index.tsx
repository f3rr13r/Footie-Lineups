import React from 'react';
import PropTypes from 'prop-types';
import PlayerModel from '../../Models/player';
import footballPlayer from '../../Assets/soccer-player.png';

const Player = ({ onClick, player: PlayerModel }) => {
    <button onClick={onClick}>
        <img src={footballPlayer} alt="player icon"/>
    </button>
}

Player.propTypes = {
    onClick: PropTypes.func.isRequired,
    player: PlayerModel
}

export default Player