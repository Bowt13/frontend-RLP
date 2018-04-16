//Dependencies
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

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

  componentWillMount() {
    this.props.getCustomers()
  }

	render() {

    const { customers } = this.props

		return (
      <div>
        <Paper style={{
          position: 'relative',
          top: 90,
          botom: 10,
          left: '25%',
          width: '50%',
          overflow: 'scroll',
        }}>
        <List>
          <Subheader style={{
            fontSize: 40,
            margin: 8,
            textAlign: 'left',
          }}>Klanten</Subheader>
          <Divider style={{
            padding: 1,
            backgroundColor: '#F09517',
          }}/>
          {customers && customers.map(customer => (
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
                    hoverColor= '#F09517'
                    primaryText={`${order.shortDescription}`}
                    secondaryText={'Besteldatum:' + ' ' + `${order.orderDate}`}
                  />
                </div>
              ))
            ]}
              style={{
                textAlign: 'left',
              }}
              secondaryTextLines={2}
              primaryText={`${customer.email}`}
              secondaryText={<p> <span> {`${customer.companyName}`}</span><br/><span>{`${customer.firstName}`+ ' ' + `${customer.lastName}`}</span></p>}
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

const mapStateToProps = function (state) {
	return {
    customers: Object.values(state.customers).sort((a, b) => a.email.localeCompare(b.email))
	}
}

export default connect(mapStateToProps, { getCustomers })(CustomerList)
