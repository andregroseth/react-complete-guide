import React, { useEffect } from 'react';

import classes from './Cockpit.css';


const Cockpit = ( props ) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    return () => {
      console.log( '[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });
  // useEffect();
  
  const assignedClasses = [];
  let btnClass = '';
  if(props.showPersons) {
     btnClass = classes.red;
  }
  if (props.personslength <= 2) {
    assignedClasses.push("red"); // classes = ['red']
  }
  if (props.personslength <= 1) {
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

export default React.memo(Cockpit);