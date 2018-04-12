//Dependencies
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

//MaterialUI
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class ForgotForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
    console.log('Hello');
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

	handleClick = () => {
		console.log(this.props);
		const { history } = this.props
		history.push(`/login`)
	}

	render() {
		return (
			<form onSubmit={ this.handleSubmit }>
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

          <RaisedButton
            label="Verzenden"
						backgroundColor='#F09517'
            style={{
              postion: 'relative',
              margin: 30,
              marginTop: 5,
              backgroundColor: '#9A9A98',
            }}
            type="submit"
          />

					<RaisedButton
	          label="Terug naar inloggen"
	          style={
	            {
								backgroundColor:'#9A9A98',
	            }
	          }
						href='/login'
	        />

        </div>
			</form>
		)
	}
}
