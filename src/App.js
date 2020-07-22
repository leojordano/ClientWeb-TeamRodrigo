import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { connect } from 'react-redux'

import LoginPage from './components/loginPage'
import StatePage from './components/statePage'


function App({ user }) {

  // console.log('Minha Store' , user)

  return (
        <Router>
          <Switch>

            <Route path='/state'>
              <StatePage />
            </Route>

            <Route path='/'>
              <LoginPage />
            </Route>

          </Switch>
        </Router>
  );
}

function mapStateToProps(state) {
  return {
    user: state
  }
}

const mapDispatchToProps = { }

export default connect(mapStateToProps, mapDispatchToProps)(App);
