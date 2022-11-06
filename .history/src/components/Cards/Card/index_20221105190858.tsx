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
  const {
    cardInfo: { name, imgUrl, owner, mintAddress, tokenAddress },
  } = props;

  const makeShort = (str: string) => {
    return str.slice(0, 5) + '...' + str.slice(-3);
  };
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <p>{name}</p>
        <img src={moreOptions} />
      </div>

      <img src={imgUrl} className={classes.main_img} />
      <div className={classes.footer}>
        <div className={classes.footer__card}>
          <p className={classes.card__title}>Owner</p>
          <p className={classes.card__address}>{makeShort(owner)}</p>
        </div>
        <div className={classes.footer__card}>
          <p className={classes.card__title}>Mint Address</p>
          <p className={classes.card__address}>{mintAddress}</p>
        </div>
        <div className={classes.footer__card}>
          <p className={classes.card__title}>Token Address</p>
          <p className={classes.card__address}>{tokenAddress}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
