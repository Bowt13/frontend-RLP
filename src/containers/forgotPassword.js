//Dependencies
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ForgotForm from '../components/ForgotForm'
import { forgotPassword } from '../actions/forgotPassword'

class ForgotPassword extends PureComponent {

  handleSubmit = (data) => {
    this.props.forgotPassword(data.email)
    // <Redirect to="/passwordrequest"
  }

  render() {
    return (
			<div className="ForgotPassword">
				<header className="Header">
				</header>
				<h2>Wachtwoord vergeten</h2>
				<p>Je hebt je wachtwoord vergeten? Geen probleem! <br/>
          Vul hieronder je e-mailadres in en we sturen een e-mail warmee je een nieuw wachtwoord kunt aanmaken.</p>

				<ForgotForm onSubmit={ this.handleSubmit } />

			</div>
		)
  }
}

export default connect(null, { forgotPassword })(ForgotPassword)
