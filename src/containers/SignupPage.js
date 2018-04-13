import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../actions/users'
import { Redirect } from 'react-router-dom'
import SignupForm from '../components/SignupForm'
import {withRouter} from 'react-router'

//Image
import logo from './logo.png'

//MaterialUI
  //Components
	import Paper from 'material-ui/Paper'


class SignupPage extends PureComponent {

	handleSubmit = (data) => {
		this.props.postSignup(this.props.match.params.jwt, data.password)
	}

	render() {

		const { authenticated } = this.props

		if(!authenticated) return (
			<div>
				<Paper style={{
					display: 'inline-block',
					margin: 50,
					width: 450,
					height: 300,
					padding: 20,
					textAlign: 'center',
					lineHeight: 1.6,
				}}
				zDepth={2}
				>
					<h2>Het lijkt erop dat je geen geregistreerde klant bent.</h2>
					<p>Als je een uitnodiging van Flexicon hebt gekregen en de link je naar deze pagina brengt,
						neem alsjeblieft contact op met de contactpersoon in de e-mail.</p>
				</Paper>
		</div>
	)

		if (this.props.signup.success) return (
			<Redirect to="/flexicon/create/order" />
		)

		return (
			<div className='signup-page'>

				<Paper style={{
					display: 'inline-block',
					margin: 50,
					width: 450,
					height: 430,
					padding: 20,
					textAlign: 'center',
					lineHeight: 1.6,
				}}
				zDepth={2}
				>
					<h2>Welkom bij de Flexicon Klanten Order Admin tool!</h2>
					<p>Kies alsjeblieft een wachtwoord om de registratie van je account te voltooien.</p>
					<SignupForm onSubmit={this.handleSubmit} />
			    {this.props.signup.error && <p style={{color:'red'}}>{this.props.signup.error}</p>}
				</Paper>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		authenticated: state.user !== null,
		signup: state.signup
	}
}

export default withRouter(connect(mapStateToProps, {postSignup: signup})(SignupPage))
