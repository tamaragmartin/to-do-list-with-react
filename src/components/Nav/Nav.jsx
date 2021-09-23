import React, { Component } from "react";

import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className={this.props.clase}>
        <ul className="nav--ul">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/todo">To-Do</Link></li>
          <li><Link to="/weather">Weather</Link></li>
        </ul>
      </nav>
    )
    
  }
}

export default Nav;
