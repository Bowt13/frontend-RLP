//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

//MaterialUI
  //Components
    import TextField from 'material-ui/TextField'
    import RaisedButton from 'material-ui/RaisedButton'
    import Paper from 'material-ui/Paper'
    import Divider from 'material-ui/Divider'

  //Icons
    import Description from 'material-ui/svg-icons/action/description'
    import ShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart'
    import Zoom from 'material-ui/svg-icons/action/zoom-in'
    import Attachment from 'material-ui/svg-icons/file/attachment'
  //Colors


//Actions


class OrderRemarkForm extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }
  state = {
    files:[]
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleFileChange = (e) => {
    this.setState({
      files: e.target.files,
    })
  }

  onClick = () => {
    this.props.onChange('OrderRemarkForm', this.state)
  }

  componentWillMount() {
    this.props.onRef(this)
    this.setState({
      KorteOmschrijving: []
    })
  }

	render() {
    let file    = this.state.picture
    let reader  = new FileReader()

		return (
      <div style={{
        width: '90%',
        display: 'inline-block',
        textAlign: 'center',
        float: 'left',
        position: 'relative',
        marginLeft: 50,
        marginBottom: 10,
      }}>
      <Paper>
        <h1
          style={{
            textAlign: 'left',
            position: 'relative',
            top: 10,
            left: 8,
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
                floatingLabelFocusStyle={{
                  color: '#F09517',
                }}
                underlineFocusStyle={{
                  borderColor: '#F09517',
                }}
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
                floatingLabelFocusStyle={{
                  color: '#F09517',
                }}
                underlineFocusStyle={{
                  borderColor: '#F09517',
                }}
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
                  display: 'inline',
                  position: 'relative',
                  top: 37,
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
                name='Opdrachtomschrijving'
                floatingLabelText="Opdrachtomschrijving:"
                multiLine={true}
                rows={1}
                value={this.state.Opdrachtomschrijving|| ''}
                onChange={this.handleChange}
                hintText='Niet nodig.'
                style={{
                  textAlign: 'left',
                  display: 'inline-block',
                  position: 'relative',
                  top: '-30',
                  left: 0,
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
                floatingLabelFocusStyle={{
                  color: '#F09517',
                }}
                underlineFocusStyle={{
                  borderColor: '#F09517',
                }}
                name='Aandachtspunten'
                floatingLabelText="Aandachtspunten:"
                value={this.state.Aandachtspunten || ''}
                onChange={this.handleChange}
                style={{
                  width: '90%',
                }}
              />
              <br/>
              <RaisedButton
                label='Bestand toevoegen'
                name='file'
                labelPosition='before'
                style={{
                  position: 'relative',
                  left: -350,
                  width: 'auto',
                  margin: 15,
                }}
                containerElement="label"
              >
                <input type="file"
                  style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    width: '100%',
                    opacity: 0,
                  }}
                  accept="image/*"
                  onChange={this.handleFileChange}
                  multiple
                />
              </RaisedButton>
              <br/>
              {Object.values(this.state.files).map(file => (
                <div style={{
                  textAlign: 'center',
                }}>
                  <Attachment
                    style={{
                      position: 'relative',
                      top: 5,
                      left: -15,
                    }}
                  />
                  <TextField
                    name='Files'
                    key='file'
                    floatingLabelText={`file`}
                    value={file.name}
                    style={{
                      position: 'relative',
                      width: '90%',
                    }}
                  />
                  <br/>
                </div>
              ))
              }
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
