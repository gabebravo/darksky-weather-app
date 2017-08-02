import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import homePage from './containers/AddressContainer'
import weatherResults from './containers/WeatherContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={homePage}/>
            <Route path='/weather/:lat/:lng' component={weatherResults}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
