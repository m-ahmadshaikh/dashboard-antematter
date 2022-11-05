import React from 'react';
import classes from './Sidebar.module.css';
import logo from '../../assets/brand-logo.svg';
import home from '../../assets/icons/home.svg';
import nftListings from '../../assets/icons/nft-listing.svg';
import settings from '../../assets/icons/settings.svg';
function SideBar() {
  return (
    <div className={classes.sidebar}>
      <img src={logo} />
      <img src={home} />
      <img src={nftListings} />
      <img src={settings} />
    </div>
  );
}

export default SideBar;
