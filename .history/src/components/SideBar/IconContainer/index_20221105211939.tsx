import React, { useState } from 'react';
import classes from './IconContainer.module.css';

type PropType = {
  imgUrl: string;
};
function IconContainer(props: PropType) {
  const { imgUrl } = props;
  const [active, setActive] = useState(false);

  const toggleActive = (name: string) => {
    setActive(prev => 
      !prev;
    
  };

  return (
    <div
      onClick={() => toggleActive('comp')}
      className={`${classes.nav_icons} ${active.comp ? classes.active : ''}`}>
      <img src={imgUrl} />
    </div>
  );
}

export default IconContainer;
