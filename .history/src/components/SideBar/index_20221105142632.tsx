import React from 'react';
import classes from './Sidebar.module.css';
import logo from '../../assets/brand-logo.svg';
import home from '../../assets/icons/home.svg';
import nftListings from '../../assets/icons/nft-listing.svg';
import settings from '../../assets/icons/settings.svg';
import notifications from '../../assets/icons/notifications.svg';
function SideBar() {
  return (
    <div className={classes.sidebar}>
      <img className={classes.logo} src={logo} />
      <div className={classes.nav}>
        <div className={classes.nav_icons}>
          {' '}
          <img src={home} />
        </div>
        <div className={classes.nav_icons}>
          {' '}
          <img src={nftListings} />
        </div>
        <div className={classes.nav_icons}>
          {' '}
          <img src={settings} />
        </div>
      </div>
      <img className={classes.notification} src={notifications} />
    </div>
  );
}

export default SideBar;
