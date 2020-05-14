import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)

  this.state = {
    squares:Array(100).fill(null),
  }
}

  render(){
    let square = this.state.squares.map((value, index)=> {
      return (
        <Square value={value} key={index}/>
      )
    })

    return(
      <React.Fragment>

        <h1>Battleship App</h1>
        <div id= "game-board">
        {square}
        </div>
      </React.Fragment>
    )
  }
}

export default App
