//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

//MaterialUI
  //Components
    import TextField from 'material-ui/TextField';
    import RaisedButton from 'material-ui/RaisedButton'
    import Paper from 'material-ui/Paper';
    import Divider from 'material-ui/Divider';
    import Checkbox from 'material-ui/Checkbox';
    import Subheader from 'material-ui/Subheader';

  //Icons
    import Account from 'material-ui/svg-icons/action/account-circle'
    import Business from 'material-ui/svg-icons/communication/business'
    import Phone from 'material-ui/svg-icons/communication/phone'
    import Adres from 'material-ui/svg-icons/maps/add-location'
    import City from 'material-ui/svg-icons/social/location-city'
    import Country from 'material-ui/svg-icons/social/public'

  //Colors


  //Actions
  import {getContacts, createContact} from '../actions/contacts'

  //Components
  import ContactForm from '../components/ContactForm'



const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
}

const style = {
  margin: 12,
};


class contactCreator extends PureComponent {
static propTypes = {
   contact: PropTypes.arrayOf(PropTypes.shape({
   id: PropTypes.number.isRequired,
   firstName: PropTypes.string.isRequired,
   lastName: PropTypes.string.isRequired,
   email: PropTypes.string.isRequired,
   telephoneNumber: PropTypes.string.isRequired,
 })).isRequired,
 };

 createContact = (contact) => {
   this.props.creataContact(contact)
 }

 componentWillMount = (contact) => {
   this.props.createContact(contact)
 }

 render() {
   const {contact} = this.props
   console.log(contact);


  return (
    <div style={{
      textAlign: 'center',
    }}>

      <Paper
        style={{
        position: 'relative',
        top: 80,
        botom: 10,
        left: '25%',
        width: '50%',
        }}
      >
      <ContactForm onSubmit={this.createContact}/>
      </Paper>
    </div>
    )
 }
}

const mapStateToProps = function (state) {
	return {
    contact: state.contact
	}
}

export default connect(mapStateToProps, {createContact})(contactCreator)
