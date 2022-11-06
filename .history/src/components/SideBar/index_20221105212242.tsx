import React, { useState } from 'react';
import classes from './Sidebar.module.css';
import logo from '../../assets/brand-logo.svg';
import home from '../../assets/icons/home.svg';
import nftListings from '../../assets/icons/nft-listing.svg';
import settings from '../../assets/icons/settings.svg';
import notifications from '../../assets/icons/notifications.svg';
import IconContainer from './IconContainer';

function SideBar() {
  return (
    <div className={classes.sidebar}>
      <img className={classes.logo} src={logo} />
      <div className={classes.nav}>
        <IconContainer imgUrl={home} />
        <IconContainer imgUrl={nftListings} />
        <IconContainer imgUrl={settings} />
      </div>
      <div className={classes.notification}>
        <img src={notifications} />
      </div>
    </div>
  );
}

export default SideBar;
