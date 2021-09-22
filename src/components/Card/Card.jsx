import React, { Component } from "react";


class Card extends Component {

  // constructor(props) {
  //   super(props)
  
  //   this.state = {
       
  //   }
  // }
    
  render() {
    const {title} = this.props.info

    return (
      <section>
        <p>{title} 
        <button onClick={this.props.remove}>Borrar</button>
        </p>
        
      </section>
    )
  }
}

export default Card;
