//Dependencies
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

//Image
import logo from './logo.png'

//actions
import { logout, getCurrentUser } from '../actions/users'

//MaterialUI
  //Components
    import Drawer from 'material-ui/Drawer'
    import AppBar from 'material-ui/AppBar'
    import IconButton from 'material-ui/IconButton'
    import { List, ListItem } from 'material-ui/List'
    import Divider from 'material-ui/Divider'
    import RaisedButton from 'material-ui/RaisedButton'
  //Icons
    import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
    import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left'
    import FeaturedPlayList from 'material-ui/svg-icons/av/featured-play-list'
    import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart'
    import People from 'material-ui/svg-icons/social/people'


class NavBar extends PureComponent {

  state = {
    drawer: false
  }

  componentWillMount() {
    if (!this.props.user.id) {
     this.props.getCurrentUser()
    }
  }

  handleClick = () => {
    this.props.logout()
    this.props.history.push('/login')
  }

  handleDrawerClick = (type) => {
    switch (type) {
      case "NieuweBestelling":
        this.setState({drawer: false})
        this.props.history.push('/flexicon/nieuwebestelling')
        break
      case "JeBestellingen":
        this.setState({drawer: false})
        this.props.history.push('/flexicon/bestellingen')
        break
      case "Klanten":
        this.setState({drawer: false})
        this.props.history.push('/flexicon/klanten')
      default:

    }
  }

  render() {

    const { user, location } = this.props

    if (location.pathname.indexOf('flexicon') <= 0 ) return(
      <header className="Header" style={{ backgroundColor: '#5e5d5e', height: 100, }}>
        <img src={ logo } style={{ margin: 10, }} alt='logo'/>
      </header>
    )

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
              alt='logo'
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
          iconElementRight={
            <RaisedButton
  	          label="Afmelden"
              backgroundColor= '#F09517'
              onClick={ this.handleClick }
  	          style={
  	            {
                  position: 'relative',
                  top: 5,
                  right: 20,
  								backgroundColor:'#9A9A98',
  	            }
  	          }
  	        />
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
            title={`${user.firstName} ${user.lastName}`}
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
          <h3
            style={{
              marginTop: 20,
            }}
          >
            {`${user.companyName}`}
          </h3>
          <Divider />
              <List
                style={{
                  textAlign: 'left',
                  marginTop: 20,
                  marginLeft: 10,
                  hoverColor:'#F09517',
                }}
              >
              {this.props.user && this.props.user.role === "External" &&
                <div>
                  <ListItem primaryText="Je bestellingen"
                    leftIcon={<FeaturedPlayList color='#F09517'/>}
                    onClick={_ => this.handleDrawerClick("JeBestellingen")}
                  />
                  <ListItem primaryText="Nieuwe bestelling"
                    leftIcon={<ShoppingCart color='#F09517'/>}
                    onClick={_ => this.handleDrawerClick("NieuweBestelling")}
                  />
                </div>
              }

              {this.props.user && this.props.user.role === "Internal" &&
                <div>
                  <ListItem primaryText="Klanten"
                    leftIcon={<People color='#F09517'/>}
                    onClick={_ => this.handleDrawerClick("Klanten")}
                  />
                  <ListItem primaryText="Bestellingen"
                    leftIcon={<ShoppingCart color='#F09517'/>}
                    onClick={_ => this.handleDrawerClick("JeBestellingen")}
                  />
                </div>
              }

            </List>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		user: state.user
	}
}

export default withRouter(connect(mapStateToProps, { logout, getCurrentUser })(NavBar))
