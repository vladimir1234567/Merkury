import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Enter from "./enter.js";
import Home from "./home.js";
import Workflow from "./workflow.js";
import Statistics from "./statistics.js";
import Calendar from "./calendar.js";
import Users from "./users.js";
import Settings from "./settings.js";

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
                    <Route path="/statistics" exact component={Statistics} />
                    <Route path="/calendar" exact component={Calendar} />
                    <Route path="/users" exact component={Users} />
                    <Route path="/settings" exact component={Settings} />
                </div>
            </Router>
        )
    }
}
export default App;