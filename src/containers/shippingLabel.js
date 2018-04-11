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

import logo from "./logo.png";

const faktuuradres = [
  {
    streetname: "Bloemendalerweg",
    streetnumber: 7,
    postcode: "1382 KB",
    city: "Weesp",
    telefoonnummer: "083 445 6623"
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
    invoiceNr: 445,
    remark: "Good to go"
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
      width: "auto",
      height: "auto",
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
          <header
            className="Header"
            style={{ backgroundColor: "#5e5d5e", height: 100 }}
          >
            <img src={logo} style={{ margin: 10 }} />
          </header>
          <div style={styles.root}>
            <GridList cellHeight= "auto" style={styles.gridList}>
              <div>
                {" "}
                {faktuuradres.map(y => (
                  <GridTile>
                    <TextField
                      floatingLabelText="Van: "
                      defaultValue={`
                    Flexicon
                    ${y.streetname} ${y.streetnumber}
                    ${y.city}
                    ${y.telefoonnummer}
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
                      floatingLabelText="Naar: "
                      defaultValue={`
                      ${y.contactpersoon}
                      ${y.addres_regel_1}
                      ${y.addres_regel_2} ${y.streetnumber}
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
                      floatingLabelText="Afleverdatum: "
                      defaultValue={new Date().toDateString()}
                    />
                    <br />
                    <TextField
                      floatingLabelText="Bon Nummer: "
                      defaultValue={y.invoiceNr}
                    />
                    <br />
                    <TextField
                      floatingLabelText="Order Nummer: "
                      defaultValue={y.nr}
                    />
                  </GridTile>
                ))}
              </div>
              <div>
                {" "}
                {orderDetails.map(y => (
                  <GridTile>
                    <TextField
                      floatingLabelText="Remark: "
                      defaultValue={y.remark}
                    />
                  </GridTile>
                ))}
              </div>
            </GridList>
          </div>
          <TextField
            floatingLabelText="Op al onze werkzaamhede en leveringen zijn de algemene voorwaarden van de sector Kunstoffen Industrie van toepassing. Reclames binnen 8 dagen."
            fullWidth={true}
          />
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {};
};

export default connect(mapStateToProps)(ShippingLabel);
