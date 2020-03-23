import Deserializable from "./deserializable";

class Player implements Deserializable {
    playerId: string;
    position: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}

export default Player;