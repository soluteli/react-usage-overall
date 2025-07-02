import React, { Component } from 'react';
import { HashRouter, Switch, Route, NavLink, Link } from 'react-router-dom'

function Foo() {
  return 'foo'
}

function Bar() {
  return 'foo'
}

function CustomLink({ label, to, activeOnlyWhenExact }) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => (
        <div className={match ? "active" : ""}>
          {match ? "> " : ""}
          <Link to={to}>{label}</Link>
        </div>
      )}
    />
  );
}



class RouterSample extends Component {
  render() {
    return (
      <HashRouter>
        <ul>
          <li>
            <CustomLink activeOnlyWhenExact={true} to="/foo" label="Foo" />
          </li>
          <li>
            <CustomLink to="/bar" label="Bar" />
          </li>
        </ul>

        <hr/>

        <Switch>
          <Route path='/foo' component={Foo} />
          <Route path='/bar' component={Bar} />
        </Switch>
      </HashRouter>
    );
  }
}

export default RouterSample;