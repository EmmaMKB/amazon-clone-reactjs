import React from 'react';
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="app">
              <Switch>
                  <Route path="/checkout">
                      <Header />
                      <h1>checkout</h1>
                  </Route>
                  <Route path="/">
                      <Header />
                      <Home />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
