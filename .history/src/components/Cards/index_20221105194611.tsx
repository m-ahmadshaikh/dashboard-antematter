import React from 'react';
import classes from './Cards.module.css';
import Card from './Card/index';
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
    <FlipMove>
      <div className={classes.main}>{cardElements}</div>
    </FlipMove>
  );
}

export default Cards;
