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
    <Flipper flipKey={cardsList[0]}>
      {cardsList.map((d) => (
        <Card cardInfo={d} />
      ))}
    </Flipper>
  );
}

export default Cards;
