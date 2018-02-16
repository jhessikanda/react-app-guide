import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      { name : "Rita", age : 25},
      { name : "Mariah", age : 33},
      { name : "Britney", age : 38}
    ],
    otherState : 'Some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Button clicked');
    // DONT DO THIS => this.state.persons[0].name = 'Ritta Ora';
    this.setState({
      persons : [
        { name : newName, age : 25},
        { name : "Mariah", age : 33},
        { name : "Britney", age : 40}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons : [
        { name : "Ritta", age : 25},
        { name : "Mariah", age : 33},
        { name : event.target.value, age : 40}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
      const style ={
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };

    return (
      <div className="App">
        <h1>Hiiiiii!!! </h1>
        <p>React text!!!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {this.state.showPersons === true ?
          <div>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: racing</Person>
            <Person name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    click={this.switchNameHandler.bind(this, 'Rittinha')}
                    changed={this.nameChangeHandler}/>
          </div> : null
        }
      </div>

      );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Does this work now??'));

  }
}

export default App;
