import React, { Component } from "react";
import List from '../List/List';
import Home from '../Home/Home';
import WeatherList from '../WeatherList/WeatherList';
import Error from '../Error/Error';

import { Route,Switch } from 'react-router-dom';

class Main extends Component {
  
  render() {
    return (
      <main className="main">
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/todo" component={List} />
            <Route path="/weather" component={WeatherList} />
            <Route component={Error} />
        </Switch>
      </main>
    )
  }
}

export default Main;
