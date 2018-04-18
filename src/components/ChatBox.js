//Dependencies
  import React, {PureComponent} from 'react'
  import {connect} from 'react-redux'

//MaterialUI
  import { Paper, TextField, IconButton, RaisedButton } from "material-ui"
  import Mic from 'material-ui/svg-icons/av/mic';
  import ContentSend from 'material-ui/svg-icons/content/send';

//Actions
  import {getCurrentUser} from '../actions/users'

const styles = {
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1',
        flexGrow: '1',
        margin: 5,
    },
    paper: {
        width: '30vw',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    record: {
        width: '90%',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        margin: 10,
    },
    messagesBody: {
        width: 'calc( 100% - 20px )',
        margin: 10,
        overflow: 'scroll',
        height: 'calc( 100% - 80px )',
    },
    message: {
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between'
    }
};

class ChatBox extends PureComponent {

  state = {
    messages: [],
  }

  send = (event) => {
    event.preventDefault()
    {this.state.text !== '' &&
      this.state.messages.push({
          name: this.props.user.firstName,
          message: this.state.text
      })}
      this.setState({text: ''})
  }

  componentWillMount(){
    const {user, getCurrentUser} = this.props
    getCurrentUser()
  }

  render() {
		return (
      <div style={styles.container}>
        <div>
          <Paper style={styles.paper} zDepth={2} >
            <Paper style={styles.messagesBody}>
                {this.state.messages &&
                  this.state.messages.map(msg =>
                    (
                      <div style={styles.message}>
                        <span>{msg.message}</span>
                        <sub style={{color:'lightgrey'}}>{msg.name}</sub>
                      </div>
                    )
                  )
                }
            </Paper>
            <div style={styles.record}>
              <form onSubmit={this.send}
              style={{
                width: '90%'
              }}>
                <TextField
                  id="input"
                  type='text'
                  underlineFocusStyle={{
                    borderColor: '#F09517',
                  }}
                  value={this.state.text || ''}
                  onChange={e => {
                    this.setState({text: e.target.value})
                  }}
                  hintText="type your message here"
                  style={{
                    width: '90%'
                  }}
                />
              </form>
              <IconButton
                onClick={this.send} ref='send'>
                <ContentSend
                  color= '#F09517'
                />
              </IconButton>
            </div>
          </Paper>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
    currentUser: state.currentUser,
    authenticated: state.currentUser !== null,
    deliveries: state.deliveries,
    user: state.user
	}
}

export default connect(mapStateToProps, {getCurrentUser})(ChatBox)
