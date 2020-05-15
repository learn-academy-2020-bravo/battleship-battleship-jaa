import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

var shipsPosition = Array(100).fill(null)
for (var i = 0; i < 5; i++) {
  shipsPosition[i] = "S"
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0!== currentIndex){
    randomIndex = Math.floor(Math.random()* currentIndex);
    currentIndex -= 1

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue
  }
  return array
}

shuffle(shipsPosition)
console.log(shipsPosition);

class App extends Component{
  constructor(props){
    super(props)


  this.state = {
    squares:Array(100).fill(null),
    hiddenShips: shipsPosition,
    count: 10,
    remainingShips: 5,
  }
}

handleChange= (index) => {
  var squares = [...this.state.squares]
  squares[index] = this.state.hiddenShips[index] ? this.state.hiddenShips[index] : "X"
  var newState;
  if (squares[index] == 'S'){
    newState = {squares: squares, count: this.state.count -1, remainingShips: this.state.remainingShips -1};
  }
  else{
    newState = {squares: squares, count: this.state.count -1}
  }
  this.setState(newState, ()=> {
    if(this.state.remainingShips === 0) {
      setTimeout(() => {
        alert("you sank all the ships")}, 300)

    }
    else if(this.state.count === 0){
      setTimeout(() => {
        alert("you lost LOL")}, 300)

    }
  })
}

  render(){
    let square = this.state.squares.map((value, index)=> {
      return (
        <Square value={value} key={index} onClick={() => this.handleChange(index)}/>
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
