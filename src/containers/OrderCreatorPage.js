//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


//MaterialUI
  //Components
    import TextField from 'material-ui/TextField'
    import RaisedButton from 'material-ui/RaisedButton'
    import Paper from 'material-ui/Paper';
    import Divider from 'material-ui/Divider';
    import Business from 'material-ui/svg-icons/communication/business'
  //Colors


//Actions
  import { getUser } from '../actions/users'

//Components
  import OrderInfo from '../components/orders/OrderInfo'
  import OrderAdressForm from '../components/orders/OrderAdressForm'
  import OrderRemarkForm from '../components/orders/OrderRemarkForm'
  import OrderAfleverInfo from '../components/orders/OrderAfleverInfo'

//companies
  const companies = [
    {
      id: 1,
      companyName: 1,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
        {
          id: 1,
          firstName: '1',
          lastName: '1',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '1',
        },
        {
          id:2,
          firstName: '2',
          lastName: '2',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '1',
        },
        {
          id:3,
          firstName: '3',
          lastName: '3',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '1',
        },
        {
          id:4,
          firstName: '4',
          lastName: '4',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '1',
        },
      ]
    },
    {
      id: 2,
      companyName: 2,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
        {
          id: 5,
          firstName: '5',
          lastName: '5',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '2',
        },
        {
          id: 6,
          firstName: '6',
          lastName: '6',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '2',
        },
        {
          id: 7,
          firstName: '7',
          lastName: '7',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '2',
        },
        {
          id: 8,
          firstName: '8',
          lastName: '8',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '2',
        },
      ]
    },
    {
      id: 3,
      companyName: 3,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
        {
          id: 9,
          firstName: '9',
          lastName: '9',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '3',
        },
        {
          id: 10,
          firstName: '9',
          lastName: '9',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '3',
        },
        {
          id: 1,
          firstName: '10',
          lastName: '10',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '3',
        },
        {
          firstName: '11',
          lastName: '11',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '3',
        },
      ]
    },
    {
      id: 4,
      companyName: 4,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
        {
          firstName: '12',
          lastName: '12',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '4',
        },
        {
          firstName: '13',
          lastName: '13',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '4',
        },
        {
          firstName: '14',
          lastName: '14',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '4',
        },
        {
          firstName: '15',
          lastName: '15',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '5',
        },
      ]
    },
    {
      id: 5,
      companyName: 5,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
        {
          firstName: '16',
          lastName: '16',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '5',
        },
        {
          firstName: '17',
          lastName: '17',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '5',
        },
        {
          firstName: '18',
          lastName: '18',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '5',
        },
        {
          firstName: '19',
          lastName: '19',
          picture: 'https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg',
          company: '5',
        },
      ]
    },
    {
      id: 6,
      companyName: 6,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 7,
      companyName: 8,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 8,
      companyName: 9,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 9,
      companyName: 10,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 10,
      companyName: 11,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 11,
      companyName: 13,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 12,
      companyName: 14,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 13,
      companyName: 15,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 14,
      companyName: 16,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 15,
      companyName: 17,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 16,
      companyName: 18,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
    {
      id: 17,
      companyName: 19,
      companyLogo: `http://alvaislvid.mysch.lk/images/default-logo-school.png`,
      employees: [
      ]
    },
  ]

class OrderCreator extends PureComponent {
  state = {
  }

  handleChange = (type, state) => {
    this.setState({
      [type]: state
    })
    console.log('handleChange')
  }

  handleSubmit = () => {
    this.orderInfo.onClick()
    this.orderAdressForm.onClick()
    this.orderRemarkForm.onClick()
    this.orderAfleverInfo.onClick()
    setTimeout(() => console.log(this.state), 10)
  }

  componentWillMount() {
    const { currentUser } = this.props
    this.props.getUser(currentUser.id)
  }

	render() {
    const {handleChange} = this
		return (
      <div
        style={{
          position: 'relative',
          top: 55,
          textAlign: 'center',
        }}
      >
        <Paper
          style={{
            width: '100%',
          }}
        >
          <OrderInfo onChange={handleChange} onRef={ref => (this.orderInfo = ref)}/>
          <OrderAdressForm onChange={handleChange} onRef={ref => (this.orderAdressForm = ref)}/>
          <OrderRemarkForm onChange={handleChange} onRef={ref => (this.orderRemarkForm = ref)}/>
          <OrderAfleverInfo onChange={handleChange} onRef={ref => (this.orderAfleverInfo = ref)}/>
        </Paper>
        <RaisedButton
          onClick={_ => this.handleSubmit()}
        />
      </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
    currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, { getUser })(OrderCreator)
