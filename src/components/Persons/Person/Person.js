import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('Person.js inside constructor', props);
  }

  componentWillMount() {
    console.log('Person.js inside componentWillMount');
  }

  componentDidMount() {
    console.log('Person.js inside componentDidMount');
    if(this.props.position === 0)
      this.inputElement.focus();
  }

  render() {
    console.log('Person.js inside render');
    return (
      <Aux>
        <p onClick={this.props.click}>Im {this.props.name} and Im {this.props.age} years old!!</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => {this.inputElement = inp}}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </Aux>
      )

    // return [
    //   <div>
    //     <p onClick={this.props.click}>Im {this.props.name} and Im {this.props.age} years old!!</p>
    //     <p>{this.props.children}</p>
    //     <input type="text" onChange={this.props.changed} value={this.props.name}/>
    //   </div>
    //   ]

    }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
