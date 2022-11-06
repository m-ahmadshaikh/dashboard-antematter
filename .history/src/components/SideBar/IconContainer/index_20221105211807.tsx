import React from 'react';
import classes from './IconContainer.module.css';
function IconContainer() {
  return (
    <div
      onClick={() => toggleActive('comp')}
      className={`${classes.nav_icons} ${active.comp ? classes.active : ''}`}>
      <img src={nftListings} />
    </div>
  );
}

export default IconContainer;
