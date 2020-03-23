import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {getPlayerDetail} from '../../Actions/GetPlayerDetail';
import PlayerDetailModel from '../../Models/playerInfo';

import closeIcon from '../../Assets/close-icon.png';

import './PlayerTab.scss';

type ContentProps = {
    onClick: (id: string) => void,
    homeTeam: boolean;
    player: PlayerDetailModel
}

class PlayerTabView extends PureComponent<ContentProps, {}> {
    render() {
        const { player, homeTeam, onClick } = this.props;
        return (
            <div className={`player-tab ${homeTeam && homeTeam == true ? 'player-tab__home' : 'player-tab__away'} ${player ? 'player-tab--visible' : ''}`}>
                <div className="player-tab__close">
                    <button onClick={() => onClick}>
                        <img src={closeIcon}></img>
                    </button>
                </div>
            </div>
        )
    }
}


//@ts-ignore
const mapStateToProps = (state) => ({
    player: state.playerDetailReducer.playerDetail,
})

const mapDispatchToProps = (dispatch: any) => ({
      onClick: (id: string) => {
        console.log('clicked');
        dispatch(getPlayerDetail(id))
      }
  })

export default connect<{}, {}, {}>(mapStateToProps, mapDispatchToProps)(PlayerTabView);