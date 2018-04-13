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


//Components

class OrderInfo extends PureComponent {
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

  formatDate = ( date ) => {
    console.log(date)
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return ('' + (d <= 9 ? '0' + d : d) + '-' + (m<=9 ? '0' + m : m) + '-' + y)
  }

  componentWillMount() {
    this.setState({
      Bonnummer: 876534567890,
      currentDate: JSON.stringify(this.formatDate(new Date())).substr(1,10).split('T', 1)
    })
  }

	render() {
		return (
      <div style={{
        textAlign: 'center',
      }}>
        <Paper
          style={{
            width: '100%',
            marginBottom: 25,
          }}
        >
          <Receipt
            style={{
              position: 'relative',
              top: 5,
              left: -260,
            }}
          />
          <TextField
            name='Bonnummer'
            floatingLabelText="Bonnummer:"
            floatingLabelFixed={true}
            style={{
              position: 'relative',
              left: -250,
              width: 350,
            }}
            value={this.state.Bonnummer}
          />
          <DateRange
            style={{
              position: 'relative',
              top: 5,
              left: -210,
            }}
          />
          <TextField
            floatingLabelText="Datum:"
            value={`${this.state.currentDate}`}
            style={{
              position: 'relative',
              left: -200,
            }}
          />
        </Paper>
      </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
	}
}

export default connect(mapStateToProps)(OrderInfo)
