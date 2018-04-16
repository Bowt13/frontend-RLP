//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getOrders} from '../actions/orders'
import { getCurrentUser } from '../actions/users'

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
  //Colors


//Actions


//Components



//HArdCode
const user = {
  firstName: 'Safidy',
  lastName: 'Ratsimbazafy',
  email: 'safidy@example.com',
  company: 'SAFISYX CORP.',
  phone : '06 06060606'
}

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
  state = {
    openProfile: false,
  }

  componentWillMount() {
    this.props.getCurrentUser()
    this.props.getOrders()
  }

  handleToggle = () => {
    this.setState({openProfile: !this.state.openProfile},()=>
    console.log(this.state.openProfile))
  }

  // TO HAVE PROFILE IN THE TOP BAR (FOR NOW WE DON'T WANT IT)
  // renderProfile = () => {
  //   if (this.state.openProfile)
  //     return (
  //     <Card style={{position: 'relative', maxWidth: '80%', height:'200px',
  //                   transform:'translate(-50%,0)', left:'50%',
  //                   margin: '25px 0 0 0'}} className='contactCard'
  //       onClick={this.handleToggle}>
  //       <CardText style={{position:'absolute',
  //                         left:'0',
  //                         transform: 'translate(0,-50%)',
  //                         top: '50%',
  //                         textAlign: 'left'}}>
  //         <p>
  //           <span>Name: </span>
  //           {`${user.firstName +' ' + user.lastName}`}
  //         </p>
  //         <p>
  //           <span>Email: </span>
  //           {`${user.email}`}
  //         </p>
  //         <p>
  //           <span>Phone: </span>
  //           {`${user.phone}`}
  //         </p>
  //
  //
  //       </CardText>
  //       <CardText style={{position:'absolute',
  //                         transform: 'translate(0,-50%)',
  //                         left:'50%',
  //                         top:'50%'}}>
  //         <p>
  //           <span>Company: </span>
  //           {`${user.company}`}
  //         </p>
  //         <RaisedButton>
  //           Edit Profile
  //         </RaisedButton>
  //
  //       </CardText>
  //     </Card>
  //   )
  // }

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

export default connect(mapStateToProps, {getOrders, getCurrentUser})(CustomerList)
