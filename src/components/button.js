import React from 'react';
import classes from './button.module.css';
const button = (props) => {
  return (
    <button
      // style={{ backgroundColor: props.color }}
      className={classes.btn}
      onClick={props.clicked}
    >
      NEW QUOTE
    </button>
  );
};

export default button;
