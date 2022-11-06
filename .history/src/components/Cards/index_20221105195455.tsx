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
  const cardElements = cardsList.map((c) => (
    <Flipped key={c.name} flipId={c.name}>
      <Card cardInfo={c} />
    </Flipped>
  ));
  return (
    <Flipper flipKey={cardsList[0].owner}>
      <div className={classes.main}>{cardElements}</div>
    </Flipper>
  );
}

export default Cards;
