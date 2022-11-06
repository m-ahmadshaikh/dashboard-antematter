import React from 'react';
import CointRate from './CoinRate/index';
import AccountInfo from './AccountInfo/index';
import classes from './Header.module.css';
function Header() {
  return (
    <div className={classes.header}>
      <CointRate />
      <AccountInfo />
    </div>
  );
}

export default Header;
