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

  //Icons
    import Account from 'material-ui/svg-icons/action/account-circle'
    import Business from 'material-ui/svg-icons/communication/business'
    import Phone from 'material-ui/svg-icons/communication/phone'
    import Adres from 'material-ui/svg-icons/maps/add-location'
    import City from 'material-ui/svg-icons/social/location-city'
    import Country from 'material-ui/svg-icons/social/public'

  //Colors


  //Actions



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
    onChange: PropTypes.func.isRequired,
  }
  state = {
  }

  updateCheck() {
   this.setState((oldState) => {
     return {
       checked: !oldState.checked,
     };
   });
 }


  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    this.props.onChange('Create Contact', this.state)
  }

  // componentDidMount() {
  //   this.props.onRef(this)
  // }

	render() {

		return (
      <div Paper style={{
        position: 'relative',
        top: 80,
        botom: 10,
        margin: 'auto',
        width: '50%',
        overflow: 'scroll',
      }}>
      <h1
        style={{
          position: 'relative',
          top: 10,
        }}
      >Create Contact</h1>
      <Divider/>
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
          value={this.state.Bedrijfsnaam || ''}
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
          value={this.state.Contactpersoon || ''}
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
          name='Telefoonnummer'
          floatingLabelText="Telefoonnummer:"
          value={this.state.Telefoonnummer || ''}
          onChange={this.handleChange}
          style={{
            marginBottom: 10,
          }}
        />
        <br/>

        <div style={{display: "inline-block",textAling:"center"}}>
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
        </form>
      </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
	}
}

export default connect(mapStateToProps)(contactCreator)
