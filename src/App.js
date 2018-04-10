//DEPENDENCIES
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

//CONTAINERS
import InternalContactOverview from "./containers/internalContactOverview";
import ShippingLabel from "./containers/shippingTemplate";
//MATERIALUI
//PROVIDER
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

//Components
import ContactPage from "./components/ContactPage";

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <Route
              exact
              path="/flexicon/users/:usersId"
              component={ContactPage}
            />
            <Route exact path="/flexicon/shipment" component={ShippingLabel} />
            <Route
              exact
              path="/"
              render={() => <Redirect to="/flexicon/users/:usersId" />}
            />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
