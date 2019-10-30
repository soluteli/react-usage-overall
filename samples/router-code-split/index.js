import React, { Component } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import loadable from '@loadable/component'

const FooAsync = loadable(() => import(`./Foo`))
const BarAsync = loadable(() => import(`./Bar`), {
  fallback: <div>Loading...</div>,
})

class RouterSample extends Component {
  render() {
    return (
      <HashRouter>
        <ul>
          <li>
            <Link to="/foo">foo</Link>
          </li>
          <li>
            <Link to="/bar">bar</Link>
          </li>
        </ul>

        <hr/>

        <Switch>
          <Route path='/foo' component={FooAsync} />
          <Route path='/bar' component={BarAsync} />
        </Switch>
      </HashRouter>
    );
  }
}

export default RouterSample;