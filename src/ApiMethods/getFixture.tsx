import axios from 'axios';
import { getFixture, getFixtureSuccess, getFixtureFailure } from '../Actions/GetFixture';
import Fixture from '../Models/fixture';

function attemptToGetFixture() {
    return (dispatch: any) => {
        console.log('dispatching....')
        dispatch(getFixture());
        axios.get(`http://dev.webuildbots.ai:9123/filters?fixture=1234567&token=${process.env.REACT_APP_APPLICATIONKEY}`)
        .then((response) => {
            console.log('data: ', response);
            const fixture: Fixture = new Fixture().deserialize(response.data);
            dispatch(getFixtureSuccess(fixture));
            return fixture;
        })
        .catch((error) => {
            console.log('error: ', error);
            dispatch(getFixtureFailure(error));
        })
    }
}

export default attemptToGetFixture;