//Dependencies
import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'

//MaterialUI
import Paper from 'material-ui/Paper'
import Subheader from 'material-ui/Subheader'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class CompanyForm extends PureComponent {
	state = {}

	handleSubmit = e => {
		e.preventDefault()
		this.props.onSubmit(this.state)
		this.props.history.push(`/flexicon/klanten`)
	}

	handleChange = event => {
		const { name, value } = event.target

		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<Paper
					style={{
						position: 'relative',
						top: 80,
						botom: 10,
						margin: 'auto',
						width: '50%',
						overflow: 'scroll',
						height: '70%'
					}}>
					<Subheader style={{ fontSize: 40 }}>Create Company</Subheader>
					<Divider style={{ padding: 1, marginBottom: 1 }} />
					<form name="Create Company" onSubmit={this.handleSubmit}>
						<TextField
							floatingLabelFocusStyle={{ color: '#F09517' }}
							underlineFocusStyle={{ borderColor: '#F09517' }}
							name="companyName"
							floatingLabelText="Company Name:"
							value={this.state.companyName || ''}
							onChange={this.handleChange}
							required
						/>
						<br />
						<TextField
							floatingLabelFocusStyle={{ color: '#F09517' }}
							underlineFocusStyle={{ borderColor: '#F09517' }}
							name="companyLogo"
							floatingLabelText="Company Logo:"
							value={this.state.companyLogo || ''}
							onChange={this.handleChange}
							required
						/>
						<br />
						<br />
						<div style={{ display: 'inline-block' }}>
							<RaisedButton
								type="submit"
								label="Save"
								backgroundColor="#F09517"
							/>
						</div>
						<br />
						<br />
						<br />
					</form>
				</Paper>
			</div>
		)
	}
}

export default withRouter(CompanyForm)
