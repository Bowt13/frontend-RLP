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
              onClick={_=> history.push(`/flexicon/orders/${order.orderNumber}`)}
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
