//Call this function from application entry point
import{createStore,applyMiddleware,compose} from "redux" ;

import allReducers from './reducers';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant" 
import { composeWithDevTools } from '@redux-devtools/extension';

import thunk from "redux-thunk";

export default function configureStore(initialState){
   // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose //add support for Redux dev tools

    return createStore(allReducers,
        initialState,
        composeWithDevTools(applyMiddleware(thunk, reduxImmutableStateInvariant()))
        );
}
//Redux Middleware is a way to enhance the REdux's behavior with extra functional
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()