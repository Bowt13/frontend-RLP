//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getOrders} from '../actions/orders'

//MaterialUI
  //Components
    import Paper from 'material-ui/Paper';
    import {
      List,
      ListItem
    } from 'material-ui/List';
    import Subheader from 'material-ui/Subheader';
    import Divider from 'material-ui/Divider';

import NavBar from '../components/NavBar'

class OrdersPage extends PureComponent {
  state = {
    openProfile: false,
  }

  componentWillMount() {
    this.props.getOrders()
  }

  // componentHasMount() {
  //   this.props.getOrders()
  // }

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

    const {orders, history} = this.props

		return (
      <div>
      <NavBar/>
        <Paper style={{
          position: 'relative',
          top: 90,
          left: '25%',
          width: '50%',
          overflow: 'scroll',
        }}>
        <List style={{
          padding: 0,
        }}>
          <Subheader style={{
            fontSize: 40,
            margin: 8,
          }}>Bestellingen</Subheader>
          <Divider style={{
            padding: 1,
            backgroundColor: '#F09517',
          }}/>
          {orders && orders.map((order) => (
            <div >
              {console.log(order)}
              <Divider />
              <ListItem
              hoverColor= '#f4b357'
              secondaryTextLines={2}
              primaryText={`${order.shortDescription}`}
              secondaryText={<p> <span> {`Bestellingsnummer: ${order.orderNumber}`}</span><br/><span>{`Opdrachtgever: ${order.userEmail}`}</span></p>}
              className='order-row'
              onClick={_=> history.push(`/flexicon/orders/${order.id}`)}
              />
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
    orders: state.orders === null ? null:Object.values(state.orders).sort((a, b) => b.id - a.id)
	}
}

export default connect(mapStateToProps, {getOrders})(OrdersPage)
