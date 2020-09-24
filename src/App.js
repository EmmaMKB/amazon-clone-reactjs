import React from 'react';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Checkout from "./pages/Checkout/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="app">
              <Header />
              <Switch>
                  <Route path="/checkout">
                      <Checkout />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
