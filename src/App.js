//DEPENDENCIES
  import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';

//CONTAINERS
  import InternalContactOverview from './containers/internalContactOverview'
  import ForgotPassword from './containers/forgotPassword'

//MATERIALUI
  //PROVIDER
    import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <ForgotPassword/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
