//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getOrders} from '../actions/orders'
import ChatBox from './ChatBox'

//MaterialUI
  //Components
    import Paper from 'material-ui/Paper';
    import {
      List,
      ListItem
    } from 'material-ui/List';
    import Subheader from 'material-ui/Subheader';
    import Divider from 'material-ui/Divider';
    import {
      GridList,
      GridTile
    } from 'material-ui/GridList';
    import Dialog from 'material-ui/Dialog';
  //Buttons
    import IconButton from 'material-ui/IconButton';
    import FlatButton from 'material-ui/FlatButton';
  //Icons
    import ReSize from 'material-ui/svg-icons/navigation/fullscreen';


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
    width: '90%',
  },
  titleStyle: {
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
    width: '50%',
    opacity: 0,
  },
};

const tilesData = [
  {
    img: 'http://www.flexicon.nl/img/cache/20c50287b5a2e4230891b103812dde55.jpg',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2013/04/06/11/50/image-editing-101040_960_720.jpg',
  },
  {
    img: 'http://www.clker.com/cliparts/9/a/1/e/13397010011226451784pomme_lrg.jpg',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Santiago_de_Chile_L4.svg/1024px-Santiago_de_Chile_L4.svg.png',
  },
  {
    img: 'https://newevolutiondesigns.com/images/freebies/water-art-wallpaper-4.jpg'
  },
];

class OrderDetails extends PureComponent {
  state = {
    openProfile: false,
    dialog: false,
    currentPicture: ''
  }

  componentWillMount() {
    this.props.getOrders()
    console.log(document.URL.split('/')[document.URL.split('/').length-1])
  }

  handleToggle = () => {
    this.setState({openProfile: !this.state.openProfile},()=>
    console.log(this.state.openProfile))
  }

  handleOpenDialog = (imgUrl) => {
    this.setState({currentPicture: imgUrl})
    this.handleOpen()
  }

  handleOpen = () => {
    console.log('test')
    this.setState({dialog: true})
  }

  handleClose = () => {
    this.setState({dialog: false})
    console.log(this.state)
  };

  render() {
    const {order} = this.props
     if (!order) return <p>order does not exist</p>

		return (
      <div style={{
        display: 'flex',
        width: '100%',
        margin: 'auto',
        paddingTop: '5em',
      }}>
        <Paper style={{
          overflow: 'scroll',
          flexGrow: '2',
          maxWidth: '60vw',
          margin: 5,
        }}>
        <Subheader style={{
          fontSize: 40,
          margin: 8,
        }}>Bestelling nummer {order.id}</Subheader>
        <Divider style={{
          padding: 1,
          backgroundColor: '#F09517',
        }}/>
        <div>
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
            <ListItem disabled={true} primaryText="Bestelling-ID" secondaryText={`${order.deliveryId}`}/>
            <Divider/>
            <ListItem disabled={true} primaryText="Klant-ID" secondaryText={`${order.userId}`}/>
          </List>
          </div>
          <div style={styles.root}>
            <GridList style={styles.gridList} cols={2.2}>
              {tilesData.map((tile) => (
                <GridTile
                  key={tile.img}
                  title='``'
                  titlePosition='top'
                  titleStyle={styles.titleStyle}
                  actionIcon={<IconButton onClick={_ => this.handleOpenDialog(tile.img)}> <ReSize color="rgb(0, 188, 212)" /> </IconButton>}
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0) 0%)"
                >
                  <img src={tile.img} alt='tile' />
                </GridTile>
              ))}
            </GridList>
            <Dialog
              modal={false}
              open={this.state.dialog}
              onRequestClose={this.handleClose}
              autoDetectWindowHeight={true}
              contentStyle={{
                textAlign: 'center',
              }}
            >
              <div style={{
              }}>
                <img
                  className='dialog-picture'
                  src={this.state.currentPicture} alt='tile' />
              </div>
            </Dialog>
          </div>
        </Paper>
        <ChatBox order={this.props.order} />
      </div>
		)
	}
}

const mapStateToProps = function (state, props) {
	return {
    order: state.orders && state.orders.find(order => `${order.id}`=== props.match.params.orderId),
	}
}

export default connect(mapStateToProps, {getOrders})(OrderDetails)
