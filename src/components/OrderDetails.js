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
    import {
      Table,
      TableBody,
      TableHeader,
      TableHeaderColumn,
      TableRow,
      TableRowColumn,
    } from 'material-ui/Table';



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
     // if (!order) return <p>order does not exist!</p>

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
        <Subheader style={{
          fontSize: 40,
        }}>Order Details</Subheader>
        <Divider style={{
          padding: 5,
          marginBottom: 5,
        }}/>


  <Table>
    <TableBody>

      <TableRow>
        <TableRowColumn>Order Number</TableRowColumn>
        <TableRowColumn>{`${order.orderNumber}`}</TableRowColumn>
      </TableRow>

      <TableRow>
        <TableRowColumn>Short Description</TableRowColumn>
        <TableRowColumn>{`${order.shortDescription}`}</TableRowColumn>
      </TableRow>

      <TableRow>
        <TableRowColumn>Full Description</TableRowColumn>
        <TableRowColumn>{`${order.description}`}</TableRowColumn>
      </TableRow>

      <TableRow>
        <TableRowColumn>Order Amount</TableRowColumn>
        <TableRowColumn>{`${order.amount}`}</TableRowColumn>
      </TableRow>

      <TableRow>
        <TableRowColumn>Order Date</TableRowColumn>
        <TableRowColumn>{`${order.orderDate}`}</TableRowColumn>
      </TableRow>

      <TableRow>
        <TableRowColumn>Delivery Date</TableRowColumn>
        <TableRowColumn>{`${order.deliveryDate}`}</TableRowColumn>
      </TableRow>

      <TableRow>
        <TableRowColumn>Payment Type</TableRowColumn>
        <TableRowColumn>{`${order.paymentType}`}</TableRowColumn>
      </TableRow>

      <TableRow>
        <TableRowColumn>Delivery ID</TableRowColumn>
        <TableRowColumn>{`${order.deliveryId}`}</TableRowColumn>
      </TableRow>

      <TableRow>
        <TableRowColumn>User ID</TableRowColumn>
        <TableRowColumn>{`${order.userId}`}</TableRowColumn>
      </TableRow>

    </TableBody>
  </Table>

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
