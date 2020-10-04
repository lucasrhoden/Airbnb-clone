import React from 'react';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import SearchPage from "./SearchPage/SearchPage";
import Footer from "./Footer/Footer";

function App() {
  return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/" component={Home} exact/>
          <Redirect to="/" />
        </Switch>
        <Footer />
    </div>
  );
}

export default withRouter(App);
