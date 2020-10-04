import React from 'react';
import { HashRouter as Router, Route} from "react-router-dom";

import './App.css';
import Header from "./Header/Header";
import Home from "./Home/Home";
import SearchPage from "./SearchPage/SearchPage";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Router basename="/">
      <div className="App">
      <Header />
        <Route path="/" component={Home} exact/>
        <Route path="/search" component={SearchPage} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
