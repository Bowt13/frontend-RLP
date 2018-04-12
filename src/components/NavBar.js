//Dependencies
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

//Image
import logo from './logo.png'

//MaterialUI
  //Components
    import Drawer from 'material-ui/Drawer'
    import AppBar from 'material-ui/AppBar'
    import Avatar from 'material-ui/Avatar'
    import IconButton from 'material-ui/IconButton'
    import { List, ListItem } from 'material-ui/List';
    import Divider from 'material-ui/Divider'
  //Icons
    import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
    import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left'
    import FeaturedPlayList from 'material-ui/svg-icons/av/featured-play-list'
    import Email from 'material-ui/svg-icons/communication/email'
    import Person from 'material-ui/svg-icons/social/person'


class NavBar extends PureComponent {

  state = {
    drawer: true,
    currentUser: {
      firstName: 'Nigel',
      lastName: 'Brown',
      company: {
        name: 'Codaisseur',
        address: {
          street: 'Burgerweeshuispad 201',
          extra: 'Tripolis, building 200',
          city: '1076 GR Amsterdam',
          country: 'The Netherlands'
        }
      },
      role: 'internal'
    },
  }


  render() {

    const { currentUser } = this.props

    return(
      <div style={{
        textAlign: 'center',
      }}>
        <AppBar
          title={
            <img
              style={{
                height: 60,
              }}
              src={ logo }
            />}
          titleStyle={{
            position: 'center',
          }}
          iconElementLeft={
            <IconButton
              style={{
                position: 'relative',
                bottom: 5,
              }}
            >
              <NavigationChevronRight
                viewBox='0 0 17 17'
              />
            </IconButton>
          }
          style={{
            position: 'fixed',
            width: '100%',
            backgroundColor:'#5e5d5e',
          }}
          onLeftIconButtonClick={_=> this.setState({drawer: !this.state.drawer})}
        />
        <Drawer width={300} open={this.state.drawer} >
          <AppBar
            title={`${this.state.currentUser.firstName} ${this.state.currentUser.lastName}`}
            titleStyle={{
              color: '#F09517',
            }}
            showMenuIconButton={ false }
            iconElementRight={
              <IconButton
                style={{
                  position: 'relative',
                  bottom: 5,
                }}
              >
                <NavigationChevronLeft
                  viewBox='0 0 17 17'
                />
              </IconButton>
            }
            style={{
              width: '100%',
              backgroundColor:'#5e5d5e',
            }}
            onRightIconButtonClick={_=> this.setState({drawer: !this.state.drawer})}
          />
          <h3>{`${this.state.currentUser.company.name}`}</h3>
          <div
            style={{
              lineHeight: 0.7,
              fontSize: 14,
              margin: 30,
            }}
          >
            <p>{`${this.state.currentUser.company.address.street}`}</p>
            <p>{`${this.state.currentUser.company.address.extra}`}</p>
            <p>{`${this.state.currentUser.company.address.city}`}</p>
            <p>{`${this.state.currentUser.company.address.country}`}</p>
          </div>
          <Divider />
          <List
            style={{
              textAlign: 'left',
              marginTop: 20,
              marginLeft: 10,
              hoverColor:'#F09517',
            }}
          >
            <ListItem primaryText="Je bestellingen"
              leftIcon={<FeaturedPlayList  />}
            />
            <ListItem primaryText="Berichten"
              leftIcon={<Email />}
            />
            <ListItem primaryText="Gegevens bewerken"
              leftIcon={<Person />}
            />
          </List>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps)(NavBar)
