import PlayerDetail from "../Models/playerInfo";

import axios from 'axios';


/*
 * action types
 */

 /*
 * action creators
 */


export const GET_PLAYER_DETAIL = 'GET_PLAYER_DETAIL';

export function getPlayerDetail(playerId: string) {
    return function(dispatch: any){
        dispatch({type: GET_PLAYER_DETAIL,
            pending: true})
            return axios.get(`http://dev.webuildbots.ai:9123/players?playerId=${playerId}&token=${process.env.REACT_APP_APPLICATIONKEY}`)
        .then((response) => {
            const playerDetail: PlayerDetail = new PlayerDetail().deserialize(response.data);
             dispatch(getPlayerDetailSuccess(playerDetail));
        })
        .catch((error) => {
            dispatch(getPlayerDetailFailure(error));
        })
    }
    
}

export const GET_PLAYER_DETAIL_SUCCESS = 'GET_PLAYER_DETAIL_SUCCESS';

export function getPlayerDetailSuccess(playerDetail: PlayerDetail) {
    return {
        type: GET_PLAYER_DETAIL_SUCCESS,
        pending: false,
        playerDetail: playerDetail,
        error: null
    }
}
export const GET_PLAYER_DETAIL_FAILURE = 'GET_PLAYER_DETAIL_FAILURE';

export function getPlayerDetailFailure(error: Error) {
    return {
        type: GET_PLAYER_DETAIL_FAILURE,
        pending: false,
        playerDetail: null,
        error: error
    }
}

export const CLEAR_PLAYER_DETAIL = 'CLEAR_PLAYER_DETAIL';

export function clearPlayerDetail() {
    return {
        type: CLEAR_PLAYER_DETAIL,
        pending: false,
        playerDetail: null,
        error: null
    }
}