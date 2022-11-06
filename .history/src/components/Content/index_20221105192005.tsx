import React, { useState } from 'react';
import Header from '../Header';
import classes from './Content.module.css';
import refresh from '../../assets/icons/refresh-icon.svg';
import BottomNavigation from '../BottomNavigation/index';
import Cards from '../Cards/index';
import first from '../../assets/images/first.png';
import second from '../../assets/images/second.png';
import third from '../../assets/images/third.png';
const initialCardsList = [
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
function Content() {
  const [cardsList, setCardsList] = useState(initialCardsList);

  const onNext = () => {
    console.log('next');
    setCardsList((prev) => {
      console.log(prev);

      return [prev[2], prev[0], prev[1]];
    });
  };
  const onPrev = () => {
    console.log('prev');
  };

  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.titleRow}>
        <h1>Dashboard</h1>
        <div className={classes.refreshIcon}>
          <img src={refresh} alt="" />
        </div>
      </div>
      <div className={classes.cards}></div>
      <Cards cardsList={cardsList} />
      <BottomNavigation onNext={onNext} onPrev={onPrev} />
    </div>
  );
}

export default Content;