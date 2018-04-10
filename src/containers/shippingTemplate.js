//Dependencies
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

//MaterialUI
//Components
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Subheader from "material-ui/Subheader";
import { List, ListItem } from "material-ui/List";
import Divider from "material-ui/Divider";
//Colors

const faktuuradres = [
  {
    streetname: "Bloemendalerweg",
    streetnumber: 7,
    postcode: "1382 KB",
    city: "Weesp"
  }
];

const afleverInformasie = [
  {
    id: 1,
    contactpersoon: "Sammy Smith",
    addres_regel_1: "Peter street",
    addres_regel_2: "Building A",
    streetnumber: 8,
    postcode: "1234 AB",
    plaats: "Noordwijk",
    land: "Nederland",
    telefoonnummer: "0616 452 632"
  }
];

const orderDetails = [
  {
    nr: 1,
    product: 1234,
    invoiceNr: 445
  }
];

const styles = [
  {
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around"
    },
    gridList: {
      width: 500,
      height: 500,
      overflowY: "auto"
    }
  }
];
//Components

class ShippingLabel extends PureComponent {
  state = {
    circle: false,
    rounded: false
  };

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <Paper>
          <div style={styles.root}>
            <GridList cellHeight="180" style={styles.gridList}>
              <div>
                {" "}
                {faktuuradres.map(y => (
                  <GridTile>
                    <TextField
                      defaultValue={`
                    ${y.streetname}
                    ${y.streetnumber}
                    ${y.city}
                    `}
                      multiLine={true}
                    />
                  </GridTile>
                ))}
              </div>
              <GridTile>
                <div>
                  {afleverInformasie.map(y => (
                    <TextField
                      defaultValue={`
                      ${y.contactpersoon}
                      ${y.addres_regel_1}
                      ${y.addres_regel_2}
                      ${y.streetnumber}
                      ${y.plaats}
                      ${y.telefoonnummer}`}
                      multiLine={true}
                    />
                  ))}
                </div>
              </GridTile>
              <div>
                {" "}
                {orderDetails.map(y => (
                  <GridTile>
                    <TextField
                      defaultValue={`
                      ${y.nr}
                      ${y.invoiceNr}
                      ${y.product}
                      `}
                      multiLine={true}
                    />
                  </GridTile>
                ))}
              </div>
            </GridList>
          </div>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {};
};

export default connect(mapStateToProps)(ShippingLabel);
