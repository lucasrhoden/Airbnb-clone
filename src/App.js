import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect} from "react-router-dom";

import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import SearchPage from "./SearchPage/SearchPage";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router>
        <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/search" component={SearchPage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
    </div>
    </Router>
  );
}

export default withRouter(App);
