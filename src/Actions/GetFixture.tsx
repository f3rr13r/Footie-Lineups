import Fixture from "../Models/fixture"
import axios from 'axios';

/*
 * action creators
 */
export const GET_FIXTURE_SUCCESS = 'GET_FIXTURE_SUCCESS';
function getFixtureSuccess(fixture: Fixture) {
    return {
        type: GET_FIXTURE_SUCCESS,
        pending: false,
        fixture: fixture,
        error: null
    }
}

export const GET_FIXTURE_FAILURE = 'GET_FIXTURE_FAILURE';
export function getFixtureFailure(error: Error) {
    return {
        type: GET_FIXTURE_FAILURE,
        pending: false,
        fixture: null,
        error: error
    }
}

export const GET_FIXTURE = 'GET_FIXTURE';
export function getFixture() {
    return function(dispatch: any) {
        dispatch({ type: GET_FIXTURE, pending: true });
        return axios.get(`http://dev.webuildbots.ai:9123/fixtures?fixtureId=1234567&token=${process.env.REACT_APP_APPLICATIONKEY}`)
        .then((response) => {
            const fixture: Fixture = new Fixture().deserialize(response.data);
            dispatch(getFixtureSuccess(fixture));
        })  
        .catch((error) => {
            console.error('error: ', error);
            dispatch(getFixtureFailure(error));
        })
    }
}