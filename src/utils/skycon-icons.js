const { Skycons } = require('./skycons.js');

const getIcon = (condition, iconNum) => {
    const skycons = new Skycons({color: '#34495e'});
    switch(condition){
      case 'clear-day':
        skycons.add(`icon${iconNum}`, Skycons.CLEAR_DAY);
      break;
      case 'clear-night':
        skycons.add(`icon${iconNum}`, Skycons.CLEAR_NIGHT);
      break;
      case 'partly-cloudy-day':
        skycons.add(`icon${iconNum}`, Skycons.PARTLY_CLOUDY_DAY);
      break;
      case 'partly-cloudy-night':
        skycons.add(`icon${iconNum}`, Skycons.PARTLY_CLOUDY_NIGHT);
      break;
      case 'cloudy':
        skycons.add(`icon${iconNum}`, Skycons.CLOUDY);
      break;
      case 'rain':
        skycons.add(`icon${iconNum}`, Skycons.RAIN);
      break;
      case 'sleet':
        skycons.add(`icon${iconNum}`, Skycons.SLEET);
      break;
      case 'snow':
        skycons.add(`icon${iconNum}`, Skycons.SNOW);
      break;
      case 'wind':
        skycons.add(`icon${iconNum}`, Skycons.WIND);
      break;
      case 'fog':
        skycons.add(`icon${iconNum}`, Skycons.FOG);
      break;
      default:
        skycons.add(`icon${iconNum}`, Skycons.RAIN);
      break;
    }
    skycons.play();
  }

export default getIcon;