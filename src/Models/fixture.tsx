import Team from './team';
import Deserializable from './deserializable';

class Fixture implements Deserializable {
    date: string;
    location: string;
    teams: Team[];

    deserialize(input: any): this {
        Object.assign(this, input);
        input.teams.map((team: any) => new Team().deserialize(team));
        return this
    }
}

export default Fixture