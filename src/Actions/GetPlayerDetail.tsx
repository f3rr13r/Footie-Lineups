import PlayerDetail from "../Models/playerInfo";

/*
 * action types
 */
 export const GET_PLAYER_DETAIL = 'GET_PLAYER_DETAIL';
 export const GET_PLAYER_DETAIL_SUCCESS = 'GET_PLAYER_DETAIL_SUCCESS';
 export const GET_PLAYER_DETAIL_FAILURE = 'GET_PLAYER_DETAIL_FAILURE';

 /*
 * action creators
 */
export function getPlayerDetail() {
    return {
        type: GET_PLAYER_DETAIL,
        pending: true,
        playerDetail: null,
        error: null
    }
}

export function getPlayerDetailSuccess(playerDetail: PlayerDetail) {
    return {
        type: GET_PLAYER_DETAIL_SUCCESS,
        pending: false,
        playerDetail: playerDetail,
        error: null
    }
}

export function getPlayerDetailFailure(error: Error) {
    return {
        type: GET_PLAYER_DETAIL_FAILURE,
        pending: false,
        playerDetail: null,
        error: error
    }
}