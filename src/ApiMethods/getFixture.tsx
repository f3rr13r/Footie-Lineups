import axios from 'axios';
import { fetchFixturePending, fetchFixtureSuccess, fetchFixtureError } from '../Actions/fetchFixture';
import Fixture from '../Models/fixture';

function getFixture() {
    return (dispatch: any) => {
        console.log('dispatching....')
        dispatch(fetchFixturePending());
        axios.get(`http://dev.webuildbots.ai:9123/filters?fixture=1234567&token=${process.env.REACT_APP_APPLICATIONKEY}`)
        .then((response) => {
            console.log('data: ', response);
            const fixture: Fixture = new Fixture().deserialize(response.data);
            dispatch(fetchFixtureSuccess(fixture));
            return fixture;
        })
        .catch((error) => {
            console.log('error: ', error);
            dispatch(fetchFixtureError(error));
        })
    }
}

export default getFixture;