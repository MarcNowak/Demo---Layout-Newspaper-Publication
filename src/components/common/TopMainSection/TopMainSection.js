import React from 'react';
// import PropTypes from 'prop-types';

import styles from './TopMainSection.module.scss';

import ArticlesLeft from '../ArticlesLeft';
import ArticlesMain from '../ArticlesMain';
import ArticlesRight from '../ArticlesRight';

const TopMainSection = () => (
  <div className={styles.root}>
    * TOP MAIN SECTION
    <ArticlesLeft />
    <ArticlesMain />
    <ArticlesRight />
  </div>
);

// TopMainSection.propTypes = {};

export default TopMainSection;
