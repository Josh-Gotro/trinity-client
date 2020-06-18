import React from 'react';
import Header from './Header'
import SignInForm from './SignInForm';
import LoginForm from './LoginForm';
import VendorsList from './VendorsList';
import Items from './Items'
import PriceLists from './PriceLists'
import Home from './Home';
import Footer from './Footer'
import AboutPage from './AboutPage'
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import './App.css';

function App() {

  return (
<>
    <Router>
        <RecoilRoot>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/signup" component={SignInForm} />
                <Route path="/login" component={LoginForm} />
                <Route path="/vendors" component={VendorsList} />
                <Route path="/items" component={Items} />
                <Route path="/pricelists" component={PriceLists} />
                <Route path="/about" component={AboutPage} /> 
            </Switch>
          <Footer />
        </RecoilRoot>
      </Router>

 </>   

  );
}

export default App;


