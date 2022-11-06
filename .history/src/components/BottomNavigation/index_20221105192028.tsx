import React from 'react';
import classes from './BottomNavigation.module.css';
import backIcon from '../../assets/icons/back-icon.svg';
import forwardIcon from '../../assets/icons/forward-icon.svg';

type PropType = {
  onNext: () => void;
  onPrev: () => void;
};
function BottomNavigation(props: PropType) {
  return (
    <div className={classes.main}>
      <img src={backIcon} onClick={props.onNext} />
      <img src={forwardIcon} />
    </div>
  );
}

export default BottomNavigation;
