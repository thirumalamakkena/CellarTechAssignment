import { Route, Switch } from "react-router-dom";
import { Component } from "react";
import Home from "./components/Home";
import ExistingItineraries from "./components/ExistingItineraries";
import Explorer from "./components/Explorer";

import "./App.css";
import Review from "./components/Review";
import CreatePlan from "./components/CreatePlan";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/itineraries" component={ExistingItineraries} />
        <Route exact path="/explorer" component={Explorer} />
        <Route exact path="/review" component={Review} />
        <Route exact path="/my-plan" component={CreatePlan} />
      </Switch>
    );
  }
}

export default App;
