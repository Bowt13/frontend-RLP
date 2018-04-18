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

import NavBar from '../components/NavBar'


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
    color: '#F09517',
    textAlign: 'center',
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

    const {order} = this.props
     if (!order) return (<div>
       <NavBar/>
       <p>loading</p>
     </div>
     )

		return (
      <div>
      <NavBar/>
      <div style={{
        display: 'flex',
        width: '80%',
        margin: 'auto',
        paddingTop: '5em',
      }}>
        <Paper style={{
          overflow: 'scroll',
          flexGrow: '2',
          margin: 5,
        }}>
        <Subheader style={{
          fontSize: 40,
          margin: 8,
        }}>Bestelling nummer {order.orderNumber}</Subheader>
        <Divider style={{
          padding: 1,
          backgroundColor: '#F09517',
        }}/>
        <div style={{
          maxWidth: '100%',
        }}>
          <List>
            <ListItem
              disabled={true}
              primaryText="Bonnummer"
              secondaryText={`${order.orderNumber}`}
            />
            <Divider/>
            <ListItem
              disabled={true}
              primaryText="Korte omschrijving"
              secondaryText={`${order.shortDescription}`}
            />
            <Divider/>
            <ListItem
              primaryText="Omschrijving"
              primaryTogglesNestedList={ true }
              nestedItems={[
                <ListItem
                  value={2}
                  primaryText={`${order.description}`}
                  />,
              ]}/>
            <Divider/>
            <ListItem disabled={true} primaryText="Aantal" secondaryText={`${order.amount}`}/>
            <Divider/>
            <ListItem disabled={true} primaryText="Besteldatum" secondaryText={`${order.orderDate}`}/>
            <Divider/>
            <ListItem disabled={true} primaryText="Leverdatum" secondaryText={`${order.deliveryDate}`}/>
            <Divider/>
            <ListItem disabled={true} primaryText="Betalinswijze" secondaryText={`${order.paymentType}`}/>
            <Divider/>
            <ListItem disabled={true} primaryText="Bestelling-ID" secondaryText={`${order.id}`}/>
            <Divider/>
            <ListItem disabled={true} primaryText="Klant-ID" secondaryText={`${order.userId}`}/>
          </List>
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
        <ChatBox />
      </div>
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
