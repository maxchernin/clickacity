import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import data from './data.json';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as placesActions from './actions/actions'

class App extends Component {
	constructor(props, context){
		super(props);
		this.onClickCity = this.onClickCity.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		this.state = {
			originalNodes:data,
			filteredNodes: data
		}
	}
	handleFilter(event) {
	// buildQuery();

    this.props.actions.filterNode(event.target.value, this.state);
	}
	onClickCity() {

	}

	componentDidMount(){
    }


  render() {
    return (
      <div className="App">
	      {this.props.nodes.map((node, index) => {
	      	console.log(node)
		      return <div key={index}>{node.name}</div>
	      })}
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
	        <input placeholder="filter" type="text" onKeyUp={this.handleFilter} />
	        <div className="node">
		        <input type="checkbox" checked/>
		        <span className="title">Asia</span>
		        <div className="children">
			        <div className="node">
				        <input type="checkbox" checked/>
				        <span className="title">Israel</span>
				        <div className="children">

					        <div className="node">
						        <input type="checkbox" checked/>
						        <span className="title">Tel Aviv</span>
					        </div>

					        <div className="node">
						        <input type="checkbox" checked/>
						        <span className="title">Jerusalem</span>
					        </div>

					        <div className="node">
						        <input type="checkbox" checked/>
						        <span className="title">Haifa</span>
					        </div>

				        </div>
			        </div>
		        </div>
	        </div>
        </div>
      </div>
    );
  }
}

/* Implement using React / Angular + Redux / MobX:

 1. On keyup on filter, show only the nodes that match the filter, and their ancestors
 2. Master checkbox value and subtree checkbox are in sync (no need for indeterminate)
 3. Master checkbox reflects and affects the values of the current filtered nodes
 4. Performance matters
 5. Save and restore state from localstorage automatically
 6. Implement selection list + 'x' to remove from selection

 */
function mapStateToProps(state, ownProps) {
	debugger;
	return {
		nodes: state.nodes
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(placesActions , dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
