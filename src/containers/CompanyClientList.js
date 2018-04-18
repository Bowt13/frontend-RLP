//Dependencies
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

//Functions
import { searchForContact } from '../lib/functions'

//MaterialUI
  //Components
    // import RaisedButton from 'material-ui/RaisedButton'
    import Paper from 'material-ui/Paper'
    import { List, ListItem } from 'material-ui/List'
    import Subheader from 'material-ui/Subheader'
    import Divider from 'material-ui/Divider'
    import Avatar from 'material-ui/Avatar';
    import SearchBar from 'material-ui-search-bar'
    import RaisedButton from 'material-ui/RaisedButton';

//Actions
import { getCustomers } from '../actions/users'
import { getCompanies } from '../actions/companies'

class CustomerList extends PureComponent {

  state={
    props:true
  }
  componentWillMount() {
    this.props.getCompanies()
  }

  handleSubmit = (value) => {
    if (this.state.props === true)
      this.setState({props:false})
    this.setState({
      company: searchForContact(this.props.company ,value)
    })
  }

	render() {

    const { history } = this.props
    let company
    if (this.state.props)
      company= this.props.company
    if(!this.state.props)
      company= this.state.company
  //  const {company} = this.state
    console.log(company)
    //console.log(customers)

  	return (
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
        <SearchBar
          onChange={ this.handleSubmit }
          style={{
          margin: '0 auto',
          maxWidth: 1000,
          maxLength: 500
          }}
          />
          <Divider style={{
            padding: 1,
            backgroundColor: '#F09517',
          }}/>
          <List style={{
            padding: 0,
          }}>
            <Subheader style={{
              fontSize: 40,
              margin: 8,
              textAlign: 'left',
            }}>Klanten</Subheader>
            <Divider style={{
              padding: 1,
              backgroundColor: '#F09517',
            }}/>
            { company && company.map(cpy =>

            <div>
              <Divider />
              <ListItem
                style={{
                maxWidth: '100%',
              }}
                initiallyOpen={ false }
                primaryTogglesNestedList={ true }
                hoverColor= '#F09517'
                primaryText= {cpy.companyName}
                leftAvatar={<Avatar src={cpy.companyLogo}/>}
                nestedItems={[cpy.users.map(user =>
                  <div>
                  <Divider />
                  <ListItem
                    style={{
                    textAlign: 'right',
                    textOverflow: ''
                    }}
                    primaryTogglesNestedList={ true }
                    hoverColor= '#F09517'
                    key={user.id}
                    primaryText= {`${user.firstName} ${user.lastName}`}
                    nestedItems={[user.orders.map(order =>
                      <ListItem
                        hoverColor= '#f4b357'
                        primaryTogglesNestedList={ true }
                        style={{
                        textAlign: 'right',
                        textOverflow: ''
                      }}key={order.id}
                      primaryText={ `${order.shortDescription}` }
                      secondaryText={ 'Besteldatum:' + ' ' + `${order.orderDate}` }
                      onClick={ _=> history.push(`/flexicon/orders/${order.id}`) }/>,
                    )]}
                    />
                  </div>
                )]}
               />

            </div>
          )}
          </List>
          <div>
          <RaisedButton
            labelStyle={{
              labelColor: '#F09517'
            }}
            label="Create Company"
            onClick={ _=> history.push(`/flexicon/companies/creator`) }

             />
          </div>
      </Paper>

    </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
    customers: Object.values(state.customers).sort((a, b) => a.email.localeCompare(b.email)),
    company: Object.values(state.company)
	}
}

export default connect(mapStateToProps, { getCustomers, getCompanies })(CustomerList)
