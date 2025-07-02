import React, { Component } from 'react';
import { HashRouter, Switch, Route, NavLink, Link } from 'react-router-dom'

function Foo() {
  return 'foo'
}

function Bar() {
  return 'foo'
}

function NotFound() {
  return '404'
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          {/* 通过 match 来获取路径 */}
          <Link to={`${match.path}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.path}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.path}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

class RouterSample extends Component {
  render() {
    return (
      <HashRouter>
        <ul>
          <li><NavLink to="/foo">foo</NavLink></li>
          <li> <NavLink to="/bar">bar</NavLink></li>
          <li> <NavLink to="/topics">topics</NavLink></li>
          <li><NavLink to="/ssss">some path</NavLink></li>
        </ul>

        <hr/>

        <Switch>
          <Route path='/foo' component={Foo} />
          <Route path='/bar' component={Bar} />
          <Route path='/topics' component={Topics} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default RouterSample;