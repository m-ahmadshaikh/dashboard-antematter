import React from 'react';
import classes from './Cards.module.css';
import Card from './Card/index';
import second from '../../assets/images/second.png';
import third from '../../assets/images/third.png';
import moreOptions from '../../assets/icons/more-options.svg';
function Cards() {
  const cardsList = [
    {
      name: '',
      imgUrl: '',
      owner: '',
      mintAddress: '',
      tokenAddress: '',
    },
    {
      name: '',
      imgUrl: '',
      owner: '',
      mintAddress: '',
      tokenAddress: '',
    },
    {
      name: '',
      imgUrl: '',
      owner: '',
      mintAddress: '',
      tokenAddress: '',
    },
  ];

  return (
    <div className={classes.main}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
