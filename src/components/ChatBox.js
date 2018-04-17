//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
//MaterialUI
import { Paper, TextField, IconButton, RaisedButton } from "material-ui"
import Mic from 'material-ui/svg-icons/av/mic';
import ContentSend from 'material-ui/svg-icons/content/send';

const styles = {
    container: {
        position: 'relative',
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'inline-block',
        float: 'left',
        marginLeft: 30,
        marginTop: 90,
    },
    paper: {
        width: '30vw',
        height: '80vh',
        // maxWidth: '400px',
        // maxHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative'
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
    message:'Where is my order?!?!?',
    name:'Harvey Specter'
  },
  {
    message:'almost there mate',
    name:'Nikki'
  },
  {
    message:'I am not your mate!',
    name:'Harvey Specter'
  },
]

class ChatBox extends PureComponent {

  state = {
      // messages: [],
      messages: myMessages,
      text: '',
      name: 'eva',
  }

  send = () => {
      myMessages.push({
          name: this.state.name,
          message: this.state.text
      })
      // this.forceUpdate() //triggers rerender
      this.setState({text: ''})
  }


  render() {
    // console.log(this.state);
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
                        <sub style={{color:'lightgrey'}}>{msg.name}</sub>
                      </div>
                    )
                  )
                }
            </Paper>
            <div style={styles.record}>
              <TextField
                id="input"
                underlineFocusStyle={{
                  borderColor: '#F09517',
                }}
                value={this.state.text || ''}
                onChange={e => {
                  if (e.keyCode == 13) {
                    this.send()
                  }
                  this.setState({text: e.target.value})
                }}
                hintText="type your message here"
                fullWidth={true}
              />
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


export default ChatBox
