//DEPENDENCIES
import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

//CONTAINERS
import LoginPage from './containers/LoginPage'
import SignupPage from './containers/SignupPage'
import OrderCreator from './containers/OrderCreatorPage'
import CompanyCreator from './containers/CompanyCreatorPage'
import ContactCreator from './containers/ContactCreator'
import CompanyClientList from './containers/CompanyClientList'
//import CustomerList from './containers/CustomerList'
//import InternalContactOverview from './containers/InternalContactOverview'

//MATERIALUI
//PROVIDER
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//Components
import OrdersPage from './components/OrdersPage'
import OrderDetails from './components/OrderDetails'

class App extends Component {
	render() {
		return (
			<Router>
				<MuiThemeProvider>
					<div className="App">
						<Route exact path="/login" component={LoginPage} />
						<Route exact path="/signup/:jwt" component={SignupPage} />
						<Route
							exact
							path="/wachtwoordvergeten/:jwt"
							component={SignupPage}
						/>
						<Route
							exact
							path="/flexicon/nieuwebestelling"
							component={OrderCreator}
						/>
						<Route
							exact
							path="/flexicon/contactpersoon/bedrijf/:companyId"
							component={ContactCreator}
						/>
						<Route exact path="/flexicon/bestellingen" component={OrdersPage} />
						<Route
							exact
							path="/flexicon/bestellingen/:orderNumber"
							component={OrderDetails}
						/>
						<Route
							exact
							path="/flexicon/klanten"
							component={CompanyClientList}
						/>
						<Route
							exact
							path="/flexicon/nieuwbedrijf"
							component={CompanyCreator}
						/>
						<Route exact path="/" render={() => <Redirect to="/login" />} />
					</div>
				</MuiThemeProvider>
			</Router>
		)
	}
}

export default App
