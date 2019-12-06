import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {


  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        <p key="i1" onClick={this.pros.click}>
          i´m {this.pros.name} and i am {this.pros.age} years old.
          </p>
        <p key="i2">{this.pros.children}</p>
        <input
          key="i3"
          type='text'
          onChange={this.pros.changed}
          value={this.pros.name}
        />
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);