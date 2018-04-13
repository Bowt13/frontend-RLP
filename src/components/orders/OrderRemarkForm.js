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
    import CircularProgress from 'material-ui/CircularProgress'

  //Icons
    import Description from 'material-ui/svg-icons/action/description'
    import ShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart'
    import Zoom from 'material-ui/svg-icons/action/zoom-in'
  //Colors


//Actions


class OrderRemarkForm extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  }
  state = {
    showImage: false,
  }

  previewFile = () => {
    let preview = document.querySelector('img')
    let file    = this.state.picture
    let reader  = new FileReader()
    reader.onloadend = function () {
      preview.src = reader.result
    }
    if (file) {
      reader.readAsDataURL(file)
    } else {
      preview.src = ""
    }
  }

  loading = () => {
    this.timer = setTimeout(() => this.progress(this.state.completed), 1000)
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({
        completed: 100,
        showImage: true,
      })
      this.previewFile()
    } else {
      this.setState({completed});
      const diff = 100;
      this.timer = setTimeout(() => this.progress(this.state.completed + diff), 1000);
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleFileChange = (e) => {
    this.setState({
      picture: e.target.files[0],
      completed: 0,
      showImage: false,
    })
    this.loading()
  }

  componentWillMount() {
    this.setState({
      KorteOmschrijving: []
    })
  }

	render() {
    let file    = this.state.picture
    let reader  = new FileReader()

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
              <RaisedButton
                label='Bestand toevoegen'
                name='file'
                labelPosition='before'
                style={{
                  position: 'relative',
                  left: -350,
                  width: 177,
                  margin: 30,
                }}
                containerElement="label"
              >
                <input type="file"
                  style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    width: '100%',
                    opacity: 0,
                  }}
                  onChange={this.handleFileChange}
                />
              </RaisedButton>
              {this.state.completed === 100 && this.state.showImage &&
                <img
                  src=""
                  height="200"
                  width="auto"
                  alt="Geen afbeelding..."
                  style={{
                    display: 'inline-block',
                  }}
                />
              }
              {!this.state.showImage &&
                <div
                  style={{
                    height: 200
                  }}
                >
                  <CircularProgress
                    mode="determinate"
                    value={this.state.completed}
                    size={100}
                    thickness={5}
                  />
                </div>
              }
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
