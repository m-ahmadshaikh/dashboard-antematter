import React from 'react';
import classes from './Cards.module.css';
import Card from './Card/index';
import { Flipper, Flipped } from 'react-flip-toolkit';
type PropTypes = {
  cardsList: {
    name: string;
    imgUrl: string;
    owner: string;
    mintAddress: string;
    tokenAddress: string;
  }[];
};
function Cards(props: PropTypes) {
  const { cardsList } = props;

  return (
    <div className={classes.main}>
      {cardsList.map((d) => (
        <Card key={d.name} cardInfo={d} />
      ))}
    </div>
  );
}

export default Cards;
