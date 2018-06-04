//Dependencies
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//MaterialUI
//Components
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

//Icons

//Colors

class OrderBetalingsInfo extends PureComponent {
	static propTypes = {
		onChange: PropTypes.func.isRequired
	}
	state = {
		DeliveryTime: 14
	}

	handleChange = event => {
		const { name, value } = event.target
		this.setState({
			[name]: value
		})
	}

	handleDate = (value, name) => {
		this.setState({
			[name]: value
		})
	}

	handleChangeRadio = (name, value) => {
		this.setState({
			[name]: value
		})
	}

	onClick = () => {
		this.props.onChange('OrderAfleverInfo', this.state)
	}

	formatDate = date => {
		var d = date.getDate()
		var m = date.getMonth() + 1
		var y = date.getFullYear()
		return '' + (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : m) + '-' + y
	}

	disableWeekends = date => {
		return date.getDay() === 0 || date.getDay() === 6
	}

	componentWillMount() {
		const { DeliveryTime } = this.state
		const CurrentDate = new Date()
		this.props.onRef(this)
		this.setState({
			minDate: new Date(Date.parse(CurrentDate) + DeliveryTime * 86400000)
		})
	}

	render() {
		const paymentMethods = [{ type: 'Contant' }, { type: 'Factuur' }]
		return (
			<div
				style={{
					width: '90%',
					display: 'inline-block',
					textAlign: 'center',
					float: 'left',
					position: 'relative',
					top: 0,
					marginLeft: 50,
					marginBottom: 5
				}}>
				<Paper>
					<h1
						style={{
							textAlign: 'left',
							position: 'relative',
							top: 10,
							left: 8
						}}>
						Betaling informatie
					</h1>
					<Divider
						style={{
							height: 4
						}}
					/>
					<form name="AfleverInfo">
						<RadioButtonGroup
							name="paymentType"
							style={{
								position: 'relative',
								marginTop: 10,
								marginLeft: -40,
								display: 'inline-block',
								width: '90%',
								textAlign: 'left'
							}}>
							{paymentMethods &&
								paymentMethods.map(payment => (
									<RadioButton
										name="PaymentType"
										value={payment.type}
										label={`${payment.type}`}
										style={{
											marginBottom: 10
										}}
										iconStyle={{
											fill: '#F09517'
										}}
										onClick={_ =>
											this.handleChangeRadio('PaymentType', payment.type)
										}
									/>
								))}
						</RadioButtonGroup>
						<br />
					</form>
				</Paper>
				<br />
			</div>
		)
	}
}

const mapStateToProps = function(state) {
	return {
		deliveries: state.deliveries
	}
}

export default connect(mapStateToProps)(OrderBetalingsInfo)
