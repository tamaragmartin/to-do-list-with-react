import React, { Component } from "react";


class Card extends Component {
  
  render() {
    const {title, category} = this.props.info

    return (
      <section>
        <p>{category}</p> 
        <p>{title}</p> 
        <button onClick={this.props.remove}>Borrar</button>
        
        
      </section>
    )
  }
}

export default Card;
