//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getOrders} from '../actions/orders'

import './OrderDetails.css'

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


const order =
  {
  id: 1,
  orderNumber: '0707',
  shortDescription: '"Secretary of the Year", 3D crystal glass',
  description: '3D crystal glass, height: 10cm, width: 5cm, polished: yes, jhfesgdrjfbdksjhkdjnfkjdnvbfkjhfdnv,mnfjk.hgodflknv,mnn,mv,\n\nlogo: bottom left, wrapping: yes',
  amount: 3,
  orderDate: '20-02-2018',
  deliveryDate: '10-03-2018',
  paymentType: 'credit card',
  deliveryId: 'GH 142434',
  userId: 'N 987'
  }


class OrderDetails extends PureComponent {
  state = {
    openProfile: false,
  }

  componentWillMount() {
    this.props.getOrders()
  }

  handleToggle = () => {
    this.setState({openProfile: !this.state.openProfile},()=>
    console.log(this.state.openProfile))
  }

  render() {
    let windowWidth = window.screen.availWidth
    console.log(windowWidth);

    // const {order} = this.props
    // if (!order) return "order does not exist!"

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
          <table >
            <tr>
              <td>ORDER NUMBER</td>
              <td>{`${order.orderNumber}`}</td>
            </tr>
            <tr>
              <td>SHORT DESCRIPTION</td>
              <td>{`${order.shortDescription}`}</td>
            </tr>
            <tr>
              <td>DESCRIPTION</td>
              <td>{`${order.description}`}</td>
            </tr>
            <tr>
              <td>AMOUNT</td>
              <td>{`${order.amount}`}</td>
            </tr>
            <tr>
              <td>ORDER DATE</td>
              <td>{`${order.orderDate}`}</td>
            </tr>
            <tr>
              <td>DELIVERY DATE</td>
              <td>{`${order.deliveryDate}`}</td>
            </tr>
            <tr>
              <td>PAYMENT TYPE</td>
              <td>{`${order.paymentType}`}</td>
            </tr>
            <tr>
              <td>DELIVERY ID</td>
              <td>{`${order.deliveryId}`}</td>
            </tr>
            <tr>
              <td>USER ID</td>
              <td>{`${order.userId}`}</td>
            </tr>
          </table>
        </Paper>
      </div>
		)
	}
}

const mapStateToProps = function (state, props) {
	return {
    order: state.orders && state.orders.find(order => `${order.orderNumber}`===props.match.params.orderNumber),
	}
}

export default connect(mapStateToProps, {getOrders})(OrderDetails)
