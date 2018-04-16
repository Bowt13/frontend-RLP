//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
//MaterialUI
import { Paper, TextField, IconButton, RaisedButton } from "material-ui"
import Mic from 'material-ui/svg-icons/av/mic';
import ContentSend from 'material-ui/svg-icons/content/send';

const styles = {
    paper: {
        width: '90vw',
        height: '80vh',
        maxWidth: '1000px',
        maxHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative'
    },
    paper2: {
        width: '80vw',
        maxWidth: '800px',
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
    record1: {
        width: '95%',
        display: 'flex',
        alignItems: 'center',
        margin: 10
    },
    logOut: {
        position: 'absolute',
        top: 10,
        right: 10
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

class ChatBox extends PureComponent {

  state = {
      messages: [],
      text: "",
      name: 'eva',
      name1: ''
  }

  render() {
		return (
      <div style={styles.container}>
        <div>
          <Paper style={styles.paper} zDepth={2} >
            <Paper id="style-1" style={styles.messagesBody}>
                {
                  this.state.messages.map(el =>
                    (
                      <div style={styles.message}>
                        <span>{el.message}</span>
                        <sub>{el.name}</sub>
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
                onKeyPress={(event) => {
                  if (event.which === 13) {
                    event.preventDefault();
                    // $('#btn').focus();
                    // $('#btn').click();
                  }
                }}
                hintText="Full width"
                fullWidth={true}
              />
              <IconButton onClick={this.send} ref='send' id="btn" className="micBtn" style={styles.MicBtn}>
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
