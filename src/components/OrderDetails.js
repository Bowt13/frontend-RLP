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

    import ActionInfo from 'material-ui/svg-icons/action/info';
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
  description: '3D crystal glass, height: 10cm, width: 5cm, polished: yes, bdshbhdshdvvdcxbhjdsjdsjkjbffdbfsjkjefkhjbjkbkcdhvcshjvhjvlogo: bottom left, wrapping: yes',
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

    const {order} = this.props
     if (!order) return <p>order does not exist</p>

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
          <List>
            <ListItem disabled={true} primaryText="Order Number" secondaryText={`${order.orderNumber}`}/>
            <Divider/>
            <ListItem disabled={true} primaryText="Short Description" secondaryText={`${order.shortDescription}`}/>
            <Divider/>
            <ListItem primaryText="Full Description"
             nestedItems={[
              <ListItem
                value={2}
                primaryText={`${order.description}`}
              />,
            ]}/>
            <Divider/>
            <ListItem disabled={true} primaryText="Order Amount" secondaryText={`${order.amount}`}/>
            <Divider/>
            <ListItem disabled={true} primaryText="Order Date" secondaryText={`${order.orderDate}`}/>
            <Divider/>
            <ListItem disabled={true} primaryText="Delivery Date" secondaryText={`${order.deliveryDate}`}/>
            <Divider/>
            <ListItem disabled={true} primaryText="Payment Type" secondaryText={`${order.paymentType}`}/>
            <Divider/>
            <ListItem disabled={true} primaryText="Delivery ID" secondaryText={`${order.deliveryId}`}/>
            <Divider/>
            <ListItem disabled={true} primaryText="User ID" secondaryText={`${order.userId}`}/>
          </List>
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
