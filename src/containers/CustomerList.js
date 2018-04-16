//Dependencies
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

//MaterialUI
  //Components
    import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, CardContent} from 'material-ui/Card';
    import RaisedButton from 'material-ui/RaisedButton'
    import Paper from 'material-ui/Paper';
    import { List, ListItem } from 'material-ui/List';
    import Subheader from 'material-ui/Subheader';
    import Divider from 'material-ui/Divider';
    import Business from 'material-ui/svg-icons/communication/business'


//Actions
import { getCustomers } from '../actions/users'

//Components



//HArdCode

const orders = [
  {
    id: 1,
    orderNumber: '0707',
    type: 'Secretary of the Year',
    description: '3D crystal glass',
    user: 'Johnny Bravo'
  },
  {
    id: 2,
    orderNumber: '0808',
    type: 'Manager of the Month',
    description: 'Award Tombstone Rectangle',
    user: 'Annette Whilmore'
  },
  {
    id: 3,
    orderNumber: '0909',
    type: 'Coffee Maker of the Week',
    description: 'Award in Metal and Wood',
    user: 'Stuart Belleville'
  },
  {
    id: 4,
    orderNumber: '1010',
    type: 'Colleague of the Day',
    description: 'Plexiglass Star Shape',
    user: 'Johnny Bravo'
  }
]

class CustomerList extends PureComponent {

  componentWillMount() {
    this.props.getCustomers()
  }

	render() {
    let windowWidth = window.screen.availWidth
    console.log(windowWidth);

    // const {orders} = this.props; //enable in order to use with the reducer

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
        <List>
          <Subheader style={{
            fontSize: 40,
          }}>Bestellingen</Subheader>
          <Divider style={{
            padding: 5,
            marginBottom: 5,
          }}/>
          <Divider />
          {orders && orders.map((order) => (
            <div >
              <ListItem
              secondaryTextLines={2}
              primaryText={`${order.type}`}
              secondaryText={<p> <span> {'Nr: '+ `${order.orderNumber}`}</span><br/><span>{'Created by: '+ `${order.user}`}</span></p>}
              className='order-row' onClick={_=>window.location.href=`/flexicon/orders/${order.orderNumber}`}
              />
              <Divider />
            </div>
          ))
          }
        </List>
        </Paper>
      </div>
		)
	}
}

const mapStateToProps = function (state, props) {
	return {
    orders: state.orders
	}
}

export default connect(mapStateToProps, { getCustomers })(CustomerList)
