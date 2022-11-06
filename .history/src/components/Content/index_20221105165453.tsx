import React from 'react';
import Header from '../Header';
import classes from './Content.module.css';
function Content() {
  return (
    <div className={classes.main}>
      <Header />
      <div>
        <h1>DashBoard</h1>
      </div>
    </div>
  );
}

export default Content;
