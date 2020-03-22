import axios from 'axios';
import { getPlayerDetail, getPlayerDetailSuccess, getPlayerDetailFailure } from '../Actions/GetPlayerDetail';
import PlayerDetail from '../Models/playerInfo';

function attemptToGetPlayerDetail({ playerId }: { playerId: string }) {
    return (dispatch: any) => {
        dispatch(getPlayerDetail());
        axios.get(`http://dev.webuildbots.ai:9123/playerId=${playerId}&token=${process.env.REACT_APP_APPLICATIONKEY}`)
        .then((response) => {
            const playerDetail: PlayerDetail = new PlayerDetail().deserialize(response.data);
            dispatch(getPlayerDetailSuccess(playerDetail));
        })
        .catch((error) => {
            dispatch(getPlayerDetailFailure(error));
        })
    }
}

export default attemptToGetPlayerDetail