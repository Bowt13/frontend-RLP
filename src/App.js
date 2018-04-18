//DEPENDENCIES
  import React, {Component} from 'react';
  import './App.css';
  import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

//CONTAINERS
  import InternalContactOverview from './containers/InternalContactOverview'
  import LoginPage from './containers/LoginPage'
  import SignupPage from './containers/SignupPage'
  import OrderCreator from './containers/OrderCreatorPage'
  import CustomerList from './containers/CustomerList'
  import CompanyCreator from './containers/CompanyCreatorPage'
  import ContactCreator from './containers/ContactCreator'


//MATERIALUI
  //PROVIDER
    import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//Components
  import OrdersPage from './components/OrdersPage'
  import OrderDetails from './components/OrderDetails'
  import NavBar from './components/NavBar'
  import ChatBox from './components/ChatBox'

class App extends Component {
  render() {
    return (
      <Router>
      <MuiThemeProvider>
        <div className="App">
          <NavBar />
          <Route exact path="/login" component={ LoginPage } />
          <Route exact path="/signup/:jwt" component={ SignupPage } />
          <Route exact path="/forgotpassword/:jwt" component={ SignupPage } />
          <Route exact path="/flexicon/create/order" component={ OrderCreator } />
          <Route exact path="/flexicon/users/company/:companyId" component={ ContactCreator } />
          <Route exact path="/flexicon/InternalContactOverview" component={ InternalContactOverview } />
          <Route exact path="/flexicon/orders" component={ OrdersPage }/>
          <Route exact path="/flexicon/customers" component={ CustomerList } />
          <Route exact path="/flexicon/companies" component={ InternalContactOverview }/>
          <Route exact path="/flexicon/orders/:orderId" component={ OrderDetails }/>
          <Route exact path="/flexicon/companies/creator" component={ CompanyCreator }/>
          <Route exact path="/chatbox" component={ ChatBox } />
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
        </div>
      </MuiThemeProvider>
      </Router>
    )
  }
}

export default App;
