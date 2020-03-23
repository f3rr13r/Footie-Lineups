import React from 'react';
import ReactDOM from 'react-dom';

/*-- redux --*/
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

/*-- reducers --*/
import reducer from './Reducers';

/*-- actions --*/
import { getFixture } from './Actions/GetFixture';

/*-- components --*/
import App from './App';

/*-- service workers --*/
import * as serviceWorker from './serviceWorker';

/*-- styles --*/
import 'normalize.css';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));
//@ts-ignore
store.dispatch(getFixture())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
