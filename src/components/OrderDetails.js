//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getOrders} from '../actions/orders'
import ChatBox from './ChatBox'

//MaterialUI
    import Paper from 'material-ui/Paper';
    import {
      List,
      ListItem
    } from 'material-ui/List';

    import Subheader from 'material-ui/Subheader';
    import Divider from 'material-ui/Divider';
    import {GridList, GridTile} from 'material-ui/GridList';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: 'http://www.flexicon.nl/img/cache/20c50287b5a2e4230891b103812dde55.jpg',
    comment: 'first version',
  },
  {
    img: 'http://www.flexicon.nl/img/cache/20c50287b5a2e4230891b103812dde55.jpg',
    comment: 'second version',
  },
  {
    img: 'http://www.flexicon.nl/img/cache/20c50287b5a2e4230891b103812dde55.jpg',
    comment: 'after polish',
  },
  {
    img: 'http://www.flexicon.nl/img/cache/20c50287b5a2e4230891b103812dde55.jpg',
    comment: 'angles adjust',
  },
  {
    img: 'http://www.flexicon.nl/img/cache/20c50287b5a2e4230891b103812dde55.jpg',
    comment: 'final version',
  },
];


// const order =
//   {
//   id: 1,
//   orderNumber: '0707',
//   shortDescription: '"Secretary of the Year", 3D crystal glass',
//   description: '3D crystal glass, height: 10cm, width: 5cm, polished: yes, bdshbhdshdvvdcxbhjdsjdsjkjbffdbfsjkjefkhjbjkbkcdhvcshjvhjvlogo: bottom left, wrapping: yes',
//   amount: 3,
//   orderDate: '20-02-2018',
//   deliveryDate: '10-03-2018',
//   paymentType: 'credit card',
//   deliveryId: 'GH 142434',
//   userId: 'N 987'
//   }


class OrderDetails extends PureComponent {
  state = {
    openProfile: false,
  }

  componentWillMount() {
    this.props.getOrders()
  }

  handleToggle = () => {
    this.setState({openProfile: !this.state.openProfile},()=>
    console.log(this.state.openProfile))
  }

  render() {
    let windowWidth = window.screen.availWidth
    console.log(windowWidth);

    const {order} = this.props
     if (!order) return <p>order does not exist</p>

		return (
      <div>
        <Paper style={{
          position: 'relative',
          top: 80,
          botom: 10,
          margin: 'auto',
          width: '50%',
          overflow: 'scroll',
        }}>
        <Subheader style={{
          fontSize: 40,
        }}>Order Details</Subheader>
        <Divider style={{
          padding: 5,
          marginBottom: 5,
        }}/>
        <div style={{
          display: 'flex',
        }}>
          <List style={{
            flex: '1',
          }}>
            <ListItem disabled={true} primaryText="Bonnummer" secondaryText={`${order.orderNumber}`}/>
            <Divider/>
            <ListItem disabled={true} primaryText="Korte omschrijving" secondaryText={`${order.shortDescription}`}/>
            <Divider/>
            <ListItem primaryText="Omschrijving"
             nestedItems={[
              <ListItem
                value={2}
                primaryText={`${order.description}`}
              />,
              ]}/>
              <Divider/>
              <ListItem disabled={true} primaryText="Order Amount" secondaryText={`${order.amount}`}/>
              <Divider/>
              <ListItem disabled={true} primaryText="Order Date" secondaryText={`${order.orderDate}`}/>
              <Divider/>
              <ListItem disabled={true} primaryText="Delivery Date" secondaryText={`${order.deliveryDate}`}/>
              <Divider/>
              <ListItem disabled={true} primaryText="Payment Type" secondaryText={`${order.paymentType}`}/>
              <Divider/>
              <ListItem disabled={true} primaryText="Delivery ID" secondaryText={`${order.deliveryId}`}/>
              <Divider/>
              <ListItem disabled={true} primaryText="User ID" secondaryText={`${order.userId}`}/>
            </List>
            <ChatBox />
          </div>
          <div style={styles.root}>
            <GridList style={styles.gridList} cols={2.2}>
              {tilesData.map((tile) => (
                <GridTile
                  key={tile.img}
                  title={tile.comment}
                  titleStyle={styles.titleStyle}
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                  <img src={tile.img} alt='tile' />
                </GridTile>
              ))}
            </GridList>
          </div>
        </Paper>
      </div>
		)
	}
}

const mapStateToProps = function (state, props) {
	return {
    order: state.orders && state.orders.find(order => `${order.id}`===props.match.params.orderId),
	}
}

export default connect(mapStateToProps, {getOrders})(OrderDetails)
