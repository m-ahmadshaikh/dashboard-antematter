import React from 'react';
import classes from './Card.module.css';

import moreOptions from '../../../assets/icons/more-options.svg';
import { makeShort } from '../../../utils/string_utils';
import { Flipped } from 'react-flip-toolkit';

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

  return (
    <Flipped key={name} flipId={name}>
      <div className={classes.main}>
        <div className={classes.header}>
          <p>{name}</p>
          <img alt="" src={moreOptions} />
        </div>
        <div className={classes.main_img}>
          <img alt="" src={imgUrl} />
        </div>
        <div className={classes.footer}>
          <div className={classes.footer__card}>
            <p className={classes.card__title}>Owner</p>
            <p className={classes.card__address}>{makeShort(owner)}</p>
          </div>
          <div className={classes.footer__card}>
            <p className={classes.card__title}>Mint Address</p>
            <p className={classes.card__address}>{makeShort(mintAddress)}</p>
          </div>
          <div className={classes.footer__card}>
            <p className={classes.card__title}>Token Address</p>
            <p className={classes.card__address}>{makeShort(tokenAddress)}</p>
          </div>
        </div>
      </div>
    </Flipped>
  );
}

export default Card;