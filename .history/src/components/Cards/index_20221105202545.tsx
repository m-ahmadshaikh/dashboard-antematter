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
  const [data, setData] = useState([1, 2, 3]);
  const shuffleList = () =>
    setData((prev) => {
      prev = [prev[2], prev[1], prev[0]];
      return prev;
    });

  return (
    <>
      <button onClick={shuffleList}> shuffle</button>
      <ul className="list">
        <Flipper flipKey={data[1]}>
          {data.map((d) => (
            <Flipped key={d} flipId={d}>
              <li>{d}</li>
            </Flipped>
          ))}
        </Flipper>
      </ul>
    </>
  );
}

export default Cards;
