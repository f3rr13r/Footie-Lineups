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
            fixture && fixture.teams.map((team: TeamModel, index: number) =>
                <div className="fixture__team">
                    <Team key={team.name} onClick={onClick} team={team} />
                    { index === 0 &&
                        <h2 className="fixture__vs">VS</h2>
                    }
                </div>
            )
        }</div>
    ) 
}

export default Fixture