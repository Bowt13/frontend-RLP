//DEPENDENCIES
  import
    React,
   { Component }
  from 'react';
  import './App.css';
  import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';


//CONTAINERS
  import InternalContactOverview from './containers/internalContactOverview'
  import LoginPage from './components/LoginPage'
  import SignupPage from './components/SignupPage'

//MATERIALUI
  //PROVIDER
    import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
      </div>
      </Router>
    );
  }
}

export default App;
