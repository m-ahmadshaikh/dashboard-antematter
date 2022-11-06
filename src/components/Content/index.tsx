import React, { useEffect, useState } from 'react';
import Header from '../Header';
import classes from './Content.module.css';
import refresh from '../../assets/icons/refresh-icon.svg';
import BottomNavigation from '../BottomNavigation/index';
import Cards from '../Cards/index';
import { fetchNft } from '../../services/Api';
import { initialCardsList } from '../data/Nfts';
import 'react-loading-skeleton/dist/skeleton.css';

function Content() {
  const [cardsList, setCardsList] = useState(initialCardsList);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refreshBtn, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchNft()
      .then((d) => {
        setCardsList(d);
      })
      .catch((e) => {
        setError(e.message);
        setCardsList(initialCardsList);
      })
      .finally(() => setLoading(false));
  }, [refreshBtn]);

  const toggleRefresh = () => {
    setRefresh((prev) => !prev);
  };

  const onNext = () => {
    setCardsList((prev) => {
      const newList = [...prev];
      for (let i = 0; i < prev.length; i++) {
        if (i === 0) {
          newList[i] = prev[prev.length - 1];
        } else {
          newList[i] = prev[i - 1];
        }
      }
      return newList;
    });
  };
  const onPrev = () => {
    setCardsList((prev) => {
      const newList = [...prev];
      for (let i = 0; i < prev.length; i++) {
        if (i === prev.length - 1) {
          newList[i] = prev[0];
        } else {
          newList[i] = prev[i + 1];
        }
      }
      return newList;
    });
  };
  return (
    <div className={classes.main}>
      <Header />
      <div className={classes.titleRow}>
        <h1>Dashboard</h1>
        <div onClick={toggleRefresh} className={classes.refreshIcon}>
          <img src={refresh} alt="" />
        </div>
      </div>
      <div className={classes.cards}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!error && <Cards loading={loading} cardsList={cardsList} />}
      </div>
      <BottomNavigation onNext={onNext} onPrev={onPrev} />
    </div>
  );
}

export default Content;
