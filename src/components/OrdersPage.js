//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getOrders} from '../actions/orders'

//Components
import Searchbar from '../components/Searchbar'
//Functions
import { searchForOrder } from '../lib/functions'

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

  handleSubmit = (value) => {
    const { orders } = this.props
    if (this.state.props === true)
      this.setState({props:false})
    this.setState({
      orders: searchForOrder(orders ,value)
    })
  }

	render() {
    let windowWidth = window.screen.availWidth
    console.log(windowWidth);

    const {orders, history} = this.props

		return (
      <div>
      <NavBar/>
      <div style={{
        display: 'flex',
        width: '80%',
        margin: 'auto',
        paddingTop: '5em',
      }}>
        <Paper style={{
          overflow: 'scroll',
          flexGrow: '2',
          margin: 5,
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
        <Searchbar
          onSubmit={ this.handleSubmit }
        />
      </div>
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
