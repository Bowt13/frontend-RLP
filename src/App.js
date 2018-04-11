//DEPENDENCIES
  import React, {Component} from 'react';
  import './App.css';
  import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

//CONTAINERS
  import InternalContactOverview from './containers/internalContactOverview'
  import LoginPage from './containers/LoginPage'
  import SignupPage from './containers/SignupPage'
  import ForgotPassword from './containers/forgotPassword'

//MATERIALUI
  //PROVIDER
    import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//Components
  import ContactPage from './components/ContactPage'
  import WerkBon from './components/WerkBon'


class App extends Component {
  render() {
    return (
      <Router>
      <MuiThemeProvider>
        <div className="App">
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/werkbon" component={WerkBon} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/InternalContactOverview" component={InternalContactOverview} />
          <Route exact path="/forgotpassword" component={ ForgotPassword }/>
          <Route exact path="/flexicon/users/:usersId" component={ContactPage}/>
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
        </div>
      </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
