import React, { PureComponent } from 'react';
import classes from './App.css';
// import Person from '../components/Persons/Person/Person';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('App.js inside constructor', props);

    // const React = require('react');
    // console.log(React.version);

    this.state = {
      persons : [
        { id:'abc1', name : "Rita", age : 25},
        { id:'abc2', name : "Mariah", age : 33},
        { id:'abc3', name : "Britney", age : 38}
      ],
      otherState : 'Some other value',
      showPersons: false,
      toggleClicked:0
    };
  }

  componentWillMount() {
    console.log('App.js inside componentWillMount');
  }

  componentDidMount() {
    console.log('App.js inside componentDidMount');
  }

  // checks for different component state
  // PureComponent implements this logic alredy
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('UPDATE App.js inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //         nextState.showPersons !== this.state.showPersons;
  // }

  // state = {
  //   persons : [
  //     { id:'abc1', name : "Rita", age : 25},
  //     { id:'abc2', name : "Mariah", age : 33},
  //     { id:'abc3', name : "Britney", age : 38}
  //   ],
  //   otherState : 'Some other value',
  //   showPersons: false
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
    this.setState( (prevState, props) => {
      return {
      showPersons: !doesShow,
      toggleClicked: prevState.toggleClicked+1
      }
    });
  }

  render() {
    console.log('App.js inside render');

    let persons = null;

    if (this.state.showPersons) {
      persons = ( <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}>
                  </Persons>);
      }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
            appTitle={this.props.title}
            persons={this.state.persons}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler} />
        {persons}
      </Aux>
      );
  }
}

export default withClass(App, classes.App);
