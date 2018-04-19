//Dependencies
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
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
    import IconButton from 'material-ui/IconButton'
    import RaisedButton from 'material-ui/RaisedButton'
  //Icons
    import ReSize from 'material-ui/svg-icons/navigation/fullscreen';

import NavBar from '../components/NavBar'

//Actions
  import {getOrders, addPhoto} from '../actions/orders'

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

class OrderDetails extends PureComponent {
  state = {
    openProfile: false,
    dialog: false,
    currentPicture: ''
  }

  handleFileChange = (e) => {
    console.log('yes');
    this.props.addPhoto(this.props.order.id, e.target.files[0])
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
  }

  componentWillMount() {
    this.props.getOrders()
  }

  render() {
    const {order} = this.props

    if (!order) return (<div>
      <NavBar/>
      <p>loading...</p>
    </div>
    )
		return (
      <div>
      <NavBar/>
      <div style={{
        display: 'flex',
        width: '90%',
        margin: 'auto',
        paddingTop: '5em',
      }}>
        <Paper style={{
          overflow: 'scroll',
          flexGrow: '2',
          maxWidth: '60vw',
          height: '100%',
          margin: 5,
        }}>
        <Subheader style={{
          fontSize: 40,
          margin: 8,
        }}>Bestelling {order.orderNumber}</Subheader>
        <Divider style={{
          padding: 1,
          backgroundColor: '#F09517',
        }}/>
        <div>
          <List style={{
            textAlign: 'left'
          }}>
            <ListItem
              disabled={true}
              primaryText="Bonnummer:"
              secondaryText={`${order.orderNumber}`}
            />
            <Divider style={{
              height: 2,
            }}/>
            <ListItem
              disabled={true}
              primaryText="Korte omschrijving:"
              secondaryText={`${order.shortDescription}`}
            />
            <Divider style={{
              height: 2,
            }}/>
            <ListItem
              primaryText="Omschrijving:"
              primaryTogglesNestedList={ true }
              nestedItems={[
                <ListItem
                  value={2}
                  primaryText={`${order.description}`}
                  />,
              ]}/>
              <Divider style={{
                height: 2,
              }}/>
              <ListItem
                primaryText="Adressen:"
                primaryTogglesNestedList={ true }
                nestedItems={order.addresses.map(addres => {
                  return (
                    <ListItem
                      value={2}
                      primaryText={`${addres.type}:`}
                      nestedItems={[
                        <ListItem
                          value={2}
                          primaryText={`Contactpersoon: ${addres.contactPerson}`}
                        />,
                        <ListItem
                          value={2}
                          primaryText={addres.email ? `Email: ${addres.email}` : `Telefoonnummer: ${addres.telephoneNumber}`}
                        />,
                        <ListItem
                          value={2}
                          primaryText={`Adres: ${addres.address}`}
                        />,
                        <ListItem
                          value={2}
                          primaryText={`Postcode: ${addres.postcode}`}
                        />,
                        <ListItem
                          value={2}
                          primaryText={`Stad: ${addres.city}`}
                        />,
                      ]}
                    />)
                })}/>
                <Divider style={{
                  height: 2,
                }}/>
            <ListItem
              disabled={true}
              primaryText="Aantal:"
              secondaryText={`${order.amount}`}/>
            <Divider style={{
              height: 2,
            }}/>
            <ListItem
              disabled={true}
              primaryText="Besteldatum:"
              secondaryText={`${order.orderDate}`}/>
            <Divider style={{
              height: 2,
            }}/>
            <ListItem
              disabled={true}
              primaryText="Leverdatum:"
              secondaryText={`${order.deliveryDate}`}/>
            <Divider style={{
              height: 2,
            }}/>
          </List>
          </div>
          <div style={styles.root}>
            <GridList style={styles.gridList} cols={2.2}>
              {order.photos.map((photo) => (
                <GridTile
                  key={photo.link}
                  title='``'
                  titlePosition='top'
                  titleStyle={styles.titleStyle}
                  actionIcon={<IconButton onClick={_ => this.handleOpenDialog(photo.link)}> <ReSize color="rgb(0, 188, 212)" /> </IconButton>}
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 0%,rgba(0,0,0,0) 0%)"
                >
                  <img src={photo.link} alt='tile' />
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
          <RaisedButton
            label='Bestand toevoegen'
            name='file'
            labelPosition='before'
            style={{
              width: 'auto',
              margin: 15,
            }}
            containerElement="label"
          >
            <input type="file"
              style={{
                cursor: 'pointer',
                position: 'absolute',
                width: '100%',
                opacity: 0,
              }}
              accept="image/*"
              onChange={this.handleFileChange}
            />
          </RaisedButton>
        </Paper>
        <ChatBox order={this.props.order} />
      </div>
      </div>
		)
	}
}

const mapStateToProps = function (state, props) {
	return {
    order: state.orders && state.orders.find(order => `${order.orderNumber}`=== props.match.params.orderNumber),
	}
}

export default connect(mapStateToProps, {getOrders, addPhoto})(OrderDetails)
