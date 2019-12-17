import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
constructor(props) {
  super(props);
  this.inputElementRef = React.createRef();
}

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        {this.props.isAuth ? <p>Authenitcated!</p> : <p>Please log in</p>}
        <p key="i1" onClick={this.pros.click}>
          i´m {this.pros.name} and i am {this.pros.age} years old.
          </p>
        <p key="i2">{this.pros.children}</p>
        <input
          key="i3"
         // ref={(inputEl) => {this.inputElement = inputEl}}
         ref={this.inputElementRef}
          type='text'
          onChange={this.pros.changed}
          value={this.pros.name}
        />
      </Aux>
    );
  }
}

Person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);