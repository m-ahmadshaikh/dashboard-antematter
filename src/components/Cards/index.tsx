import React from 'react';
import classes from './Cards.module.css';
import Card from './Card/index';
import { Flipper } from 'react-flip-toolkit';
import LoadingCard from '../LoadingCard';
type PropTypes = {
  cardsList: {
    name: string;
    imgUrl: string;
    owner: string;
    mintAddress: string;
    tokenAddress: string;
  }[];
  loading: boolean;
};
function Cards(props: PropTypes) {
  const { cardsList, loading } = props;

  return (
    <Flipper flipKey={cardsList[0]}>
      <div className={classes.main}>
        {cardsList.map((d) =>
          loading ? <LoadingCard /> : <Card key={d.name} cardInfo={d} />
        )}
      </div>
    </Flipper>
  );
}

export default Cards;
