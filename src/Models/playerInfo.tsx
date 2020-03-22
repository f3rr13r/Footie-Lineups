import Deserializable from './deserializable';

class PlayerDetail implements Deserializable {
    id: string;
    name: string;
    played: number;
    goals: number;
    yellowCards: number;
    redCards: number;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}

export default PlayerDetail

