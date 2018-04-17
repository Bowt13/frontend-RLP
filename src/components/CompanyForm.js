//Dependencies
import React, {PureComponent} from 'react'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

class CompanyForm extends PureComponent {
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
  					<input name= "companyName" placeholder="Insert Company Name" id= "companyName" value={
  						this.state.companyName || ''
  					} onChange={ this.handleChange } />
  				</div>

  				<div>
          	<input name= "companyLogo" placeholder="Link to Company Logo" id= "companyLogo" value={
  						this.state.companyLogo || ''
  					} onChange={ this.handleChange } />
  				</div>


  				<button type="submit">Save</button>
  			</form>
  		)
  	}
  }

export default CompanyForm
