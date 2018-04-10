//DEPENDENCIES
  import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';

//CONTAINERS
  import InternalContactOverview from './containers/internalContactOverview'

//MATERIALUI
  //PROVIDER
    import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <InternalContactOverview/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
