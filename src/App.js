import React from 'react';
import './App.css';
import Header from './Header'
import SignInForm from './SignInForm';
import LoginForm from './LoginForm';
import VendorsList from './VendorsList';
// import Vendor from './Vendor';
import Home from './Home';

import { RecoilRoot, 
  // atom, selector, useRecoilState, useRecoilValue, initializeState
} from 'recoil';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'; 


function App() {

  return (
    <Router>
        {/* <RecoilRoot initializeState={initializeState}> */}
        <RecoilRoot>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/signup" component={SignInForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/vendors" component={VendorsList} />
            </Switch>
          </div>
        </RecoilRoot>
      </Router>
  );
}

export default App;
