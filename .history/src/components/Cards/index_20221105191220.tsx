import React from 'react';
import classes from './Cards.module.css';
import Card from './Card/index';
import first from '../../assets/images/first.png';
import second from '../../assets/images/second.png';
import third from '../../assets/images/third.png';
const cardsList = [
  {
    name: 'Cyberlinx #2551',
    imgUrl: first,
    owner: '72UGr...YdD',
    mintAddress: '72UGr...YdD',
    tokenAddress: '72UGr...YdD',
  },
  {
    name: 'The Eyedeas #1029',
    imgUrl: second,
    owner: '72UGr...YdD',
    mintAddress: '72UGr..vhfkhvkjdfhvkj.YdD',
    tokenAddress: '72UGr...YdD',
  },
  {
    name: 'zombies #7919',
    imgUrl: third,
    owner: '72UGr...YdD',
    mintAddress: '72UGr...YdD',
    tokenAddress: '72UGr...YdD',
  },
];
type PropTypes = {
  cardList: {
    name: string;
    imgUrl: string;
    owner: string;
    mintAddress: string;
    tokenAddress: string;
  }[];
};
function Cards(props: PropTypes) {
  const cardElements = cardsList.map((c) => <Card key={c.name} cardInfo={c} />);
  return <div className={classes.main}>{cardElements}</div>;
}

export default Cards;
