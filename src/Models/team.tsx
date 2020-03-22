import Player from './player';
import Deserializable from './deserializable';

class Team implements Deserializable {
    name: string;
    homeTeam: boolean;
    formattion: string;
    players: Player[];

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}

export default Team