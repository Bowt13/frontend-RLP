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

  //Icons
    import Account from 'material-ui/svg-icons/action/account-circle'
    import Business from 'material-ui/svg-icons/communication/business'
    import Phone from 'material-ui/svg-icons/communication/phone'
    import Adres from 'material-ui/svg-icons/maps/add-location'
    import City from 'material-ui/svg-icons/social/location-city'
    import Country from 'material-ui/svg-icons/social/public'

  //Colors


//Actions


class AfleverAdresForm extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }
  state = {
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    this.props.onChange('AfleverAdres', this.state)
  }

  componentDidMount() {
    this.props.onRef(this)
  }

	render() {

		return (
      <div style={{
        textAlign: 'center',
        float: 'left',
      }}>
      <h1
        style={{
          position: 'relative',
          top: 10,
        }}
      >Afleveradres</h1>
      <Divider
        style={{
          height: 4,
          width: 350,
        }}
      />
        <form
          name='AfleverAdres'
        >
        <Business
          style={{
            position: 'relative',
            top: 5,
            left: -15,
          }}
        />
        <TextField
          floatingLabelFocusStyle={{
            color: '#F09517',
          }}
          underlineFocusStyle={{
            borderColor: '#F09517',
          }}
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
          floatingLabelFocusStyle={{
            color: '#F09517',
          }}
          underlineFocusStyle={{
            borderColor: '#F09517',
          }}
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
          floatingLabelFocusStyle={{
            color: '#F09517',
          }}
          underlineFocusStyle={{
            borderColor: '#F09517',
          }}
          name='Adres1'
          floatingLabelText="Adres 1:"
          value={this.state.Adres1 || ''}
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
          floatingLabelFocusStyle={{
            color: '#F09517',
          }}
          underlineFocusStyle={{
            borderColor: '#F09517',
          }}
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
          floatingLabelFocusStyle={{
            color: '#F09517',
          }}
          underlineFocusStyle={{
            borderColor: '#F09517',
          }}
          name='Stad'
          floatingLabelText="Stad:"
          value={this.state.Stad || ''}
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

export default connect(mapStateToProps)(AfleverAdresForm)
