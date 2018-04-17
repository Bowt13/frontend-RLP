//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

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

// const styles = {
//   block: {
//     maxWidth: 250,
//   },
//   checkbox: {
//     marginBottom: 16,
//   },
// }
//
// const style = {
//   margin: 12,
// };


class contactCreator extends PureComponent {
  state = {}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createContact(this.state)
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

 render() {
   console.log(this.state);

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
          <div style={{ display: "inline-block", textAlign:"center" }}>
            <Checkbox label="Internal" iconStyle={{ fill: '#F09517' }}/>
          </div>
          <br/>
          <br/>
          <br/>
          <div style={{display: "inline-block"}}>
            <RaisedButton type="submit" label="Save"/ >
          </div>
        </form>
      </Paper>
    </div>
    )
 }
}

// <Paper
//   style={{
//   position: 'relative',
//   top: 80,
//   botom: 10,
//   left: '25%',
//   width: '50%',
//   }}
// >
//   <form onSubmit={this.handleSubmit}>
//     <div>
//       <input name= "firstName" placeholder="Insert First Name"
//       value={ this.state.firstName || '' } onChange={ this.handleChange } />
//     </div>
//     <div>
//       <input name= "lastName" placeholder="Insert Last Name"
//       value={ this.state.lastName || '' } onChange={ this.handleChange } />
//     </div>
//     <button type="submit">Save</button>
//   </form>
// </Paper>

// <RaisedButton label="Save"/>

const mapStateToProps = function (state) {
	return {
    // contacts: state.contacts
	}
}

export default connect(mapStateToProps, {createContact})(contactCreator)
