import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/users'
import {Redirect} from 'react-router-dom'
import LoginForm from '../components/LoginForm'

//Image
import logo from './logo.png'

//MaterialUI
  //Components
	import Paper from 'material-ui/Paper'


class LoginPage extends PureComponent {

	handleSubmit = (data) => {
		this.props.login(data.email, data.password)
	}

	render() {
		// if (this.props.currentUser) return (
		// 	<Redirect to="/" />
		// )

		return (
			<div className='login-page'>

				<header className="Header" style={{ backgroundColor: '#5e5d5e', height: 100, }}>
					<img src={ logo } style={{ margin: 10, }}/>
				</header>

				<Paper style={{
					display: 'inline-block',
					margin: 50,
					width: '30%',
					padding: 20,
				}}
				zDepth={2}
				>
					<h2>Inloggen</h2>
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
