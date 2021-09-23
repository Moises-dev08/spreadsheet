import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SpreadSheetScreen from "./screen/spreadSheet/SpreadSheetScreen";
import HomeScreen from "./screen/home/HomeScreen";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/spreadSheet">
            <SpreadSheetScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
