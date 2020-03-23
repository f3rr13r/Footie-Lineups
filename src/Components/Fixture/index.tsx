import React from 'react';

/*-- components --*/
import Team from '../Team';

/*-- models --*/
import FixtureModel from '../../Models/fixture';
import TeamModel from '../../Models/team';

/*-- styles --*/
import './Fixture.scss';

type FixtureProps = {
    onClick: (id: string) => void,
    fixture: FixtureModel
}

const Fixture = ({ onClick, fixture }: FixtureProps) => {
    return(
        <div className="fixture">{
            fixture && fixture.teams.map((team: TeamModel) => 
                <Team key={team.name} onClick={onClick} team={team} />
            )
        }</div>
    ) 
}

export default Fixture