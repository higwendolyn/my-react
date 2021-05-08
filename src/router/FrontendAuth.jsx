
import React, { Component } from "react";
import { Route } from "react-router-dom";
class FrontendAuth extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    const { routerConfig, location } = this.props;
    const { pathname } = location;
    console.log(location);
    const targetRouterConfig = routerConfig.find(
      (item) => item.path === pathname
    );
    return <Route path={pathname} component={targetRouterConfig.component} />;
  }
}
export default FrontendAuth;