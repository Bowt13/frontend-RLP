//Dependencies
import React, {PureComponent} from 'react'
// import {connect} from 'react-redux'

//MaterialUI
  //Components
    import TextField from 'material-ui/TextField'
    import { Paper } from 'material-ui'

class Searchbar extends PureComponent {

  state = { init: '' }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ init: event.target.value })
  }

  render() {
    return(
      <div>
        <form>
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
            name='Zoeken'
            floatingLabelText="Zoeken"
            value={ this.state.init }
            onSubmit={this.handleSubmit}
            />
          </Paper>
        </form>
      </div>
    )
  }
}

export default Searchbar
