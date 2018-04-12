//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


//MaterialUI
  //Components
    import TextField from 'material-ui/TextField';
    import RaisedButton from 'material-ui/RaisedButton'
    import Paper from 'material-ui/Paper';
    import Divider from 'material-ui/Divider';

  //Icons
    import Account from 'material-ui/svg-icons/action/account-circle'
    import Business from 'material-ui/svg-icons/communication/business'
    import Phone from 'material-ui/svg-icons/communication/phone'
    import Adres from 'material-ui/svg-icons/maps/add-location'
    import City from 'material-ui/svg-icons/social/location-city'
    import Country from 'material-ui/svg-icons/social/public'

  //Colors


//Actions


class BezoekAdresForm extends PureComponent {
  state = {
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  componentWillMount() {
  }

	render() {

		return (
      <div style={{
        display: 'inline-block',
        textAlign: 'center',
      }}>
      <h1
        style={{
          position: 'relative',
          top: 10,
        }}
      >Bezoekadres</h1>
      <Divider
        style={{
          height: 4,
          width: 350,
        }}
      />
        <form
          name='BezoekAdres'
        >
        <Business
          style={{
            position: 'relative',
            top: 5,
            left: -15,
          }}
        />
        <TextField
          name='Bedrijfsnaam'
          floatingLabelText="Bedrijfsnaam:"
          value={this.state.Bedrijfsnaam || ''}
          onChange={this.handleChange}
        />
        <br/>
        <Account
          style={{
            position: 'relative',
            top: 5,
            left: -15,
          }}
        />
        <TextField
          name='Contactpersoon'
          floatingLabelText="Contactpersoon:"
          value={this.state.Contactpersoon || ''}
          onChange={this.handleChange}
        />
        <br/>
        <Adres
          style={{
            position: 'relative',
            top: 5,
            left: -15,
          }}
        />
        <TextField
          name='Adres1'
          floatingLabelText="Adres 1:"
          value={this.state.Adres1 || ''}
          onChange={this.handleChange}
        />
        <br/>
        <Adres
          style={{
            position: 'relative',
            top: 5,
            left: -15,
          }}
        />
        <TextField
          name='Adres2'
          floatingLabelText="Adres 2:"
          value={this.state.Adres2 || ''}
          onChange={this.handleChange}
        />
        <br/>
        <City
          style={{
            position: 'relative',
            top: 5,
            left: -15,
          }}
        />
        <TextField
          name='Postcode'
          floatingLabelText="Postcode:"
          value={this.state.Postcode || ''}
          onChange={this.handleChange}
        />
        <br/>
        <Country
          style={{
            position: 'relative',
            top: 5,
            left: -15,
          }}
        />
        <TextField
          name='Land'
          floatingLabelText="Land:"
          value={this.state.Land || ''}
          onChange={this.handleChange}
        />
        <br/>
        <Phone
          style={{
            position: 'relative',
            top: 5,
            left: -15,
          }}
        />
        <TextField
          name='Telefoonnummer'
          floatingLabelText="Telefoonnummer:"
          value={this.state.Telefoonnummer || ''}
          onChange={this.handleChange}
        />
        <br/>
        </form>
      </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
	}
}

export default connect(mapStateToProps)(BezoekAdresForm)
