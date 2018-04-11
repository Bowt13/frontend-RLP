import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {signup} from '../actions/users'
import {Redirect} from 'react-router-dom'
import SignupForm from './SignupForm'

//MaterialUI
  //Components
	import Paper from 'material-ui/Paper'


class SignupPage extends PureComponent {

	handleSubmit = (data) => {
		this.props.postSignup(data.email, data.password)
	}

	render() {
		if (this.props.signup.success) return (
			<Redirect to="/" />
		)

		return (
			<div className='signup-page'>
				<Paper style={{
					position: 'relative',
					top: 80,
					botom: 10,
					left: '25%',
					width: '50%',
					overflow: 'scroll',
					padding: '20px',
				}}>
					<h2>Signup</h2>
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
