//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

//MaterialUI
  //Components
    import DatePicker from 'material-ui/DatePicker';
    import RaisedButton from 'material-ui/RaisedButton'
    import Paper from 'material-ui/Paper';
    import Divider from 'material-ui/Divider';
    import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

  //Icons
    import DateRange from 'material-ui/svg-icons/action/date-range'
    import Shipping from 'material-ui/svg-icons/maps/local-shipping'

  //Colors


//Actions


class OrderRemarkForm extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }
  state = {
    DeliveryTime: 14,
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleDate = (value, name) => {
    this.setState({
      [name]: value
    })
  }

  handleChangeRadio = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  onClick = () => {
    this.props.onChange('OrderAfleverInfo', this.state)
  }

  formatDate = ( date ) => {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return ('' + (d <= 9 ? '0' + d : d) + '-' + (m<=9 ? '0' + m : m) + '-' + y)
  }

  disableWeekends = (date) => {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  componentWillMount() {
    const {DeliveryTime} = this.state
    const CurrentDate = new Date()
    const MinimalDeliveryDate = new Date(Date.parse(CurrentDate) + (DeliveryTime * 86400000))
    this.props.onRef(this)
    this.setState({
      minDate: new Date(Date.parse(CurrentDate) + (DeliveryTime * 86400000))
    })
    console.log(MinimalDeliveryDate)
  }

	render() {
    const {DeliveryTime, LeverDatum} = this.state
    const CurrentDate = new Date()
    const MinimalDeliveryDate = LeverDatum

		return (
      <div style={{
        width: '90%',
        display: 'inline-block',
        textAlign: 'center',
        float: 'left',
        position: 'relative',
        top: 0,
        marginLeft: 65,
        marginBottom: 10,
      }}>
      <Paper>
        <h1
          style={{
            textAlign: 'left',
            position: 'relative',
            top: 10,
            left: 60,
          }}
        >Aflever informatie</h1>
        <Divider
          style={{
            height: 4,
          }}
        />
            <form
              name='AfleverInfo'
            >
              <DateRange
                style={{
                  position: 'relative',
                  top: 5,
                  left: -15,
                }}
              />
              <DatePicker
                name='LeverDatum'
                floatingLabelText="Leverdatum:"
                value={ this.state.LeverDatum || "" }
                onChange={ (x, event) => this.handleDate(event, 'LeverDatum') }
                formatDate={(date) => this.formatDate(date)}
                shouldDisableDate={ this.disableWeekends }
                minDate={ this.state.minDate }
                autoOk={ true }
                style={{
                  position: 'relative',
                  display: 'inline',
                }}
                textFieldStyle={{
                  width: '90%',
                }}
              />
              <br/>
              <Shipping
                style={{
                  position: 'relative',
                  top: -43,
                  left: -15,
                }}
              />
              <RadioButtonGroup name="shipmentType"
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '90%',
                  textAlign:'left',
                }}
              >
                <RadioButton
                  name= 'DeliveryType'
                  value="PakketDienst"
                  label="Pakketdienst € 29,50 - bij schade kosteloos herstel."
                  style={{
                    marginBottom: 10,
                  }}
                  onClick={_ => this.handleChangeRadio('DeliveryType', 'PakketDienst')}
                />
                <RadioButton
                  value="PostNL"
                  label="POSTNL € 12,50 - geen reclamering bij schade mogelijk."
                  style={{
                    marginBottom: 10,
                  }}
                  onClick={_ => this.handleChangeRadio('DeliveryType', 'PostNL')}
                />
                <RadioButton
                  value="DirecteKoerier"
                  label="Directe koerier vanaf € 29,50 regio amsterdam,
                    buiten amsterdam prijs op aanvraag -
                    bij schade kosteloos herstel."
                  style={{
                    width: '100%',
                    marginBottom: 10,
                  }}
                  onClick={_ => this.handleChangeRadio('DeliveryType', 'DirecteKoerier')}
                />
              </RadioButtonGroup>
              <br/>
            </form>
        </Paper>
        <br/>
      </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
	}
}

export default connect(mapStateToProps)(OrderRemarkForm)
