import React from 'react';
import { ListGroupItem, Col } from 'reactstrap';
import WeatherIcons from '../components/WeatherIcons';
import PropTypes from 'prop-types';

const HourList = ({ time, condition, temperature, icon }) => {
  return(
    <ListGroupItem>
      <Col className="listFont" xs="2" sm="2" md="2">{time}</Col>
      <Col className="listFont" xs="1" sm="1" md="1">
        <WeatherIcons condition={icon}/>
      </Col>
      <Col className="listFont" xs="2" sm="2" md="2">{`${temperature}˚`}</Col>
      <Col className="listFont" xs="4" sm="4" md="4">{condition}</Col>
    </ListGroupItem>
  )
}

HourList.propTypes = {
  time: PropTypes.string.isRequired, 
  condition: PropTypes.string.isRequired, 
  temperature: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
}

export default HourList;