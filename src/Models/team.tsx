import Player from './player';
import Deserializable from './deserializable';

class TeamModel implements Deserializable {
    name: string;
    homeTeam: boolean;
    formation: string;
    players: Player[];

    deserialize(input: any): this {
        Object.assign(this, input);
        input.players.map((player: any) => new Player().deserialize(player));
        return this;
    }
}

export default TeamModel