import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../actions/users'
import { Redirect } from 'react-router-dom'
import SignupForm from '../components/SignupForm'

//Image
import logo from './logo.png'

//MaterialUI
  //Components
	import Paper from 'material-ui/Paper'


class SignupPage extends PureComponent {

	handleSubmit = (data) => {
		this.props.postSignup(data.password)
	}

	render() {
		if (this.props.signup.success) return (
			<Redirect to="/create/order" />
		)

		return (
			<div className='signup-page'>

				<header className="Header" style={{ backgroundColor: '#5e5d5e', height: 100, }}>
					<img src={ logo } style={{ margin: 10, }}/>
				</header>

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
					<p>Kies alsteblieft een wachtwoord om de registratie van je account te voltooien.</p>
					<SignupForm onSubmit={this.handleSubmit} />
			    {this.props.signup.error && <p style={{color:'red'}}>{this.props.signup.error}</p>}
				</Paper>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		signup: state.signup
	}
}

export default connect(mapStateToProps, {postSignup: signup})(SignupPage)
