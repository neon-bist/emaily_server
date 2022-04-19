import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as actions from "../actions";
import { connect } from "react-redux";

import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const PageNotFound = () => <h2>Page Not Found 404</h2>;

const App = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default connect(null, actions)(App);
