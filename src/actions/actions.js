import {ACTION_TYPES} from './actionTypes';
export function filterNode(query, nodes) {

	return {type: ACTION_TYPES.FILTER_NODE, query, nodes};
}