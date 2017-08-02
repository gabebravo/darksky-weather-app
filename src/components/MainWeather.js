import React, {Component} from 'react';
import { ListGroup } from 'reactstrap';
import HourList from '../components/HourList';
import PropTypes from 'prop-types';
const moment = require('moment-timezone');

const styles = {
  fontWeight: '200', color: '#fc41a1'
}

class MainWeather extends Component {

  timeConvertor = (unixTS, timezone) => {
    var timestamp = moment.unix(unixTS).format();
    var momentObj = moment(timestamp);
    var currTime = momentObj.tz(timezone).format('ha');
    return currTime;
  }

  getTimeZoneInfo = (hourlyData, timezone) => {
    const hours = hourlyData.slice(0,24);
    const hoursArr = []; 
    hours.forEach( (hour, index) => {
      if ( index % 2 === 0 ) {
        hoursArr.push(<HourList key={index}
          time={this.timeConvertor(hour.time, timezone)}
          temperature={Math.floor(hour.temperature)}
          condition={hour.summary}
          icon={hour.icon}
          index={index}/>
        );
      }  
    });
    return hoursArr;
  }

  render() {
    const { currently, hourly, timezone } = this.props;
    const hourlyData = this.getTimeZoneInfo(hourly.data, timezone);
    return (
      <div>
        <h1 style={styles}>
          {`${Math.floor(currently.temperature)}˚ ${currently.summary}`}
        </h1>
        <h3 style={styles}>{`${hourly.summary}`}</h3>
        <ListGroup>
          {hourlyData}
        </ListGroup>
      </div>
    );
  }
}

MainWeather.propTypes = {
  currently: PropTypes.object.isRequired,
  hourly: PropTypes.object.isRequired, 
  timezone: PropTypes.string.isRequired,
}

export default MainWeather;