import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import Home from "./components/Home";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import * as ROUTES from "./actions/routes";
import Hardscapes from "./components/Hardscapes";
import Lawncare from "./components/Lawncare";
import Pruning from "./components/Pruning";
import Installs from "./components/Installs";
import Contact from "./components/Contact";
import Account from "./components/auth/Account";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Route exact path={ROUTES.HOME} component={Home} />

          <Route exact path={ROUTES.LAWNCARE} component={Lawncare} />
          <Route exact path={ROUTES.INSTALLS} component={Installs} />
          <Route exact path={ROUTES.HARDSCAPES} component={Hardscapes} />
          <Route exact path={ROUTES.PRUNING} component={Pruning} />
          <Route exact path={ROUTES.CONTACT} component={Contact} />
          <Route exact path={ROUTES.ACCOUNT} component={Account} />
        </div>
      </Provider>
    );
  }
}

export default App;
