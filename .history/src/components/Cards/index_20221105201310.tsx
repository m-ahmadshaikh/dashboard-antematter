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
    cardsList.map((data, i) => data.name,
    {
      from: { position: 'absolute', opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y }) => ({ y, opacity: 1 }),
      update: ({ y }) => ({ y }),
    }
  );
  const cardElements = cardsList.map((c) => <Card key={c.name} cardInfo={c} />);
  return <div className={classes.main}>{cardElements}</div>;
}

export default Cards;
