import React from 'react';
import classes from './Cards.module.css';
import Card from './Card/index';
import { Flipper, Flipped } from 'react-flip-toolkit';
import FlipMove from 'react-flip-move';

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
  const cardElements = cardsList.map((c) => <Card key={c.name} cardInfo={c} />);
  return (
    <div className={classes.main}>
      <FlipMove></FlipMove>
    </div>
  );
}

export default Cards;
