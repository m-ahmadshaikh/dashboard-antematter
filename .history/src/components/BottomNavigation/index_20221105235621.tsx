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
      <img
        onKeyDown={(k) => {
          console.log(k);
        }}
        src={backIcon}
        onClick={props.onPrev}
      />
      <img src={forwardIcon} onClick={props.onNext} />
    </div>
  );
}

export default BottomNavigation;
