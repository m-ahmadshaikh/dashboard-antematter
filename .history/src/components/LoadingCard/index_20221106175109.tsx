import React from 'react';
import Skeleton from 'react-loading-skeleton';
import classes from './skeleton.module.css';
function LoadingCard() {
  return (
    <section>
      <article className="item">
        <h3 className="item-title">
          <Skeleton
            baseColor="#000"
            count={1}
            className={classes.skeleton}
            height={36}
          />
        </h3>
        <div className="item-img">
          <Skeleton
            className={classes.skeleton}
            baseColor="#000"
            borderRadius={12}
            width={364}
            height={364}
          />
        </div>
        <h3 className="item-title">
          <Skeleton
            className={classes.skeleton}
            baseColor="#000"
            count={3}
            width={364}
            height={36}
          />
        </h3>
      </article>
    </section>
  );
}

export default LoadingCard;
