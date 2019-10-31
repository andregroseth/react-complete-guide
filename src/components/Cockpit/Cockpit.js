import React from 'react';

import classes from './Cockpit.css';


const Cockpit = ( props ) => {
  const assignedClasses = [];
  let btnClass = '';
  if(props.showPersons) {
     btnClass = classes.red;
  }
  if (props.persons.length <= 2) {
    assignedClasses.push("red"); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push("bold"); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
    <h1>{props.title}</h1>
    <p className={assignedClasses.join(' ')}>This is working.</p>
    <button 
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default Cockpit;