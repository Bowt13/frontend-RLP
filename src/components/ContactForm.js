//Dependencies

import React, {PureComponent} from 'react'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

class ContactForm extends PureComponent {
state = {}

handleSubmit = (e) => {
	e.preventDefault()
		this.props.onSubmit(this.state)
	}

  handleChange = event => {
  const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
  		return (
  			<form onSubmit={this.handleSubmit}>
  				<div>
  					<input name= "contactFirstName" placeholder="Insert First Name" id= "contactFirstName" value={
  						this.state.contactFirstName || ''
 					} onChange={ this.handleChange } />

          </div>

  				<div>
          	<input name= "contactLastName" placeholder="Insert Last Name" id= "contactLastName" value={
  						this.state.contactLastName || ''
  					} onChange={ this.handleChange } />
  				</div>
  				<button type="submit">Save</button>
  			</form>
  		)
  	}
  }

export default ContactForm
