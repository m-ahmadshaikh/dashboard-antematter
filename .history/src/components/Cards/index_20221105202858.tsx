import React, { useState } from 'react';
import classes from './Cards.module.css';
import Card from './Card/index';
import { Flipper, Flipped } from 'react-flip-toolkit';
import shuffle from 'lodash.shuffle';
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
  const [data, setData] = useState(props.cardsList);
  const shuffleList = () =>
    setData((prev) => {
      return shuffle(prev);
    });

  return (
    <>
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
    </>
  );
}

export default Cards;
