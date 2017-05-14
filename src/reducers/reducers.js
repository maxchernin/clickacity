/**
 * Created by maxim.chernin on 14/5/17.
 */
import initialState from './initialState'
import {ACTION_TYPES} from '../actions/actionTypes';
export default function (state = initialState, action) {
	switch (action.type){
		case ACTION_TYPES.FILTER_NODE:
			return filterNode(state, action);
		default:
			return state;
	}
}

	let filterNode = (state, action) => {
	let queryResult = filterNodes(action.nodes.filteredNodes, action.query);
	console.log(queryResult);
   return [...state, Object.assign({}, action.request)];
};


let filterNodes = (nodes, filter) => {
  var fatherFlag = false;
  // nodes.forEach((node) =>{
  //
  //   if(node.name && node.name.includes(filter)){
  //     Object.assign(node, {visible:true});
  //     fatherFlag = true;
  //   }
  //   if(node.children) {
  //     var visibleChild = filterNodes(node.children, filter);
  //     visibleChild && Object.assign(node, {visible:true})
  //   }
  //
  // });
  return fatherFlag

};