//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

//MaterialUI
  //Components
    import TextField from 'material-ui/TextField'
    import RaisedButton from 'material-ui/RaisedButton'
    import Paper from 'material-ui/Paper';
    import Divider from 'material-ui/Divider';
  //Icons
    import DateRange from 'material-ui/svg-icons/action/date-range'
    import Receipt from 'material-ui/svg-icons/action/receipt'
  //Colors


//Actions
import { getBonnummer } from '../../actions/orders'

//Components

class OrderInfo extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }

  state = {}

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  onClick = () => {
    this.props.onChange('OrderInfo', {
      Bonnummer: this.props.bunnummer,
      currentDate: this.state.currentDate[0]
    })
  }

  formatDate = ( date ) => {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return ('' + (d <= 9 ? '0' + d : d) + '-' + (m<=9 ? '0' + m : m) + '-' + y)
  }

  componentWillMount() {
    this.props.getBonnummer()
    this.props.onRef(this)
    this.setState({
      currentDate: JSON.stringify(this.formatDate(new Date())).substr(1,10).split('T', 1)
    })
  }

	render() {

    const { bonnummer } = this.props

		return (
      <div style={{
        textAlign: 'center',
      }}>
        <Paper
          style={{
            width: '100%',
            float: 'left',
          }}
        >
          <div style={{
            float: 'left',
          }}>
            <Receipt
              style={{
                position: 'relative',
                top: 4,
                marginRight: 15,
                marginLeft: 65,
                color: '#F09517',
              }}
            />
            <TextField
              name='Bonnummer'
              floatingLabelText="Bonnummer:"
              floatingLabelFixed={true}
              value={this.props.bonnummer}
              style={{
                position: 'relative',
                margin: 5,
                height: 80,
                lineHeight: 8,
              }}
              floatingLabelStyle={{
                fontSize: 30,
              }}
              inputStyle={{
                fontSize: 30,
              }}
            />
            <DateRange
              style={{
                position: 'relative',
                top: 4,
                marginRight: 15,
                marginLeft: 65,
                color: '#F09517',
              }}
            />
            <TextField
              floatingLabelText="Datum:"
              floatingLabelFixed={true}
              value={`${this.state.currentDate}`}
              style={{
                position: 'relative',
                height: 80,
                lineHeight: 8,
              }}
              floatingLabelStyle={{
                fontSize: 30,
              }}
              inputStyle={{
                fontSize: 30,
              }}
            />
          </div>
        </Paper>
      </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
    bonnummer: state.bonnummer.orderNumber
	}
}

export default connect(mapStateToProps,{ getBonnummer })(OrderInfo)
