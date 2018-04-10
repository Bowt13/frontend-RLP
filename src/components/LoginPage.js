import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/users'
import {Redirect} from 'react-router-dom'
import LoginForm from './LoginForm'

//MaterialUI
  //Components
	import Paper from 'material-ui/Paper'


class LoginPage extends PureComponent {

	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

	render() {
		if (this.props.currentUser) return (
			<Redirect to="/" />
		)

		return (
			<div className='login-page'>
				<Paper style={{
					position: 'relative',
					top: 80,
					botom: 10,
					left: '25%',
					width: '50%',
					overflow: 'scroll',
					padding: '20px',
				}}>
					<h2>Login</h2>
					<LoginForm onSubmit={this.handleSubmit} />
			    {this.props.error && <p style={{color:'red'}}>{this.props.error}</p>}
				</Paper>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
    error: state.login.error
	}
}

export default connect(mapStateToProps, {login})(LoginPage)
