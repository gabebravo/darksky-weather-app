import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/Header';
import MainWeather from '../components/MainWeather';
import getIcon from '../utils/skycon-icons';
import PropTypes from 'prop-types';

const jsonp = require('jsonp');

class WeatherContainer extends Component {
  constructor(props){
    super(props);
    this.state ={
      lat: props.match.params.lat, 
      lng: props.match.params.lng,
      data: null 
    }
  }

  componentDidMount() {
    const DS_API = `41eb3699a78ce9d1dca2522d5cafdf2b`;
    const DARK_SKY_URL = `https://api.darksky.net/forecast/${DS_API}/${this.state.lat},${this.state.lng}`;
    jsonp(DARK_SKY_URL, null, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        this.setState({ data });
      }
    });
  }

  render() { // multi statement ternary
    const weatherInfo = this.state.data ? (
      getIcon(this.state.data.currently.icon, 500),
      <MainWeather 
        currently={this.state.data.currently}
        hourly={this.state.data.hourly}
        timezone={this.state.data.timezone}/>
        ): '';
    return (
      <Container>
        <Header />
        <Row style={{marginTop: '2rem'}}>
          <Col xs="12" sm="12" md={{ size: 8, offset: 2 }}>
          <canvas id="icon500" width="128" height="128"></canvas>
            {weatherInfo}
          </Col>
        </Row>
      </Container>
    );
  }
}

WeatherContainer.propTypes = {
  lat: PropTypes.string,
  lng: PropTypes.string,
}

export default WeatherContainer;