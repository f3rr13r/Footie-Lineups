import { GET_PLAYER_DETAIL, GET_PLAYER_DETAIL_SUCCESS, GET_PLAYER_DETAIL_FAILURE, CLEAR_PLAYER_DETAIL } from '../Actions/GetPlayerDetail';

const initialState = {
    pending: false,
    playerDetail: null,
    error: null
}

export default function playerDetail(state = initialState, action: any) {
    switch (action.type) {
        case GET_PLAYER_DETAIL:
            return Object.assign({}, state, {
                pending: action.pending
            });
        case GET_PLAYER_DETAIL_SUCCESS:
            return Object.assign({}, state, {
                pending: action.pending,
                playerDetail: action.playerDetail
            });
        case GET_PLAYER_DETAIL_FAILURE:
            return Object.assign({}, state, {
                pending: action.pending,
                error: action.error
            })
        case CLEAR_PLAYER_DETAIL:
            return Object.assign({}, state, {
                playerDetail: action.playerDetail
            })
        default: return state
    }
}