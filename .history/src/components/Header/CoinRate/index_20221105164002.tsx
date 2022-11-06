import React from 'react';
import classes from './CoinRate.module.css';
import icon from '../../../assets/icons/icon.svg';
function CointRate() {
  return (
    <div className={classes.main}>
      <img src={icon}>
      <p className={classes.name}> ETH/USDT</p>
      <p className={classes.rate}>1137.62 +2.62%↑</p>
    </div>
  );
}

export default CointRate;
