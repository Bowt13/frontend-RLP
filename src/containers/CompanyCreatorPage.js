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
import {getCompanies, createCompany} from '../actions/companies'

//Components
import CompanyForm from '../components/CompanyForm'

class CompanyCreator extends PureComponent {
  static propTypes = {
    company: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      companyName: PropTypes.string.isRequired,
      companyLogo: PropTypes.string.isRequired,
    })).isRequired,
  };

  createCompany = (company) => {
    this.props.createCompany(company)
  }

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

      <Paper
        style={{
        position: 'relative',
        top: 80,
        botom: 10,
        left: '25%',
        width: '50%',
        }}
      >

     <CompanyForm onSubmit={this.createCompany}/>


   </Paper>
</div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
    company: state.company
	}
}

export default connect(mapStateToProps, {getCompanies, createCompany})(CompanyCreator)
