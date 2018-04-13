//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

//MaterialUI
  //Components
    import TextField from 'material-ui/TextField'
    import RaisedButton from 'material-ui/RaisedButton'
    import Checkbox from 'material-ui/Checkbox'
    import Paper from 'material-ui/Paper'
    import Divider from 'material-ui/Divider'
    import Business from 'material-ui/svg-icons/communication/business'
  //Colors

//Components
  import BezoekAdresForm from './BezoekAdresForm'
  import FactuurAdresForm from './FactuurAdresForm'
  import AfleverAdresForm from './AfleverAdresForm'

//Actions


class OrderAdressForm extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }
  state = {
    factuurAdres: false,
    afleverAdres: false,
  }

  updateCheckFA() {
    this.setState((oldState) => {
      return {
        factuurAdres: !oldState.factuurAdres,
      }
    })
    if(this.state.afleverAdres === true) {
      this.updateCheckAA()
    }
  }

  updateCheckAA() {
    this.setState((oldState) => {
      return {
        afleverAdres: !oldState.afleverAdres,
      }
    })
  }

  handleChange = (type, state) => {
    console.log(type)
    this.setState({
      [type]: state
    })
    console.log(this.state)
  }

  onClick = () => {
    this.bezoekAdresForm.handleSubmit()
    {this.state.factuurAdres &&
      this.factuurAdresForm.handleSubmit()
    }
    {this.state.afleverAdres &&
      this.afleverAdresForm.handleSubmit()
    }
    this.props.onChange('OrderAdres', this.state)
  }

  componentDidMount() {
    this.props.onRef(this)
  }

	render() {
    const {handleChange} = this
		return (
      <div style={{
        display: 'inline-block',
      }}>
        <Paper
          style={{
            display: 'inline',
            float: 'left',
            position: 'relative',
            left: -50,
            height: 660,
            width: 350,
           }}
        >
          <BezoekAdresForm onChange={handleChange} onRef={ref => (this.bezoekAdresForm = ref)}/>
          <Checkbox
          label="Bezoekadres is ook het factuuradres en afleveradres?"
          labelPosition="left"
          checked={this.state.factuurAdres}
          onCheck={this.updateCheckFA.bind(this)}
          style={{
            position: 'relative',
            left: -5,
            margin: 10,
          }}
          />
        </Paper>

        {this.state.factuurAdres &&
        <Paper
          style={{
            display: 'inline',
            float: 'left',
            position: 'relative',
            left: -0,
            height: 660,
            width: 350,
           }}
        >
          <FactuurAdresForm onChange={handleChange} onRef={ref => (this.factuurAdresForm = ref)}/>
          <Checkbox
          label="Factuuradres is ook het afleveradres?"
          labelPosition="left"
          checked={this.state.afleverAdres}
          onCheck={this.updateCheckAA.bind(this)}
          style={{
            position: 'relative',
            left: -5,
            margin: 10,
          }}
          />
        </Paper>}

        {!this.state.factuurAdres &&
        <div
          style={{
            display: 'inline',
            float: 'left',
            position: 'relative',
            left: -0,
            height: 660,
            width: 350,
           }}
        />
        }

        {this.state.afleverAdres &&
        <Paper
          style={{
            display: 'inline',
            float: 'left',
            position: 'relative',
            left: 50,
            height: 660,
            width: 350,
           }}
        >
          <AfleverAdresForm onChange={handleChange} onRef={ref => (this.afleverAdresForm = ref)}/>
        </Paper>}

        {!this.state.afleverAdres &&
        <div
          style={{
            display: 'inline',
            float: 'left',
            position: 'relative',
            left: 50,
            height: 660,
            width: 350,
           }}
        />}

      </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
	}
}

export default connect(mapStateToProps)(OrderAdressForm)
