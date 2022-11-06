import React from 'react';
import classes from './Cards.module.css';
import Card from './Card/index';
function Cards() {
  return (
    <div className={classes.main}>
      <Card />
    </div>
  );
}

export default Cards;
