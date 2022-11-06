import React from 'react';
import classes from './Card.module.css';
import first from '../../../assets/images/first.png';
import second from '../../../assets/images/second.png';
import third from '../../../assets/images/third.png';
import moreOptions from '../../../assets/icons/more-options.svg';

type PropType = {
  cardInfo: {
    name: string;
    imgUrl: string;
    owner: string;
    mintAddress: string;
    tokenAddress: string;
  };
};
function Card(props: PropType) {
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <p>Cyberlinx #2551</p>
        <img src={moreOptions} />
      </div>

      <img src={first} className={classes.main_img} />
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
