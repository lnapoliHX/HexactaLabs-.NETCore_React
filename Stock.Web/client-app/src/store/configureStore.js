import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter } from 'connected-react-router'
import { routerMiddleware } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'


import auth from '../modules/auth'
import home from '../modules/home'


export default function configureStore(history, initialState) {
    const reducers = {
        form: formReducer,
        router: connectRouter(history),
        auth,
        home
    };

    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';

    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    const rootReducer = combineReducers({
        ...reducers
    });

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}