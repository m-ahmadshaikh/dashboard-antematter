import React from 'react';
import classes from './Sidebar.module.css';
import logo from '../../assets/brand-logo.svg';
function SideBar() {
  return (
    <div className={classes.sidebar}>
      <img src={logo} />
    </div>
  );
}

export default SideBar;
