import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { id:'abc1', name : "Rita", age : 25},
      { id:'abc2', name : "Mariah", age : 33},
      { id:'abc3', name : "Britney", age : 38}
    ],
    otherState : 'Some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Button clicked');
  //   // DONT DO THIS => this.state.persons[0].name = 'Ritta Ora';
  //   this.setState({
  //     persons : [
  //       { name : newName, age : 25},
  //       { name : "Mariah", age : 33},
  //       { name : "Britney", age : 40}
  //     ]
  //   });
  // }

  deletePersonHandler = (personIndex) => {
    // const newPersons = this.state.persons.slice();
    const newPersons = [...this.state.persons]; //make a copy of the original array
    newPersons.splice(personIndex, 1);
    this.setState({persons : newPersons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const personUpdated = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);
    
    personUpdated.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = personUpdated;

    this.setState({persons : persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    // const style ={
    //     backgroundColor: 'green',
    //     color: 'white',
    //     font: 'inherit',
    //     border: '1px solid blue',
    //     padding: '8px',
    //     cursor: 'pointer'
    // };

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) { 
      persons = ( <div>
                  {this.state.persons.map((person, index) => {
                      return <Person 
                              click={() => this.deletePersonHandler(index)}
                              name={person.name} 
                              age={person.age}
                              key={person.id}
                              changed={(event) => this.nameChangeHandler(event, person.id)}/>

                  })}
                  </div>
                );

      btnClass = classes.Red;
    }

    // let classes = ['red', 'bold'].join(' ');
    
    const assignedClasses = [];
    
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }    
    
    return (
      <div className={classes.App}>
          <h1>Hiiiiii!!! </h1>
          <p className={assignedClasses.join(' ')}>React text!!!</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons
          </button>
          {persons}
      </div>
      

      );
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Does this work now??'));

  }
}

export default App;
