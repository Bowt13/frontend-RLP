//Dependencies
import React, {PureComponent} from 'react'



//MaterialUI
  //Components
    import TextField from 'material-ui/TextField'
    import { Paper } from 'material-ui'

class Searchbar extends PureComponent {

  state = { zoeken: '' }

  handleSubmit = (event) => {
		event.preventDefault()
		this.props.onSubmit(this.state.zoeken)
	}

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return(
      <div>
        <form
          onSubmit={ this.handleSubmit }
        >
          <Paper style={{
            flex: '1',
            flexDirection: 'column',
            width: 300,
            height: 75,
            position: 'relative',
            right: -200,
            top: 90,
            flexDirection: 'column',
          }}>
            <TextField
            floatingLabelFocusStyle={{
							color: '#F09517',
						}}
            LabelFocusStyle={{
              color: '#F09517',
            }}
            underlineFocusStyle={{
              borderColor: '#F09517',
            }}
            name='zoeken'
            type='text'
            floatingLabelText="Zoeken naar bestellinge"
            value={ this.state.zoeken }
            onChange={ this.handleChange }
            />
          </Paper>
        </form>
      </div>
    )
  }
}

export default Searchbar
