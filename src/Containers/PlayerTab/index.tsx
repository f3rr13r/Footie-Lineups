import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {clearPlayerDetail} from '../../Actions/GetPlayerDetail';
import PlayerDetailModel from '../../Models/playerInfo';

import closeIcon from '../../Assets/close-icon.png';
import footballPlayer from '../../Assets/soccer-player.png';
import football from '../../Assets/football.png';
import footballCap from '../../Assets/football-cap.png';

import './PlayerTab.scss';

type ContentProps = {
    onCloseButtonClick: () => void,
    player: PlayerDetailModel,
    teamName: string,
    homeTeam: boolean
}

class PlayerTabView extends PureComponent<ContentProps, {}> {
    render() {
        const { player, homeTeam, teamName, onCloseButtonClick } = this.props;

        return (
            <div className={`player-tab ${homeTeam && homeTeam == true ? 'player-tab__home' : 'player-tab__away'} ${player ? 'player-tab--visible' : ''}`}>
                <div className="player-tab__header">
                    <button onClick={() => onCloseButtonClick()}>
                        <img src={closeIcon}></img>
                    </button>
                    <h1>{player ? player.name : 'Loading...'}</h1>
                    <p>{teamName}</p>
                </div>
                <div className="player-tab__body">
                    <img className="player-tab__body__icon" src={footballPlayer} alt="player icon"/>
                    <div className="player-tab__body__stats">{
                        player && player.played > 0 &&
                        <div className="player-tab__body__stats__row">
                            <h4>Games played: ({player.played})</h4>
                            <div className="player-tab__body__stats__row__items">
                                {
                                    Array.from({ length: player.played }).map(() => {
                                        return <img className="cap" src={footballCap}/>
                                    })
                                }
                            </div>
                        </div>
                    }
                    {
                        player && player.goals > 0 &&
                        <div className="player-tab__body__stats__row">
                            <h4>Goals Scored: ({player.goals})</h4>
                            <div className="player-tab__body__stats__row__items">
                                {
                                    Array.from({ length: player.goals }).map(() => {
                                        return <img className="ball" src={football}/>
                                    })
                                }
                            </div>
                        </div>
                    }
                    {
                        player && player.yellowCards > 0 &&
                        <div className="player-tab__body__stats__row">
                            <h4>Yellow Cards: ({player.yellowCards})</h4>
                            <div className="player-tab__body__stats__row__items">
                                {
                                    Array.from({ length: player.yellowCards }).map(() => {
                                        return <div className="card card--yellow"></div>
                                    })
                                }
                            </div>
                        </div>
                    }
                    {
                        player && player.redCards > 0 &&
                        <div className="player-tab__body__stats__row">
                            <h4>Red Cards: ({player.redCards})</h4>
                            <div className="player-tab__body__stats__row__items">
                                {
                                    Array.from({ length: player.redCards }).map(() => {
                                        return <div className="card card--red"></div>
                                    })
                                }
                            </div>
                        </div>
                    } 
                    </div>
                </div>
            </div>
        )
    }
}


//@ts-ignore
const mapStateToProps = (state) => ({
    player: state.playerDetailReducer.playerDetail,
    homeTeam: state.playerDetailReducer.homeTeam,
    teamName: state.playerDetailReducer.teamName
})

const mapDispatchToProps = (dispatch: any) => ({
      onCloseButtonClick: () => {
        dispatch(clearPlayerDetail())
      }
  })

export default connect<{}, {}, {}>(mapStateToProps, mapDispatchToProps)(PlayerTabView);