//Dependencies
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

//Functions
import { searchForContact } from '../lib/functions'

//MaterialUI
//Components
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import SearchBar from 'material-ui-search-bar'
import RaisedButton from 'material-ui/RaisedButton'

//Actions
import { getCustomers } from '../actions/users'
import { getCompanies } from '../actions/companies'

//components
import NavBar from '../components/NavBar'

class CustomerList extends PureComponent {
	state = {
		props: true
	}

	componentWillMount() {
		this.props.getCompanies()
	}

	handleSubmit = value => {
		if (this.state.props === true) this.setState({ props: false })
		this.setState({
			company: searchForContact(this.props.company, value)
		})
	}

	render() {
		const { history } = this.props
		let company
		if (this.state.props) company = this.props.company
		if (!this.state.props) company = this.state.company

		if (this.props.user && this.props.user.role === 'External')
			return <Redirect to="/login" />

		return (
			<div>
				<NavBar />
				<div
					style={{
						display: 'flex',
						width: '80%',
						margin: 'auto',
						paddingTop: '5em'
					}}>
					<Paper
						style={{
							overflow: 'scroll',
							flexGrow: '2',
							margin: 5
						}}>
						<SearchBar
							onChange={this.handleSubmit}
							style={{
								margin: 20,
								maxWidth: '100%'
							}}
						/>
						<div>
							<RaisedButton
								label="Maak een bedrijf"
								backgroundColor="#F09517"
								style={{
									postion: 'relative',
									margin: 30,
									marginTop: 5,
									backgroundColor: '#9A9A98'
								}}
								onClick={_ => history.push(`/flexicon/nieuwbedrijf`)}
							/>
						</div>
						<Divider
							style={{
								padding: 1,
								backgroundColor: '#F09517'
							}}
						/>
						<List
							style={{
								padding: 0
							}}>
							<Subheader
								style={{
									fontSize: 40,
									margin: 8,
									textAlign: 'left'
								}}>
								Klanten
							</Subheader>
							<Divider
								style={{
									padding: 1,
									backgroundColor: '#F09517'
								}}
							/>
							{company &&
								company.map(cpy => (
									<div>
										<Divider />
										<ListItem
											style={{
												maxWidth: '100%'
											}}
											initiallyOpen={false}
											primaryTogglesNestedList={true}
											hoverColor="#F09517"
											primaryText={cpy.companyName}
											leftAvatar={<Avatar src={cpy.companyLogo} />}
											nestedItems={[
												cpy.users.map(user => (
													<div>
														<Divider />
														<ListItem
															style={{
																textAlign: 'right',
																textOverflow: '',
																textAlign: 'left'
															}}
															primaryTogglesNestedList={true}
															hoverColor="#F09517"
															key={user.id}
															primaryText={`${user.email}`}
															secondaryText={`${user.firstName} ${
																user.lastName
															}`}
															nestedItems={user.orders.map(order => (
																<ListItem
																	hoverColor="#f4b357"
																	primaryTogglesNestedList={true}
																	style={{
																		textAlign: 'left',
																		textOverflow: ''
																	}}
																	key={order.id}
																	primaryText={`${order.shortDescription}`}
																	secondaryText={`Besteldatum: ${
																		order.orderDate
																	}`}
																	onClick={_ =>
																		history.push(
																			`/flexicon/bestellingen/${
																				order.orderNumber
																			}`
																		)
																	}
																/>
															))}
														/>
													</div>
												))
											]}
										/>
										<RaisedButton
											label="Contactpersoon maken"
											backgroundColor="#F09517"
											style={{
												postion: 'relative',
												margin: 30,
												marginTop: 5,
												backgroundColor: '#9A9A98'
											}}
											onClick={_ =>
												history.push(
													`/flexicon/contactpersoon/bedrijf/${cpy.id}`
												)
											}
										/>
									</div>
								))}
						</List>
					</Paper>
				</div>
			</div>
		)
	}
}

const mapStateToProps = function(state) {
	return {
		user: state.user,
		customers: Object.values(state.customers).sort((a, b) =>
			a.email.localeCompare(b.email)
		),
		company: Object.values(state.company).sort((a, b) =>
			a.companyName.localeCompare(b.companyName)
		)
	}
}

export default connect(
	mapStateToProps,
	{ getCustomers, getCompanies }
)(CustomerList)
