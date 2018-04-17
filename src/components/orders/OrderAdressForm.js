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
    factuurAdres: true,
    afleverAdres: true,
  }

  updateCheckFA() {
    this.setState((oldState) => {
      return {
        factuurAdres: !oldState.factuurAdres,
      }
    })
  }

  updateCheckAA() {
    this.setState((oldState) => {
      return {
        afleverAdres: !oldState.afleverAdres,
      }
    })
  }

  handleChange = (type, state) => {
    this.setState({
      [type]: state,
    })
  }

  onClick = () => {
    this.bezoekAdresForm.handleSubmit()
    {!this.state.factuurAdres &&
      this.factuurAdresForm.handleSubmit()
    }
    {!this.state.afleverAdres &&
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
        float: 'left',
        marginBottom: 10,
      }}>
        <Paper
          style={{
            display: 'inline',
            float: 'left',
            height: 585,
            width: 350,
            marginLeft: 50,
            marginTop: 25,
           }}
        >
          <BezoekAdresForm onChange={handleChange} onRef={ref => (this.bezoekAdresForm = ref)}/>
          <Checkbox
          label="Factuuradres is gelijk aan bezoekadres"
          labelPosition="left"
          checked={this.state.factuurAdres}
          onCheck={this.updateCheckFA.bind(this)}
          style={{
            position: 'relative',
            marginBottom: 10,
          }}
          labelStyle={{
            marginLeft: 5,
          }}
          />
          <Checkbox
          label="Afleveradres is gelijk aan bezoekadres"
          labelPosition="left"
          checked={this.state.afleverAdres}
          onCheck={this.updateCheckAA.bind(this)}
          style={{
            position: 'relative',
          }}
          labelStyle={{
            marginLeft: 5,
          }}
          />
        </Paper>

        {!this.state.factuurAdres &&
        <Paper
          style={{
            display: 'inline',
            float: 'left',
            height: 585,
            width: 350,
            marginLeft: 50,
            marginTop: 25,
           }}
        >
          <FactuurAdresForm onChange={handleChange} onRef={ref => (this.factuurAdresForm = ref)}/>
        </Paper>}

        {!this.state.afleverAdres &&
        <Paper
          style={{
            display: 'inline',
            float: 'left',
            height: 585,
            width: 350,
            marginLeft: 50,
            marginTop: 25,
           }}
        >
          <AfleverAdresForm onChange={handleChange} onRef={ref => (this.afleverAdresForm = ref)}/>
        </Paper>}

      </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
	}
}

export default connect(mapStateToProps)(OrderAdressForm)
