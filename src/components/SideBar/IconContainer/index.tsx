import React, { useState } from 'react';
import classes from './IconContainer.module.css';

type PropType = {
  imgUrl: string;
};
function IconContainer(props: PropType) {
  const { imgUrl } = props;
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((prev) => !prev);
  };

  return (
    <div
      onClick={() => toggleActive()}
      className={`${classes.nav_icons} ${active ? classes.active : ''}`}>
      <img alt="" src={imgUrl} />
    </div>
  );
}

export default IconContainer;
