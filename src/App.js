import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// api request
import { getMoviesList } from "./api/requests";

// constants
import { navRoutes } from "./constants/routes";

// pages & components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFoundPage from "./components/pages/NotFoundPage";

function App() {
  useEffect(() => {
    
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        {navRoutes.map((route, routeIdx) => (
          <Route
            key={routeIdx}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
