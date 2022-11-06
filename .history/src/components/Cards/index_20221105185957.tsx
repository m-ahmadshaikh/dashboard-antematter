import React from 'react';
import classes from './Cards.module.css';
import Card from './Card/index';
function Cards() {
  const cardsList = [{}];

  return (
    <div className={classes.main}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
