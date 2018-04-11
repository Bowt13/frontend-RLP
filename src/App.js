//DEPENDENCIES
  import React, {Component} from 'react';
  import './App.css';
  import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

//CONTAINERS
  import InternalContactOverview from './containers/internalContactOverview'
  import ForgotPassword from './containers/ForgotPassword'

//MATERIALUI
  //PROVIDER
    import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//Components
  import LoginPage from './components/LoginPage'
  import SignupPage from './components/SignupPage'
  import ContactPage from './components/ContactPage'




class App extends Component {
  render() {
    return (
      <Router>
      <MuiThemeProvider>
        <div className="App">
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/InternalContactOverview" component={InternalContactOverview} />
          <Route exact path="/flexicon/forgotpassword" component={ ForgotPassword }/>
          <Route exact path="/flexicon/users/:usersId" component={ContactPage}/>
          <Route exact path="/" render={ () => <Redirect to="/flexicon/users/:usersId" /> } />
        </div>
      </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
