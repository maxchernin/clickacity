/**
 * Created by maxim.chernin on 14/5/17.
 */
import * as types from '../actions/actionTypes';
export default function (state = [], action) {
	switch (action.type){
		case types.SELECT_NODE:
			return [...state, Object.assign({}, action.node)]
		default:
			return state;
	}
}