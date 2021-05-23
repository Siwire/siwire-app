import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import appReducer from './appReducer';



const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    appStore: appReducer,
});

export default createRootReducer;