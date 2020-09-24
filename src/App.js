import React from 'react';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="app">
              <Header />
              <Switch>
                  <Route path="/checkout">
                      <h1>checkout</h1>
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
