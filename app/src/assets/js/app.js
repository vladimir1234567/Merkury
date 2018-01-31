import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Enter from "./enter.js";
import Home from "./home.js";
import Workflow from "./workflow.js";

const customHistory = createBrowserHistory();



class App extends Component {
    render() {
        return (
            <Router history={customHistory}>
                <div>
                        <Route path="/" exact component={Enter} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/workflow" exact component={Workflow} />
                </div>
            </Router>
        )
    }
}
export default App;