import axios from 'axios';
import { fetchPlayerDetailPending, fetchPlayerDetailSuccess, fetchPlayerDetailError } from '../Actions/fetchProfileInfo';
import PlayerDetail from '../Models/playerInfo';

function getPlayerDetail({ playerId }: { playerId: string }) {
    return (dispatch: any) => {
        dispatch(fetchPlayerDetailPending());
        axios.get(`http://dev.webuildbots.ai:9123/playerId=${playerId}&token=${process.env.REACT_APP_APPLICATIONKEY}`)
        .then((response) => {
            const playerDetail: PlayerDetail = new PlayerDetail().deserialize(response.data);
            dispatch(fetchPlayerDetailSuccess(playerDetail));
        })
        .catch((error) => {
            dispatch(fetchPlayerDetailError(error));
        })
    }
}

export default getPlayerDetail