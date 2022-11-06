import React, { useEffect, useState } from 'react';
import Header from '../Header';
import classes from './Content.module.css';
import refresh from '../../assets/icons/refresh-icon.svg';
import BottomNavigation from '../BottomNavigation/index';
import Cards from '../Cards/index';
import first from '../../assets/images/first.png';
import second from '../../assets/images/second.png';
import third from '../../assets/images/third.png';
import metaplex from '../../services/Api';
import { PublicKey } from '@solana/web3.js';
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
  useEffect(() => {
    const getNft = async () => {
      const mintAddress = new PublicKey(
        'ATe3DymKZadrUoqAMn7HSpraxE4gB88uo1L9zLGmzJeL'
      );

      const nft = await metaplex.nfts().findByMint({ mintAddress });
      return nft;
    };
  }, []);

  const onNext = () => {
    setCardsList((prev) => {
      const newList = [...prev];
      for (let i = 0; i < prev.length; i++) {
        if (i == 0) {
          newList[i] = prev[prev.length - 1];
        } else {
          newList[i] = prev[i - 1];
        }
      }
      return newList;
    });
  };
  const onPrev = () => {
    setCardsList((prev) => {
      const newList = [...prev];
      for (let i = 0; i < prev.length; i++) {
        if (i == prev.length - 1) {
          newList[i] = prev[0];
        } else {
          newList[i] = prev[i + 1];
        }
      }
      return newList;
    });
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
