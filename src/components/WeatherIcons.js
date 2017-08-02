import React from 'react';
import PropTypes from 'prop-types';

const getDailyIcon = condition => {
  let dialyIcon = '';
    switch(condition){
      case 'clear-day':
        dialyIcon = "wi wi-day-sunny";
      break;
      case 'clear-night':
        dialyIcon = "wi wi-night-clear";
      break;
      case 'partly-cloudy-day':
        dialyIcon = "wi wi-day-cloudy";
      break;
      case 'partly-cloudy-night':
        dialyIcon = "wi wi-night-alt-cloudy";
      break;
      case 'cloudy':
        dialyIcon = "wi wi-cloudy";
      break;
      case 'rain':
        dialyIcon = "wi wi-rain";
      break;
      case 'sleet':
        dialyIcon = "wi wi-sleet";
      break;
      case 'snow':
        dialyIcon = "wi wi-snow";
      break;
      case 'wind':
        dialyIcon = "wi wi-cloudy-gusts";
      break;
      case 'fog':
        dialyIcon = "wi wi-fog";
      break;
      default:
        dialyIcon = "wi wi-thunderstorm";
      break;
    }
  return dialyIcon;
}

const WeatherIcons = props => {
 const icon = getDailyIcon(props.condition)
 return <i className={icon}></i>;
}

WeatherIcons.propTypes = {
  condition: PropTypes.string.isRequired
}

export default WeatherIcons;