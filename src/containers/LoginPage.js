import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login, getCurrentUser} from '../actions/users'
import { Redirect, Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

//Image
import logo from './logo.png'

//MaterialUI
  //Components
	import Paper from 'material-ui/Paper'
	import Dialog from 'material-ui/Dialog'
	import FlatButton from 'material-ui/FlatButton'
	import RaisedButton from 'material-ui/RaisedButton'
	import TextField from 'material-ui/TextField'

//Components


//Actions
	import { forgotPassword } from '../actions/forgotPassword'

class LoginPage extends PureComponent {
	state={
		dialog: false,
	}

	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

	handleForgotPasswordFormSubmit = () => {
		this.props.forgotPassword(this.state.email)
		this.handleClose()
	}

	handleOpen = () => {
		this.setState({dialog: true})
	}

	handleClose = () => {
		this.setState({dialog: false})
	}

	render() {
		const actions = [
			<RaisedButton
				label="Verzenden"
				backgroundColor='#F09517'
				primary={true}
				style={{
					postion: 'relative',
					margin: 30,
					marginTop: 5,
					backgroundColor: '#9A9A98',
				}}
				onClick={this.handleForgotPasswordFormSubmit}
			/>,
		]

		if (this.props.currentUser) {
			this.props.getCurrentUser()
		}

		if (this.props.user && this.props.user.role === 'External') return (
			<Redirect to="/flexicon/orders" />
	  )

		if (this.props.user && this.props.user.role === 'Internal') return (
			<Redirect to="/flexicon/customers" />
		)

		return (
			<div className='login-page'>
				<Paper style={{
					display: 'inline-block',
					margin: 50,
					width: 400,
					height: 380,
					padding: 20,
				}}
				zDepth={2}
				>
					<h2>Inloggen</h2>
					<LoginForm onSubmit={this.handleSubmit} />

					<p onClick={this.handleOpen} style={{ position: 'relative', top: 30, fontSize: 14, color: '#5e5d5e', cursor: 'pointer'}}>
						Wachtwoord vergeten?
					</p>
					{this.props.error && <p style={{color:'red'}}>{this.props.error}</p>}
					<Dialog
						title="Wachtwoord vergeten"
						actions={actions}
						modal={false}
						open={this.state.dialog}
						onRequestClose={this.handleClose}
					>
					<div className="ForgotPassword">
						<p>Je bent je wachtwoord vergeten? Geen probleem! <br/>
							Vul hieronder je e-mailadres in en we sturen een e-mail waarmee je een nieuw wachtwoord kunt aanmaken.</p>
							<form onSubmit={ this.handleForgotPasswordFormSubmit }>
								<div>
				          <TextField
				            style={{
				              position: 'relative',
				              top: -15,
				            }}
				            floatingLabelStyle={{
				              color: '#9A9A98',
				            }}
				            floatingLabelFocusStyle={{
				              color: '#F09517',
				            }}
				            underlineStyle={{
				              borderColor: '#F09517',
				            }}
				            underlineFocusStyle={{
				              borderColor: '#F09517',
				            }}
				            floatingLabelText="Je e-mailadres"
				            type="text"
				            name="email"
				            id="email"
				            value={
				              this.state.email
				            }
				            onChange={ this.handleChange }
				          />
				        </div>
							</form>
					</div>
					</Dialog>
				</Paper>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
    error: state.login.error,
		user: state.user
	}
}

export default connect(mapStateToProps, {login, forgotPassword, getCurrentUser})(LoginPage)
