//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

//MaterialUI
  //Components
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton'

//Actions
import {createContact} from '../actions/contacts'


class contactCreator extends PureComponent {
  state = {
    role: 'External',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    this.props.createContact(this.props.match.params.companyId, this.state)
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  updateCheck() {
    this.setState((oldState) => ({
        role: oldState.role === 'Internal' ? 'External' : 'Internal'
    }) )
  }

 render() {


  return (
    <div style={{ textAlign: 'center'}}>
      <Paper style={{
        position: 'relative',
        top: 80,
        botom: 10,
        margin: 'auto',
        width: '50%',
        overflow: 'scroll',
      }}>
        <Subheader style={{ fontSize: 40 }}>Create Contact</Subheader>
        <Divider style={{ padding: 1, marginBottom: 1 }}/>
        <form name='Create Contact' onSubmit={this.handleSubmit}>
          <TextField
            floatingLabelFocusStyle={{ color: '#F09517' }}
            underlineFocusStyle={{ borderColor: '#F09517' }}
            name='firstName'
            floatingLabelText="First Name:"
            value={this.state.firstName || ''}
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            floatingLabelFocusStyle={{ color: '#F09517' }}
            underlineFocusStyle={{ borderColor: '#F09517' }}
            name='lastName'
            floatingLabelText="Last Name:"
            value={this.state.lastName || ''}
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            floatingLabelFocusStyle={{ color: '#F09517' }}
            underlineFocusStyle={{ borderColor: '#F09517' }}
            name='email'
            floatingLabelText="Email:"
            value={this.state.email || ''}
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            floatingLabelFocusStyle={{ color: '#F09517' }}
            underlineFocusStyle={{ borderColor: '#F09517' }}
            name='telephoneNumber'
            floatingLabelText="Telephone Number:"
            value={this.state.telephoneNumber || ''}
            onChange={this.handleChange}
            style={{ marginBottom: 10 }}
          />
          <br/>
          <br/>
          <div style={{ display: "inline-block", textAlign:"center" }}>
            <Checkbox
              label="Internal"
              iconStyle={{ fill: '#F09517' }}
              checked={this.state.role === 'Internal' ? true : false }
              onCheck={this.updateCheck.bind(this)}
            />
          </div>
          <br/>
          <br/>
          <br/>
          <div style={{display: "inline-block"}}>
            <RaisedButton type="submit" label="Save" backgroundColor='#F09517'/ >
          </div>
          <br/>
          <br/>
        </form>
      </Paper>
    </div>
    )
 }
}

const mapStateToProps = function (state) {
	return {
    user: state.user,
	}
}


export default withRouter(
  connect(mapStateToProps, {createContact})(contactCreator)
)
