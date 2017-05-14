/**
 * Created by maxim.chernin on 14/5/17.
 */
import {combineReducers} from 'redux';
import nodes from './reducers';

const rootReducer = combineReducers({
	nodes
});

export default rootReducer;
