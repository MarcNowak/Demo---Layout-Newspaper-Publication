import React from 'react';

// import PropTypes from 'prop-types';

import styles from './TopBottomSection.module.scss';

import Travel from '../Travel';
import Celebrities from '../Celebrieties';
import MostPopular from '../MostPopular';

const TopBottomSection = () => (
  <div className={styles.root}>
    * TOP BOTTOM SECTION
    <Travel />
    <Celebrities />
    <MostPopular />
  </div>
);

// TopMiddleSection.propTypes = {};

export default TopBottomSection;
