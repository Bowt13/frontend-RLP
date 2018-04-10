//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


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
  //Colors


//Actions


//Components

//companies
  const companies = [
    {
      companyName: 1,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 2,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 3,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 4,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 5,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 6,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 8,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 9,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 10,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 11,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 13,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 14,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 15,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 16,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 17,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 18,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
    {
      companyName: 19,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
    },
  ]
class InternalContactOverview extends PureComponent {
  state = {
    drawer: true,
    currentUser: {
      firstName: 'Nigel',
      lastName: 'Brown',
      company: 'Codasseur'
    },
  }

  handleToggle = () => this.setState({drawer: !this.state.drawer});

	render() {

		return (
      <div style={{
        textAlign: 'center',
      }}>
        <AppBar
          title="Flexicon"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          style={{
            position: 'fixed',
            width: '100%',
            backgroundColor:'#616161',
          }}
          onLeftIconButtonClick={_=> this.setState({drawer: !this.state.drawer})}
        />
        <Drawer width={300} open={this.state.drawer} >
          <AppBar
            title={`${this.state.currentUser.firstName} ${this.state.currentUser.lastName}`}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={{
              width: '100%',
              backgroundColor:'#616161',
            }}
            onLeftIconButtonClick={_=> this.setState({drawer: !this.state.drawer})}
          />
          <Avatar
            src='https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg'
            size={200}
            style={{
              position: 'relative',
              top: 20,
            }}
          />
        </Drawer>
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
          }}>Companies</Subheader>
          <Divider style={{
            padding: 5,
            marginBottom: 5,
          }}/>
          <Divider />
          {companies.map((company) => (
            <div>
            <ListItem
              primaryText={`${company.companyName}`}
              leftAvatar={<Avatar src={`${company.companyLogo}`} />}
              rightIcon={<Business />}
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

const mapStateToProps = function (state) {
	return {
	}
}

export default connect(mapStateToProps)(InternalContactOverview)
