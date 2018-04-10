//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


//MaterialUI
  //Components
    import Drawer from 'material-ui/Drawer';
    import AppBar from 'material-ui/AppBar'
    import RaisedButton from 'material-ui/RaisedButton'
  //Colors


//Actions


//Components


class InternalContactOverview extends PureComponent {
  state = {
    open: false,
  }

  handleToggle = () => this.setState({open: !this.state.open});

	render() {

		return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        />
        <Drawer width={200} openSecondary={true} open={this.state.open} >
          <AppBar title="AppBar" />
        </Drawer>
      </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
	}
}

export default connect(mapStateToProps)(InternalContactOverview)
