//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
//MaterialUI
import { Paper, TextField, IconButton, RaisedButton } from "material-ui"
import Mic from 'material-ui/svg-icons/av/mic';
import ContentSend from 'material-ui/svg-icons/content/send';

const styles = {
    paper: {
        width: '80vw',
        height: '80vh',
        maxWidth: '400px',
        maxHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative'
    },
    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    record: {
        width: '95%',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        margin: 10
    },
    messagesBody: {
        width: 'calc( 100% - 20px )',
        margin: 10,
        overflowY: 'scroll',
        height: 'calc( 100% - 80px )',
    },
    message: {
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between'
    }
};

const myMessages = [
  {
    message:'hello friend',
    name:'Eva'
  },
  {
    message:'hello there',
    name:'Flo'
  },
  {
    message:'whats up?',
    name:'Freud'
  },
]

class ChatBox extends PureComponent {

  state = {
      // messages: [],
      messages: myMessages,
      text: "",
      name: 'eva',
      name1: ''
  }

  render() {
		return (
      <div style={styles.container}>
        <div>
          <Paper style={styles.paper} zDepth={2} >
            <Paper style={styles.messagesBody}>
                {
                  this.state.messages.map(msg =>
                    (
                      <div style={styles.message}>
                        <span>{msg.message}</span>
                        <sub>{msg.name}</sub>
                      </div>
                    )
                  )
                }
            </Paper>
            <div style={styles.record}>
              <TextField
                id="input"
                value={this.state.text}
                onChange={ev => {
                  this.setState({text: ev.target.value})
                }}
                // onKeyPress={(event) => {
                //   if (event.which === 13) {
                //     event.preventDefault();
                //     // $('#btn').focus();
                //     // $('#btn').click();
                //   }
                // }}
                hintText="Full width"
                fullWidth={true}
              />
              <IconButton onClick={this.send} ref='send'>
                <ContentSend/>
              </IconButton>
            </div>
          </Paper>
        </div>
      </div>
    )
  }
}


export default ChatBox
