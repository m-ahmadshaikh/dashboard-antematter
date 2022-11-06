import React from 'react';
import Header from '../Header';
import classes from './Content.module.css';
import refresh from '../../assets/icons/refresh-icon.svg';
function Content() {
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.titleRow}>
        <h1>DashBoard</h1>
        <img src={refresh} alt="" />
      </div>
    </div>
  );
}

export default Content;
