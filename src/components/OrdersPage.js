//Dependencies
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getOrders } from '../actions/orders'

//MaterialUI
//Components
import Paper from 'material-ui/Paper'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import SearchBar from 'material-ui-search-bar'

//functions
import { searchForOrder } from '../lib/functions'

import NavBar from '../components/NavBar'

class OrdersPage extends PureComponent {
	state = {
		openProfile: false,
		props: true
	}

	componentWillMount() {
		this.props.getOrders()
	}

	handleSubmit = value => {
		if (this.state.props === true) this.setState({ props: false })
		this.setState({
			orders: searchForOrder(this.props.orders, value)
		})
	}

	handleToggle = () => {
		this.setState({ openProfile: !this.state.openProfile }, () =>

		)
	}

	render() {
		const { history } = this.props

		let orders
		if (this.state.props) orders = this.props.orders
		if (!this.state.props) orders = this.state.orders


		return (
			<div>
				<NavBar />
				<Paper
					style={{
						position: 'relative',
						top: 90,
						left: '25%',
						width: '50%',
						overflow: 'scroll'
					}}>
					<div>
						<SearchBar
							onChange={this.handleSubmit}
							style={{
								margin: 20,
								maxWidth: 1000,
								maxLength: 500
							}}
						/>
						<List
							style={{
								padding: 0
							}}>
							<Subheader
								style={{
									fontSize: 40,
									margin: 8
								}}>
								Bestellingen
							</Subheader>
							<Divider
								style={{
									padding: 1,
									backgroundColor: '#F09517'
								}}
							/>
							{orders &&
								orders.map(order => (
									<div>
										{
										<Divider />
										<ListItem
											hoverColor="#f4b357"
											secondaryTextLines={2}
											primaryText={`${order.shortDescription}`}
											secondaryText={
												<p>
													{' '}
													<span>
														{' '}
														{`Bestellingsnummer: ${order.orderNumber}`}
													</span>
													<br />
													<span>{`Opdrachtgever: ${order.userEmail}`}</span>
												</p>
											}
											className="order-row"
											onClick={_ =>
												history.push(
													`/flexicon/bestellingen/${order.orderNumber}`
												)
											}
										/>
									</div>
								))}
						</List>
					</div>
				</Paper>
			</div>
		)
	}
}

const mapStateToProps = function(state, props) {
	return {
		orders:
			state.orders === null
				? null
				: Object.values(state.orders).sort((a, b) => b.id - a.id)
	}
}

export default connect(
	mapStateToProps,
	{ getOrders }
)(OrdersPage)
