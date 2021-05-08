import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import FrontendAuth from "./router/FrontendAuth";
import routerArr from "./router/index";
class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <FrontendAuth routerConfig={routerArr} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
