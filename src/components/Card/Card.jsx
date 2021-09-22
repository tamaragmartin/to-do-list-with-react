import React, { Component } from "react";


class Card extends Component {
  
  render() {
    const {title} = this.props.info //añadir category

    return (
      <section>
        <p>{title}</p> 
        {/* <p>{category}</p>  */}
        <button onClick={this.props.remove}>Borrar</button>
        
        
      </section>
    )
  }
}

export default Card;
