import React, { useState } from 'react';
import classes from './Sidebar.module.css';
import logo from '../../assets/brand-logo.svg';
import home from '../../assets/icons/home.svg';
import nftListings from '../../assets/icons/nft-listing.svg';
import settings from '../../assets/icons/settings.svg';
import notifications from '../../assets/icons/notifications.svg';
function SideBar() {
  const [active, setActive] = useState({
    home: false,
    setting: false,
    comp: false,
  });

  const toggleActive = (name: string) => {
    setActive((prev) => {
      return { ...prev, [name]: !prev[name as keyof typeof active] };
    });
  };

  return (
    <div className={classes.sidebar}>
      <img className={classes.logo} src={logo} />
      <div className={classes.nav}>
        <div
          onClick={() => toggleActive('home')}
          className={`${classes.nav_icons} ${
            active.home ? classes.active : ''
          }`}>
          <img src={home} />
        </div>
        <div
          onClick={() => toggleActive('comp')}
          className={`${classes.nav_icons} ${
            active.comp ? classes.active : ''
          }`}>
          <img src={nftListings} />
        </div>
        <div
          onClick={() => toggleActive('settings')}
          className={`${classes.nav_icons} ${
            active.setting ? classes.active : ''
          }`}>
          <img src={settings} />
        </div>
      </div>
      <div className={classes.notification}>
        <img src={notifications} />
      </div>
    </div>
  );
}

export default SideBar;
