import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import ExternalApi from "./components/ExternalApi";
import Calendar from "./components/calendar/Calendar";
import Landing from "./components/landing/Landing";
import Confirmation from "./components/confirmation/Confirmation";
import Listing from "./components/listing/Listing";
import Search from "./components/search/Search";

import Dashboard from "./components/dashboard/Dashboard";

import "./index.css";

import { useAuth0 } from "./react-auth0-wrapper";
import styled from "styled-components";

const MainContainerDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

function App() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <MainContainerDiv className="App">
      <Router>
        <header>
          <NavBar />
          {/* {isAuthenticated && (
            <span>
              <Calendar />
            </span>
          )} */}
        </header>
        <Switch>

          {/* **** R O U T E S  F O R  T E S T I N G **** */}
          {/* <Route path="/" exact component={Confirmation} /> */}
          {/* <Route path="/" exact component={Calendar} /> */}
          {/* <Route path="/" exact component={Listing} /> */}
          {/* <Route path="/" exact component={Dashboard} /> */}
          {/* <Route path="/" exact component={Search} /> */}

          <Route path="/" exact component={Landing} />

          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute path="/confirmation" exact component={Confirmation} />
          <PrivateRoute path="/search" exact component={Search} />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </Router>
    </MainContainerDiv>
  );
}

export default App;
