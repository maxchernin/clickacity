import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import data from './data.json';

class App extends Component {
	componentDidMount(){

    }


  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
	        <input placeholder="filter" type="text" />
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

export default App;
