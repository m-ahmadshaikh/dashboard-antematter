import React from 'react';
import classes from './Card.module.css';
import first from '../../../assets/images/first.png';
import second from '../../../assets/images/second.png';
import third from '../../../assets/images/third.png';
function Card() {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <p></p>
        <img  src={first/>
      </div>
      <img />
      <div className={classes.footer}>
        <div className={classes.footer__card}>
          <p className={classes.card__title}>Owner</p>
          <p className={classes.card__address}>72UGr...YdD</p>
        </div>
        <div className={classes.footer__card}>
          <p className={classes.card__title}>Mint Address</p>
          <p className={classes.card__address}>72UGr...YdD</p>
        </div>
        <div className={classes.footer__card}>
          <p className={classes.card__title}>Token Address</p>
          <p className={classes.card__address}>72UGr...YdD</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
