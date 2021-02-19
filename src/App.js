import './App.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import SearchPage from './SearchPage.js';
import Header from './Header.js';
import Header2 from './Header2.js';
import DetailPage from './DetailPage.js';
import Home from './Home.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Header2 />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/search"
              exact
              render={(routerProps) => <SearchPage {...routerProps} />}
            />
            <Route
              path="/search/:name"
              exact
              render={(routerProps) => <DetailPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}