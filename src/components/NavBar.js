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
  //Icons
    import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right'
    import NavigationChevronLeft from 'material-ui/svg-icons/navigation/chevron-left'


class NavBar extends PureComponent {

  state = {
    drawer: true,
    currentUser: {
      firstName: 'Nigel',
      lastName: 'Brown',
      company: 'Codaisseur'
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
          <Avatar
            src='https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg'
            size={150}
            style={{
              position: 'relative',
              top: 20,
            }}
          />
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
