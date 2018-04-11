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
						floatingLabelText="Email"
						value={this.state.Email || ''}
						name='Email'
						type='Email'
						style={
							{
								position: 'relative',
								left: 15,
							}
						}
						onChange={this.handleChange}
					/>
				</div>

				<div>
					<TextField
						floatingLabelText="Password"
						value={this.state.Password || ''}
						name='Password'
						type='Password'
						style={
							{
								position: 'relative',
								left: 15,
							}
						}
						onChange={this.handleChange}
					/>
				</div>

				<div>
					<TextField
						floatingLabelText="Confirm Password"
						value={this.state.ConfirmPassword || ''}
						name='ConfirmPassword'
						type='Password'
						style={
							{
								position: 'relative',
								left: 15,
							}
						}
						onChange={this.handleChange}
					/>
				</div>

				{
					this.state.Password &&
					this.state.ConfirmPassword &&
					this.state.Password !== this.state.ConfirmPassword &&
					<p style={{color:'red'}}>The passwords do not match!</p>
				}

				<RaisedButton
          label="Signup"
          backgroundColor='#616161'
          labelColor='#ffffff'
          style={
            {
              width:'10%',
              position: 'relative',
              left: 15,
            }
          }
          onClick={this.handleSubmit}
        />
			</form>
		)
	}
}
