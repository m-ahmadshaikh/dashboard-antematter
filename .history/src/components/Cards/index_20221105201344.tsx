import React from 'react';
import classes from './Cards.module.css';
import Card from './Card/index';
import { useTransition, animated } from 'react-spring';

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
  const transitions = useTransition(
    cardsList.map((data, i) => data.name, {
      from: { transform: 'translate3d(0,-40px,0)' },
      enter: { transform: 'translate3d(0,0px,0)' },
      leave: { transform: 'translate3d(0,-40px,0)' },
    })
  );
  const cardElements = cardsList.map((c) => <Card key={c.name} cardInfo={c} />);
  return <div className={classes.main}>{cardElements}</div>;
}

export default Cards;
