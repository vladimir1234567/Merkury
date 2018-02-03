import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Enter from "./enter.js";
import Home from "./home.js";
import Workflow from "./workflow.js";

const customHistory = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {}
    };

    this.setRootUserData = this.setRootUserData.bind(this);
  }

  setRootUserData(userData) {
    this.setState({ userData: userData });
  }

  render() {
        return (
            <Router history={customHistory}>
                <div>
                    <Route path="/" exact render={(routeProps) => <Enter routeProps={routeProps} setRootUserData={this.setRootUserData} />} />
                    <Route path="/home" exact render={(routeProps) => <Home routeProps={routeProps} userData={this.state.userData} />} />
                    <Route path="/workflow" exact component={Workflow} />
                </div>
            </Router>
        )
    }
}
export default App;