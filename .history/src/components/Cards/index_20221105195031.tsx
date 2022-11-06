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
    <Flipper flipKey={data.join('')}>
    <Flipped key={c.name} flipId={c.name}>
      <Card key={c.name} cardInfo={c} />
    </Flipped>
  ));
  return <div className={classes.main}>{cardElements}</div>;
}

export default Cards;
