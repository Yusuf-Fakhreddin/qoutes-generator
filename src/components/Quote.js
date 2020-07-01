import React from 'react';
import classes from './qoute.module.css';
const Quote = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.frame}>
        <h1 className={classes.quote}>{props.saying}</h1>
        <p className={classes.author}>{props.auth}</p>
      </div>
    </div>
  );
};

export default Quote;
