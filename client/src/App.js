import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import { Container } from 'reactstrap';
import {Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import * as ROUTES from './actions/routes';
import Services from './components/Services';
import Contact from './components/Contact';
import Account from './components/auth/Account';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
        <AppNavbar />
        <Route exact path = {ROUTES.HOME} component={Home} />
        <Route exact path = {ROUTES.SERVICES} component={Services} />
        <Route exact path = {ROUTES.CONTACT} component={Contact} />
        <Route exact path = {ROUTES.ACCOUNT} component = {Account} />
        
         
        </div>
      </Provider>
    );
  }
}

export default App;
