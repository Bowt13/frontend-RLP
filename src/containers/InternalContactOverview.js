//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

//MaterialUI
  //Components
    import Drawer from 'material-ui/Drawer';
    import AppBar from 'material-ui/AppBar'
    import RaisedButton from 'material-ui/RaisedButton'
    import Avatar from 'material-ui/Avatar';
    import Paper from 'material-ui/Paper';
    import
      {List,
      ListItem}
    from 'material-ui/List';
    import Subheader from 'material-ui/Subheader';
    import Divider from 'material-ui/Divider';
    import Business from 'material-ui/svg-icons/communication/business'
    import SearchBar from 'material-ui-search-bar'

  //Colors

//Actions
import {getCompanies} from '../actions/companies'

//Components

class InternalContactOverview extends PureComponent {
  state = {
    drawer: true,
    create: false
 }
    currentUser: {
      firstName: 'Nigel',
      lastName: 'Brown',
      picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
      //company: 'Codasseur',
    }


  static propTypes = {
    company: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      companyName: PropTypes.string.isRequired,
      companyLogo: PropTypes.string.isRequired,
    })).isRequired,
    employees: PropTypes.arrayOf(PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
    })).isRequired,
  }

  handleToggle = () => this.setState({drawer: !this.state.drawer});

  // componentWillMount() {
  //   let employelist = {x: 'placeholder'}
  // }
  componentWillMount() {
      this.props.getCompanies()
    }

	render() {
    const {company} = this.props
    console.log(company)

		return (
      <div style={{
        textAlign: 'center',
      }}>
      <SearchBar
        onChange={() => console.log('onChange')}
        onRequestSearch={() => console.log('onRequestSearch')}
        style={{
        margin: '0 auto',
        maxWidth: 800
        }}
        />
        <Paper
          style={{
            position: 'relative',
            top: 80,
            botom: 10,
            left: '25%',
            width: '50%',
          }}
        >
        <SearchBar
          onChange={() => console.log('onChange')}
          onRequestSearch={() => console.log('onRequestSearch')}
          style={{
          margin: '0 auto',
          maxWidth: 800
          }}
          />
          <br />
          <List
            style={{
              position: 'relative',
              height: 550,
              overflow: 'scroll',
              }}
          >
            <Subheader
              style={{
                fontSize: 40,
              }}
            >Companies</Subheader>
            <Divider
              style={{
                padding: 5,
                marginBottom: 5,
              }}
            />
            <Divider />
            {company.map((cpy) => (
              <div>
              <ListItem
                value={cpy.id}
                primaryText={cpy.companyName}
                leftAvatar={<Avatar src={cpy.companyLogo} />}
                nestedItems={[
                  <ListItem
                    value={2}
                    primaryText="Grace Ng"
                    leftAvatar={<Avatar src='https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg'/>}
                  />,
                ]}
              />
              <Divider />
              </div>
            ))}
          </List>
        </Paper>
      </div>
		)
	}
}

const mapStateToProps = function(state) {
	return {
    company: state.company
  }
}

export default connect(mapStateToProps, {getCompanies})(InternalContactOverview)
