import Fixture from "../Models/fixture"

/*
 * action types
 */
export const GET_FIXTURE = 'GET_FIXTURE';
export const GET_FIXTURE_SUCCESS = 'GET_FIXTURE_SUCCESS';
export const GET_FIXTURE_FAILURE = 'GET_FIXTURE_FAILURE';


/*
 * action creators
 */
export function getFixture() {
    return {
        type: GET_FIXTURE,
        pending: true,
        fixture: null,
        error: null,
    }
}

export function getFixtureSuccess(fixture: Fixture) {
    return {
        type: GET_FIXTURE_SUCCESS,
        pending: false,
        fixture: fixture,
        error: null
    }
}

export function getFixtureFailure(error: Error) {
    return {
        type: GET_FIXTURE_FAILURE,
        pending: false,
        fixture: null,
        error: error
    }
}