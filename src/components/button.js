import React from 'react';
import classes from './button.module.css';
const button = (props) => {
  return (
    <button className={classes.btn} onClick={props.clicked}>
      <i class="fas fa-redo"></i>
    </button>
  );
};

export default button;
