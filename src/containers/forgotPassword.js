//Dependencies
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

//Components
import ForgotForm from '../components/ForgotForm'

//Image
import logo from './logo.png'

//Actions
import { forgotPassword } from '../actions/forgotPassword'

//MaterialUI
import Paper from 'material-ui/Paper'

class ForgotPassword extends PureComponent {

  handleSubmit = (data) => {
    this.props.forgotPassword(data.email)
    // <Redirect to="/passwordrequest"
  }

  render() {
    return (
			<div className="ForgotPassword">

				<header className="Header" style={{ backgroundColor: '#5e5d5e', height: 100, }}>
          <img src={ logo } style={{ margin: 10, }}/>
				</header>

        <Paper
          style={{
            display: 'inline-block',
            height: 350,
            width: 450,
            padding: 20,
            margin: 50,
            textAlign: 'center',
            lineHeight: 1.6,
          }}
          zDepth={2}
          >
    				<h2>Wachtwoord vergeten</h2>
    				<p>Je bent je wachtwoord vergeten? Geen probleem! <br/>
              Vul hieronder je e-mailadres in en we sturen een e-mail waarmee je een nieuw wachtwoord kunt aanmaken.</p>

    				<ForgotForm onSubmit={ this.handleSubmit } />
        </Paper>

			</div>
		)
  }
}

export default connect(null, { forgotPassword })(ForgotPassword)
