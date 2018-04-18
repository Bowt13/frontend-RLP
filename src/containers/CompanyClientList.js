//Dependencies
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

//Components
import Searchbar from '../components/Searchbar'

//Functions
import { searchForOrder } from '../lib/functions'

//MaterialUI
  //Components
    // import RaisedButton from 'material-ui/RaisedButton'
    import Paper from 'material-ui/Paper'
    import { List, ListItem } from 'material-ui/List'
    import Subheader from 'material-ui/Subheader'
    import Divider from 'material-ui/Divider'

//Actions
import { getCustomers } from '../actions/users'

class CustomerList extends PureComponent {

  state={
    props:true
  }
  componentWillMount() {
    this.props.getCustomers()

  }

  handleSubmit = (value) => {
    const { customers } = this.props
    if (this.state.props === true)
      this.setState({props:false})
    this.setState({
      customers: searchForOrder(customers ,value)
    })
    // this.setState({ init: event.target.value })
  }

	render() {

    const { history } = this.props
    let customers
    if (this.state.props)
      customers= this.props.customers
    if(!this.state.props)
      customers= this.state.customers
    return (
      <div style={{
        display: 'flex'
      }}>
        <Paper style={{
          position: 'relative',
          top: 90,
          botom: 10,
          left: '15%',
          width: '50%',
          overflow: 'scroll',
        }}>
        <List style={{
          padding: 0,
        }}>
          <Subheader style={{
            fontSize: 40,
            margin: 8,
            textAlign: 'left',
          }}>Company</Subheader>
          <Divider style={{
            padding: 1,
            backgroundColor: '#F09517',
          }}/>
          { customers && customers.map(customer => (
            <div>
              <Divider />
              <ListItem
              initiallyOpen={ false }
              primaryTogglesNestedList={ true }
              hoverColor= '#F09517'
              nestedItems={[ customer.orders.map(order => (
                <div>
                  <Divider />
                  <ListItem
                    hoverColor= '#f4b357'
                    style={{
                      textAlign: 'right',
                    }}
                    primaryText={ `${order.shortDescription}` }
                    secondaryText={ 'Besteldatum:' + ' ' + `${order.orderDate}` }
                    onClick={ _=> history.push(`/flexicon/orders/${order.id}`) }
                  />
                </div>
              ))
            ]}
              style={{
                textAlign: 'left',
              }}
              secondaryTextLines={ 2 }
              primaryText={ `${customer.email}` }
              secondaryText={<p> <span> { `${customer.companyName}` }</span><br/><span>{ `${customer.firstName}`+ ' ' + `${customer.lastName}`}</span></p> }
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
		)
	}
}

const mapStateToProps = function (state) {
	return {
    customers: Object.values(state.customers).sort((a, b) => a.email.localeCompare(b.email))
	}
}

export default connect(mapStateToProps, { getCustomers })(CustomerList)
