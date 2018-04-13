import React, {PureComponent} from 'react'


//MaterialUI
  //Components
	import TextField from 'material-ui/TextField'
	import RaisedButton from 'material-ui/RaisedButton'


export default class SignupForm extends PureComponent {

	state = {}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

	render() {
		return (
			<form>

				<div>
					<TextField
						floatingLabelText="Wachtwoord"
						value={this.state.password || ''}
						name='password'
						type='Password'
						style={
							{
								position: 'relative',
								top: -8,
							}
						}
						floatingLabelStyle= {{
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
						onChange={this.handleChange}
					/>
				</div>

				<div>
					<TextField
						floatingLabelText="Wachtwoord opnieuw"
						value={this.state.confirmPassword || ''}
						name='confirmPassword'
						type='Password'
						style={
							{
								position: 'relative',
								top: -15,
							}
						}
						floatingLabelStyle= {{
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
						onChange={this.handleChange}
					/>
				</div>

				{
					this.state.password &&
					this.state.password.length >= 8 &&
					this.state.confirmPassword &&
					this.state.password !== this.state.confirmPassword &&
					<p style={{color:'red', fontSize: 14, margin: 0,}}>De wachtwoorden komen niet overeen!</p>
				}

				{ this.state.password &&
					this.state.password.length < 8 &&
					<p style={{color:'red', fontSize: 14, margin: 0,}}>Wachtwoord moet minstens 8 tekens lang zijn.</p>
				}

				<RaisedButton
          label="Wachtwoord instellen"
          style={
            {
							position: 'relative',
							margin: 30,
							backgroundColor:'#9A9A98',
							marginTop: 8,
            }
          }
          onClick={this.handleSubmit}
        />
			</form>
		)
	}
}
