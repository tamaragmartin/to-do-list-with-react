import React, { Component } from "react";

import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <>
      <h4>Bienvenidos a mi app</h4>
            
      <button><Link to="/todo">To-Do</Link></button>
      <button><Link to="/weather">Weather</Link></button>
      </>
    )
  }
}

export default Home;
