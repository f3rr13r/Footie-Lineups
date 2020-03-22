import { combineReducers } from 'redux';

import FixtureReducer from './GetFixture';
import PlayerDetailReducer from './GetPlayerDetail';

const reducer = combineReducers({
    FixtureReducer,
    PlayerDetailReducer
});

export default reducer