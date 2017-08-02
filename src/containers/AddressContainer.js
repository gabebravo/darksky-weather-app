import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Header from '../components/Header';
import AddressSearch from '../components/AddressSearch';

const defaultState = {
  address: '', 
  redirect: false, 
  lat: '0', 
  lng: '0'
}

class AddressContainer extends Component {

  state = defaultState;

  componentWillUnmount(){
    this.setState(defaultState);
  }

  updateAddress = (e) => {
    const address = e.target.value;
    this.setState({ address })
  }

  getMapCoordinates = () => {
    const GOOGLE_MAP_API = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
    if( this.state.address.length === 0 ) { return console.log('Please enter and address') };
    const addressString = encodeURIComponent(this.state.address); // formats string to query string url param
    
    axios.get(`${GOOGLE_MAP_API}${addressString}`)
    .then(result => {
      const {lat,lng} = result.data.results[0].geometry.location;
      this.setState({ redirect: true, lat, lng });
    })
    .catch(response => {
      if (response instanceof Error) {
      // Something happened in setting up the request that triggered an Error 
        console.log('Error:', 'That request cannot be processed. Please check the address.');
      } else {
        // The request was made, but the server responded with a status code that falls out of the range of 2xx 
        console.log('Unable to connect to Google servers');
      }
    })
  }

  render() {
    const redirect = this.state.redirect ? 
      <Redirect push to={{ // push keyword required for back clicking
        pathname: `/weather/${this.state.lat}/${this.state.lng}`,
      }}/>: '';
    return (
      <Container>{redirect}
        <Header />
        <Row style={{marginTop: '5rem'}}>
          <Col xs="12" sm="12" md={{ size: 8, offset: 2 }}>
            <AddressSearch adressHandler={this.updateAddress}
              addressValue={this.state.address}/>
            <Button style={{ backgroundColor: '#fc41a1', color: '#fff'}}
            onClick={this.getMapCoordinates}>Search</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddressContainer;