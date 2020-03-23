import React from 'react';
import TeamModel from '../../Models/team';
import goalPost from '../../Assets/football-goal.png';
import Player from '../Player';
import PlayerModel from '../../Models/player';

import './Team.scss';

type TeamProps = {
    onClick: (id: string) => void,
    team: TeamModel
}

const Team = ({ onClick, team }: TeamProps) => {

    function getHomeAwayString(): string {
        return team.homeTeam ? 'Home Team' : 'Away Team';
    }

    function getTeamFormationRows(): Array<Array<PlayerModel>> {
        let formation: number[] = team.formation.split('-').map(Number);
        formation.unshift(1);

        let playerRows: Array<Array<PlayerModel>> = [];
        formation.map((number, index, array) => {
            if (index > 0) {
                const i: number = (array.slice(0, index)).reduce((a, b) => { return a + b });
                const playerRow: PlayerModel[] = team.players.slice(i, number + i);
                playerRows.push(playerRow);
            } else {
                playerRows.push([team.players[index]]);
            }
        });
        return playerRows;
    }

    return (
        <div className="team">
            <div className="team__header">
                <h2>{team.name}</h2>
                <p>{getHomeAwayString()}</p>
            </div>
            <div className="team__content">
                <img className="team__content__goal-post" src={goalPost} alt="goal post"/>
                <div className="team__content__formation">{
                    team && getTeamFormationRows().map((row: PlayerModel[], rowIndex) => {
                        return <div key={rowIndex} className="team__content__formation__row">{
                            row.map((player: PlayerModel) => {
                                return <Player key={player.playerId} onClick={onClick} player={player}/>
                            })
                        }</div>
                    })
                }</div>
            </div>
        </div>
    )
}

export default Team