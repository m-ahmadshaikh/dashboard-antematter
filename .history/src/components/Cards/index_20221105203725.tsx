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
      <Flipper flipKey={cardsList[0]}>
        {cardsList.map((d) => (
          <Flipped key={d.name} flipId={d.name}>
            <Card cardInfo={d} />{' '}
          </Flipped>
        ))}
      </Flipper>
    </div>
  );
}

export default Cards;

<button onClick={shuffleList}> shuffle</button>
<ul className="list">
  <Flipper flipKey={data[1]}>
    {data.map((d) => (
      <Flipped key={d.name} flipId={d.name}>
        <li>{d.name}</li>
      </Flipped>
    ))}
  </Flipper>
</ul>
