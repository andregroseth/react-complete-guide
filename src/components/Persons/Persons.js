import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
//  static getDerivedStateFromProps(props, state) {
//    console.log('[Persons.js] getDerivedStateFromProps');
 //   return state;
 // }

 // componentWillReceiveProps(props) {
 //   console.log('[Persons.js] componentWillReceiveProps', props);
 // }

  shouldComponentUpdate(nextProps, nextState4) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }

  //componentWillUpdate() {
//
  //}

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate');
  }
  
  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
          isAuth={this.props.isAuthenicated}
        />
      );
    });
  }
}

export default Persons;