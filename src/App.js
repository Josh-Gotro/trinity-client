import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './Signup'
import Login from './Login'
import Home from './Home'

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";


class App extends Component {




  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path='/Login'>
              <Login />
            </Route>

            <Route exact path='/Signup'>
              <SignUp />
            </Route>



          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;