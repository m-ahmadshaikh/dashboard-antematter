import React from 'react';
import classes from './IconContainer.module.css';

type PropType = {
  imgUrl: string;
};
function IconContainer(props: PropType) {
  const { imgUrl } = props;

  return (
    <div
      onClick={() => toggleActive('comp')}
      className={`${classes.nav_icons} ${active.comp ? classes.active : ''}`}>
      <img src={imgUrl} />
    </div>
  );
}

export default IconContainer;
