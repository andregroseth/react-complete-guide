import React, { useEffectj,useRef } from 'react';

import classes from './Cockpit.css';


const Cockpit = ( props ) => {
  const toggleBtnRef = useRef(null);
  toggleBtnRef.current.click();

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // // Http request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
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
    <button ref{} className={btnClass} onClick={props.clicked}>
      Toggle Persons
    </button>
    <button onClick={props.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);