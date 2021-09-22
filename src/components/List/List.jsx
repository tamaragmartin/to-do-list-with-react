import React, { Component } from "react";
import Card from '../Card'
import cards from '../../data.js'


class List extends Component {

constructor(props) {
  super(props)

  this.state = {
    data:{},
    cards: cards
     
  }
}

addTask = (event) => {
  event.preventdefault();
  const title = event.target.title.value;

  const newTask = {title};
  this.setState({cards:[...this.state.cards, newTask]})
}

removeOne = (i) => {
  const remainingTasks = this.state.cards.filter((card,j) => j!==i)
  this.setState({cards:remainingTasks})
}

resetTasks = () => {
  this.setState({cards:cards})
}

removeAll = () => {
  this.setState({ data:{},cards:[] })
}

paintTask = () => {
  return this.state.cards.map((card, i) => (
    <Card info={card} key={i} remove={() => this.removeOne(i)} />
  ));
}


  render() {
    return (
    <>
      <form onSubmit="this.addTask">
        <label>
        <input type="text" name="addTask" placeholder="Añade una tarea"/>
        </label>
        <input type="submit" value="Add"/>
      </form>
            
      <section>
        <article>
           <h4>Tareas pendientes:</h4> 
           {this.paintTask()} 
        </article>
      </section>

      <section>
        <button onClick={this.resetTasks}>Reset</button>
        <button onClick={this.removeAll}>Clear</button>
      </section> 
    
    </>
    )
  }
}

export default List;
