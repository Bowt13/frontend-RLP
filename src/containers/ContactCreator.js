//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
// import PropTypes from 'prop-types'

//MaterialUI
  //Components
    // import TextField from 'material-ui/TextField';
    // import RaisedButton from 'material-ui/RaisedButton'
    import Paper from 'material-ui/Paper';
  //   import Divider from 'material-ui/Divider';
  //   import Checkbox from 'material-ui/Checkbox';
  //   import Subheader from 'material-ui/Subheader';
  //
  // //Icons
  //   import Account from 'material-ui/svg-icons/action/account-circle'
  //   import Business from 'material-ui/svg-icons/communication/business'
  //   import Phone from 'material-ui/svg-icons/communication/phone'
  //   import Adres from 'material-ui/svg-icons/maps/add-location'
  //   import City from 'material-ui/svg-icons/social/location-city'
  //   import Country from 'material-ui/svg-icons/social/public'
  //
  // //Colors


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

    <Subheader style={{
      fontSize: 40,
    }}>Create Contact</Subheader>
    <Divider style={{
      padding: 1,
      marginBottom: 1,
    }}/>
      <form
        name='Create Contact'
      >
      <TextField
        floatingLabelFocusStyle={{
          color: '#F09517',
        }}
        underlineFocusStyle={{
          borderColor: '#F09517',
        }}
        firstName='First Name'
        floatingLabelText="First Name:"
        value={this.state.firstName || ''}
        onChange={this.handleChange}
      />
      <br/>


      <TextField
        floatingLabelFocusStyle={{
          color: '#F09517',
        }}
        underlineFocusStyle={{
          borderColor: '#F09517',
        }}
        lastName='Last Name'
        floatingLabelText="Last Name:"
        value={this.state.lastName || ''}
        onChange={this.handleChange}
      />
      <br/>


      <TextField
        floatingLabelFocusStyle={{
          color: '#F09517',
        }}
        underlineFocusStyle={{
          borderColor: '#F09517',
        }}
        name='emailAdres'
        floatingLabelText="Email Adres:"
        value={this.state.emailAdres || ''}
        onChange={this.handleChange}
      />
      <br/>

      <TextField
        floatingLabelFocusStyle={{
          color: '#F09517',
        }}
        underlineFocusStyle={{
          borderColor: '#F09517',
        }}
        name='telephoneNumber'
        floatingLabelText="Telephone Number:"
        value={this.state.telephoneNumber || ''}
        onChange={this.handleChange}
        style={{
          marginBottom: 10,
        }}
      />
      <br/>

      <div style={{display: "inline-block",textAlign:"center"}}>
        <Checkbox
          label="Internal"
        iconStyle={{
          fill: '#F09517'
        }}
        />
        <br/>
        <br/>
      </div>

      <div style={{display: "inline-block"}}>
      <RaisedButton label="Save"/>
      </div>
      <ContactForm onSubmit={this.creataContact}/>
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

const mapStateToProps = function (state) {
	return {
    // contacts: state.contacts
	}
}

export default connect(mapStateToProps, {createContact})(contactCreator)
