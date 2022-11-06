import React from 'react';
import classes from './AccountInfo.module.css';
import avatar from '../../../assets/images/avatar.png';
function AccountInfo() {
  return (
    <div className={classes.main}>
      <img src={avatar} alt="The image of the user" />
      <p className={classes.username}>zash</p>
      <p className={classes.userID}>User ID: 11026666</p>
    </div>
  );
}

export default AccountInfo;
