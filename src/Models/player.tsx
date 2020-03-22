import Deserializable from "./deserializable";

class Player implements Deserializable {
    id: string;
    position: string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}

export default Player;