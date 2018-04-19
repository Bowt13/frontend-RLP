//Dependencies
  import React, {PureComponent} from 'react'
  import {connect} from 'react-redux'

//MaterialUI
  import { Paper, TextField, IconButton } from "material-ui"
  import ContentSend from 'material-ui/svg-icons/content/send';

//Actions
  import {getCurrentUser} from '../actions/users'
  import {addMessage} from '../actions/messages'

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
        height: '85vh',
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
    text: ''
  }

  send = (event) => {
    event.preventDefault()
    {if (this.state.text !== '') {
      this.props.addMessage(this.props.order.id, this.state.text)
    }}
    this.setState({text: ''})
  }

  componentWillMount(){
    const {getCurrentUser} = this.props
    getCurrentUser()
  }

  componentDidUpdate(){
    const elem = document.getElementById('messageBox')
    if (elem) {
    elem.scrollTop = elem.scrollHeight}
  }

  render() {
    console.log(this.props.order.messages)
    const {order} = this.props
		return (
      <div style={styles.container}>
        <div>
          <Paper style={styles.paper} zDepth={2} >
            <Paper id='messageBox' style={styles.messagesBody}>
                {order.messages &&
                  order.messages.sort((a,b) => {if(a.id > b.id){return 1}else{return -1}}).map(msg =>
                    (
                      <div style={styles.message}>
                        <span>{msg.content}</span>
                        <sub style={{color:'lightgrey'}}>{msg.userName}</sub>
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
                  value={this.state.text}
                  onChange={e => {
                    this.setState({text: e.target.value})
                  }}
                  hintText="schrijf je bericht hier"
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
    user: state.user,
	}
}

export default connect(mapStateToProps, {getCurrentUser, addMessage})(ChatBox)
