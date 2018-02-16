import React from 'react';
import './Person.css';

// const person = function () {
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>Im {props.name} and Im {props.age} years old!!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;
