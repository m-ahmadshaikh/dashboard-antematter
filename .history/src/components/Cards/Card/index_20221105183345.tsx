import React from 'react';
import classes from './Card.module.css';
function Card() {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <p></p>
        <img />
      </div>
      <img />
      <div className={classes.footer}>
        <div className={classes.footer__card}></div>
        <div className={classes.footer__card}></div>
        <div className={classes.footer__card}></div>
      </div>
    </div>
  );
}

export default Card;
