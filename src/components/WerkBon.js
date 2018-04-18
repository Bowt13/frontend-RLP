import React, {PureComponent} from 'react'
import './WerkBon.css'

//MaterialUI
  //Components
	import Paper from 'material-ui/Paper'
  import RaisedButton from 'material-ui/RaisedButton'
	

export default class WerkBon extends PureComponent {

  state = {}

  handleSave = () => {
    // Save page
  }

  handlePrint = () => {
    // Print page
  }

  render() {
    return (
      <div className='WerkBon'>
        <RaisedButton
          label="Save"
          backgroundColor='#616161'
          labelColor='#ffffff'
          style={
            {
              width:'10%',
              position: 'relative',
              left: 15,
            }
          }
          onClick={this.handleSave}
        />
        <RaisedButton
          label="Print"
          backgroundColor='#616161'
          labelColor='#ffffff'
          style={
            {
              width:'10%',
              position: 'relative',
              left: 15,
            }
          }
          onClick={this.handlePrint}
        />

        <Paper style={{position: 'relative', width: '18cm', height: '25cm', margin: '0 auto', border: '2px solid black'}}>
          <table>
            <tbody>
              <tr>
                <td>
                  <table style={{float: 'left'}}>
                    <tbody>
                      <tr>
                        <td><img src='../images/logo_flexicon.png'/></td>
                        <td>
                          <table style={{float: 'right'}}>
                            <tbody>
                              <tr>
                                <td>Bloemendalerweg 7 | 1382 KB Weesp</td>
                              </tr>
                              <tr>
                                <td>T. 0294 - 413775</td>
                              </tr>
                              <tr>
                                <td>info@flexicon <span style={{color: '#ff6600'}}>|</span> www.flexicon.nl</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table style={{width: '663.667px'}}>
                    <tbody>
                      <tr>
                        <td style={{width: '242px'}}>
                          <table style={{width: '242.667px', border: '1px solid', float: 'left'}}>
                            <tbody>
                              <tr>
                                <th style={{width: '114px', backgroundColor: 'darkgray'}}>
                                  <span style={{color: '#ff6600'}}>BONNUMMER</span>
                                </th>
                                <th style={{width: '112.667px', backgroundColor: '#d3d3d3'}}>+order_number+</th>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style={{width: '405.667px'}}>
                          <table style={{float: 'right', border: '1px solid'}}>
                            <tbody>
                              <tr>
                                <th style={{width: '30%', backgroundColor: 'darkgray'}}>
                                  <span style={{color: '#ff6600'}}>DATUM</span>
                                </th>
                                <th style={{width: '30%', backgroundColor: '#d3d3d3'}}>+order_date+</th>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table style={{width: '663.117px'}}>
                    <tbody>
                      <tr>
                        <td style={{width: '369px'}}>
                          <table style={{width: '91.4198%', border: '1px solid', backgroundColor: '#d3d3d3', float: 'left'}}>
                            <tbody>
                              <tr>
                                <th style={{width: '54%', backgroundColor: 'darkgray'}}>
                                  <span style={{color: '#ff6600'}}>BEZOEKADRES</span>
                                </th>
                                <th style={{width: '197.571%', borderColor: 'white', backgroundColor: 'white'}}></th>
                              </tr>
                              <tr>
                                <td style={{width: '54%', backgroundColor: 'white'}}>Bedrijfsnaam</td>
                                <td style={{width: '197.571%', border: '1px solid'}}>+cust_name+</td>
                              </tr>
                              <tr>
                                <td style={{width: '54%', backgroundColor: 'white'}}>Contactpersoon</td>
                                <td style={{width: '197.571%', border: '1px solid'}}>+cust_contact_name+</td>
                              </tr>
                              <tr>
                                <td style={{width: '54%', backgroundColor: 'white'}}>Adresregel 1</td>
                                <td style={{width: '197.571%', border: '1px solid'}}>+cust_address_line_1+</td>
                              </tr>
                              <tr>
                                <td style={{width: '54%', backgroundColor: 'white'}}>Adresregel 2</td>
                                <td style={{width: '197.571%', border: '1px solid'}}>+cust_address_line_2+</td>
                              </tr>
                              <tr>
                                <td style={{width: '54%', backgroundColor: 'white'}}>Postcode</td>
                                <td style={{width: '197.571%', border: '1px solid'}}>+cust_postcode+</td>
                              </tr>
                              <tr>
                                <td style={{width: '54%', backgroundColor: 'white'}}>Plaats</td>
                                <td style={{width: '197.571%', border: '1px solid'}}>+cust_city+</td>
                              </tr>
                              <tr>
                                <td style={{width: '54%', backgroundColor: 'white'}}>Land</td>
                                <td style={{width: '197.571%', border: '1px solid'}}>+cust_country+</td>
                              </tr>
                              <tr>
                                <td style={{width: '54%', backgroundColor: 'white'}}>Telefoonnummer</td>
                                <td style={{width: '197.571%', border: '1px solid'}}>+cust_contact_phone+</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td style={{width: '277.117px'}}>
                          <table style={{width: '322.467px', border: '1px solid', backgroundColor: '#d3d3d3', float: 'right'}}>
                            <tbody>
                              <tr>
                                <th style={{width: '172px', backgroundColor: 'darkgray'}}>
                                  <span style={{color: '#ff6600'}}>AFLEVERADRES</span>
                                </th>
                                <th style={{width: '132.467px', borderColor: 'white', backgroundColor: 'white'}}></th>
                              </tr>
                              <tr>
                                <td style={{width: '172px', backgroundColor: 'white'}}>Bedrijfsnaam</td>
                                <td style={{width: '132.467px', border: '1px solid'}}>+todo+</td>
                              </tr>
                              <tr>
                                <td style={{width: '172px', backgroundColor: 'white'}}>Contactpersoon</td>
                                <td style={{width: '132.467px', border: '1px solid'}}>+todo+</td>
                              </tr>
                              <tr>
                                <td style={{width: '172px', backgroundColor: 'white'}}>Adresregel 1</td>
                                <td style={{width: '132.467px', border: '1px solid'}}>+deliver_address_line_1+</td>
                              </tr>
                              <tr>
                                <td style={{width: '172px', backgroundColor: 'white'}}>Adresregel 2</td>
                                <td style={{width: '132.467px', border: '1px solid'}}>+deliver_address_line_1+</td>
                              </tr>
                              <tr>
                                <td style={{width: '172px', backgroundColor: 'white'}}>Postcode</td>
                                <td style={{width: '132.467px', border: '1px solid'}}>+deliver_postcode+</td>
                              </tr>
                              <tr>
                                <td style={{width: '172px', backgroundColor: 'white'}}>Plaats</td>
                                <td style={{width: '132.467px', border: '1px solid'}}>+deliver_city+</td>
                              </tr>
                              <tr>
                                <td style={{width: '172px', backgroundColor: 'white'}}>Land</td>
                                <td style={{width: '132.467px', border: '1px solid'}}>+deliver_country+</td>
                              </tr>
                              <tr>
                                <td style={{width: '172px', backgroundColor: 'white'}}>Telefoonnummer</td>
                                <td style={{width: '132.467px', border: '1px solid'}}>+deliver_phone+</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <table style={{width: '663.233px', border: '1px solid', backgroundColor: '#d3d3d3', float: 'left'}}>
                            <tbody>
                              <tr>
                                <th style={{width: '129px', backgroundColor: 'darkgray', height: '18px'}}>
                                  <span style={{color: '#ff6600'}}>ORDERNR</span>
                                </th>
                                <th style={{width: '537.233px', backgroundColor: 'white'}}>+customer_order_number+</th>
                              </tr>
                              <tr>
                                <td style={{width: '129px', backgroundColor: 'white'}}>aantal</td>
                                <td style={{width: '537.233px', border: '1px solid'}}>+order_amount+</td>
                              </tr>
                              <tr style={{height: '188.067px'}}>
                                <td style={{width: '129px', backgroundColor: 'white', height: '188.067px'}}>opdracht omschrijving</td>
                                <td style={{width: '537.233px', border: '1px solid', height: '188.067px'}}>+order_description+</td>
                              </tr>
                              <tr>
                                <td style={{width: '129px', backgroundColor: 'white', height: '18px'}}>aandachtspunten</td>
                                <td style={{width: '537.233px', border: '1px solid', height: '18px'}}>+order_remarks+</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <table style={{width: '663.233px', border: '1px solid', backgroundColor: '#d3d3d3', float: 'left'}}>
                            <tbody>
                              <tr>
                                <th style={{width: '129px', backgroundColor: 'darkgray'}}>
                                  <span style={{color: '#ff6600'}}>LEVERDATUM</span>
                                </th>
                                <th style={{width: '537.233px', backgroundColor: 'white'}}>+order_deliver_date+</th>
                              </tr>
                              <tr>
                                <td style={{width: '129px', backgroundColor: 'white'}}>Leverwijze</td>
                                <td style={{width: '537.233px', border: '1px solid'}}>+order_deliver_type+</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <table style={{width: '663.233px', backgroundColor: '#d3d3d3', float: 'left'}}>
                            <tbody>
                              <tr>
                                <th style={{width: '129px', backgroundColor: 'darkgray'}}>KVK 34243538</th>
                                <th style={{width: '129px', backgroundColor: 'darkgray'}}>BTW nr. NL8156.10.488.B01</th>
                                <th style={{width: '129px', backgroundColor: 'darkgray'}}>IBAN NL33ABNA0497734532</th>
                                <th style={{width: '129px', backgroundColor: 'darkgray'}}>BIC ABNANL2A</th>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style={{width: '129px', backgroundColor: 'white'}}>Op al onze werkzaamheden zijn
                        de algemene voorwaarden van de sector kunstoffen industrie van toepassing,
                        reclameren binnen 8 dagen</td>
                      </tr>
                      <tr>
                        <td style={{width: '129px', backgroundColor: 'white'}}>+pdf_nummer+</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </Paper>
      </div>
    )
  }
}
