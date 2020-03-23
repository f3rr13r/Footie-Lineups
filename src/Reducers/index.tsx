import { combineReducers } from 'redux';

import fixtureReducer from './GetFixture';
import playerDetailReducer from './GetPlayerDetail';

const reducer = combineReducers({
    fixtureReducer,
    playerDetailReducer
});

export default reducer