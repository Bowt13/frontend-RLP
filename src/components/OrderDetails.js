//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

//MaterialUI
  //Components
    import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, CardContent} from 'material-ui/Card';
    import RaisedButton from 'material-ui/RaisedButton'
    import Paper from 'material-ui/Paper';
    import Avatar from 'material-ui/Avatar'
    import {
      List,
      ListItem
    } from 'material-ui/List';
    import Subheader from 'material-ui/Subheader';
    import Divider from 'material-ui/Divider';
    import Business from 'material-ui/svg-icons/communication/business'


const orderDetails = [
  {
  id: '0707',
  description: '3D crystal glass, height: 10cm, width: 5cm, polished: yes',
  amount: 3,
  date: '20-02-2018',
  createdBy: 'Johnny Bravo',
  deliveryId: 'GH 142434',
  userId: 'N 987'
  },
]

class OrderDetails extends PureComponent {
  state = {
    openProfile: false,
  }

  handleToggle = () => {
    this.setState({openProfile: !this.state.openProfile},()=>
    console.log(this.state.openProfile))
  }

  render() {
    let windowWidth = window.screen.availWidth
    console.log(windowWidth);
		return (
      <div>
        <Paper style={{
          position: 'relative',
          top: 80,
          botom: 10,
          left: '25%',
          width: '50%',
          overflow: 'scroll',
        }}>
        <h2>Order Details</h2>
        <div>Hello Eva!</div>
        <div>I love you Eva</div>
        </Paper>
      </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
	}
}

export default connect(mapStateToProps)(OrderDetails)
