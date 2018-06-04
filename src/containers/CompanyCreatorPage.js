//Dependencies
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

//MaterialUI

//Actions
import { getCompanies, createCompany } from '../actions/companies'

//Components
import CompanyForm from '../components/CompanyForm'
import NavBar from '../components/NavBar'

class CompanyCreator extends PureComponent {
	static propTypes = {
		company: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				companyName: PropTypes.string.isRequired,
				companyLogo: PropTypes.string.isRequired
			})
		).isRequired
	}

	createCompany = company => {
		this.props.createCompany(company)
	}

	componentWillMount() {
		this.props.getCompanies()
	}

	render() {
		const { company } = this.props

		if (this.props.user && this.props.user.role === 'External')
			return <Redirect to="/login" />

		return (
			<div
				style={{
					textAlign: 'center'
				}}>
				<NavBar />
				<CompanyForm onSubmit={this.createCompany} />
			</div>
		)
	}
}

const mapStateToProps = function(state) {
	return {
		company: state.company,
		user: state.user
	}
}

export default connect(
	mapStateToProps,
	{ getCompanies, createCompany }
)(CompanyCreator)
