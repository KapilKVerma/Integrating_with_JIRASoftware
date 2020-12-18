import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Login from "./components/Login/Login";
import Home from "./components/Home";

// Css
import "./App.css";

function App() {
  useEffect(() => {
    try {
      axios
        .get("http://localhost:5000/")
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
