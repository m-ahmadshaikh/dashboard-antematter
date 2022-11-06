import React from 'react';
import Header from '../Header';
import classes from './Content.module.css';
import refresh from '../../assets/icons/refresh-icon.svg';
import BottomNavigation from '../BottomNavigation/index';
function Content() {
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.titleRow}>
        <h1>Dashboard</h1>
        <div className={classes.refreshIcon}>
          <img src={refresh} alt="" />
        </div>
      </div>
      <div className={classes.cards}></div>
      <Cards />
      <BottomNavigation />
    </div>
  );
}

export default Content;
