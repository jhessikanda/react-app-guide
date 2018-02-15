import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      { name : "Rita", age : 25},
      { name : "Mariah", age : 33},
      { name : "Britney", age : 38}
    ]
  }
  
  switchNameHandler = () => {
    console.log('Button clicked');
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hiiiiii!!! </h1>
        <p>React text!!!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
      
      );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Does this work now??'));
    
  }
}

export default App;
