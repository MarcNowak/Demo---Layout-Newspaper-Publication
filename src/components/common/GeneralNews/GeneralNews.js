import React from 'react';
// import PropTypes from 'prop-types';

import styles from './GeneralNews.module.scss';

import TopGeneral from '../TopGeneral';
import TilesGeneral from '../TilesGeneral';
import BottomGeneral from '../BottomGeneral';

const GeneralNews = () => (
  <div className={styles.root}>
    * GENERAL NEWS
    <TopGeneral />
    <TilesGeneral />
    <BottomGeneral />
  </div>
);

// GeneralNews.propTypes = {};

export default GeneralNews;
