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
    import Description from 'material-ui/svg-icons/action/description'
    import ShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart'
    import Zoom from 'material-ui/svg-icons/action/zoom-in'
  //Colors


//Actions


class OrderRemarkForm extends PureComponent {
  state = {
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  componentWillMount() {
    this.setState({
      KorteOmschrijving: []
    })
  }

	render() {

		return (
      <div style={{
        width: 1150,
        display: 'inline-block',
        textAlign: 'center',
      }}>
      <Paper>
        <h1
          style={{
            position: 'relative',
            top: 10,
          }}
        >Ordernummer/Kostenplaats</h1>
        <Divider
          style={{
            height: 4,
          }}
        />
            <form
              name='Remarks'
            >
              <ShoppingCart
                style={{
                  position: 'relative',
                  top: 5,
                  left: -15,
                }}
              />
              <TextField
                name='Aantal'
                floatingLabelText="Aantal:"
                value={this.state.Aantal || ''}
                onChange={this.handleChange}
                style={{
                  width: '90%',
                }}
              />
              <br/>
              <Description
                style={{
                  display: 'inline',
                  position: 'relative',
                  top: 5,
                  left: 7,
                }}
              />
              <TextField
                name='KorteOmschrijving'
                floatingLabelText="Korte omschrijving:"
                maxlength="100"
                value={this.state.KorteOmschrijving || ''}
                onChange={this.handleChange}
                style={{
                  position: 'relative',
                  left: 20,
                  width: '90%',
                }}
              />
              <p
                style={{
                  display: 'inline',
                  position: 'relative',
                  left: -25,
                }}
              >{this.state.KorteOmschrijving.length}/100</p>
              <br/>
              <Description
                style={{
                  position: 'absolute',
                  top: 1027,
                  left: 97,
                }}
              />
              <TextField
                name='Opdrachtomschrijving'
                floatingLabelText="Opdrachtomschrijving:"
                multiLine={true}
                rows={1}
                value={this.state.Opdrachtomschrijving|| ''}
                onChange={this.handleChange}
                style={{
                  textAlign: 'left',
                  position: 'relative',
                  left: 12,
                  width: '90%',
                }}
              />
              <br/>
              <Zoom
                style={{
                  position: 'relative',
                  top: 5,
                  left: -15,
                }}
              />
              <TextField
                name='Aandachtspunten'
                floatingLabelText="Aandachtspunten:"
                value={this.state.Aandachtspunten || ''}
                onChange={this.handleChange}
                style={{
                  width: '90%',
                }}
              />
              <br/>
            </form>
        </Paper>
      </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
	}
}

export default connect(mapStateToProps)(OrderRemarkForm)
