import { GET_FIXTURE, GET_FIXTURE_SUCCESS, GET_FIXTURE_FAILURE } from '../Actions/GetFixture';

const initialState = {
    pending: false,
    fixture: null,
    error: null
}

const fixture = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_FIXTURE:
            return Object.assign({}, state, {
                pending: action.pending
            });
        case GET_FIXTURE_SUCCESS:
            return Object.assign({}, state, {
                pending: action.pending,
                fixture: action.fixture
            });
        case GET_FIXTURE_FAILURE:
            return Object.assign({}, state, {
                pending: action.pending,
                error: action.error
            });
        default: return state
    }
}

export default fixture;