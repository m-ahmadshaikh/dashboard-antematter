import React from 'react';
import classes from './Cards.module.css';
import Card from './Card/index';
import first from '../../assets/images/first.png';
import second from '../../assets/images/second.png';
import third from '../../assets/images/third.png';
import moreOptions from '../../assets/icons/more-options.svg';
const cardsList = [
  {
    name: '',
    imgUrl: first,
    owner: '',
    mintAddress: '',
    tokenAddress: '',
  },
  {
    name: '',
    imgUrl: second,
    owner: '',
    mintAddress: '',
    tokenAddress: '',
  },
  {
    name: '',
    imgUrl: third,
    owner: '',
    mintAddress: '',
    tokenAddress: '',
  },
];

function Cards() {
  return (
    <div className={classes.main}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
