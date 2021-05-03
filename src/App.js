/* eslint-disable no-undef */
import React, {useEffect} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


import Header from './components/header/header.component';




import {selectCurrentUser} from '../src/redux/user/user.selector'
import {checkUserSession} from './redux/user/user.actions'
import {createStructuredSelector} from 'reselect'


const App = ({checkUserSession, currentUser}) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])
  


  
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact 
            path='/signin' 
            render={() => 
              currentUser ? (
                <Redirect to='/'/>
              ) : (
                <SignInAndSignUpPage/>
              ) 
            } 
          />
        </Switch>
      </div>
    );
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App);
