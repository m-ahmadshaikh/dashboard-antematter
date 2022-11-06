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
    <div className={classes.main}>
      {cardElements}

      <FlipMove />
    </div>
  );
}

export default Cards;
