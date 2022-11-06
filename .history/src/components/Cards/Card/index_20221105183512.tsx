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
        <div className={classes.footer__card}>
          <p className={classes.card__title}>Owner</p>
          <p className={classes.card__address}></p>
        </div>
        <div className={classes.footer__card}>
          <p className={classes.card__title}>Owner</p>
          <p className={classes.card__address}></p>
        </div>
        <div className={classes.footer__card}>
          <p className={classes.card__title}>Owner</p>
          <p className={classes.card__address}></p>
        </div>
      </div>
    </div>
  );
}

export default Card;
