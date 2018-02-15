import React from 'react';

// const person = function () {
const person = (props) => {
  return (
    <div>
      <p>Im {props.name} and Im {props.age} years old!!</p>
      <p>{props.children}</p>
    </div>
  )
};

export default person;
