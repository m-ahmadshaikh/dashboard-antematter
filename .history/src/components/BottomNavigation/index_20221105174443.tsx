import React from 'react';
import classes from './BottomNavigation.module.css';
import backIcon from '../../assets/icons/back-icon.svg';
import forwardIcon from '../../assets/icons/forward-icon.svg';
function BottomNavigation() {
  return (
    <div className={classes.main}>
      <img src={backIcon} />
      <img src={forwardIcon} />
    </div>
  );
}

export default BottomNavigation;
