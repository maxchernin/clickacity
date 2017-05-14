import * as types from './actionTypes';
export function selectNode(node) {
	return {type: types.SELECT_NODE, node};
}