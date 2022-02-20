import React from 'react';

// import PropTypes from 'prop-types';

import styles from './BottomSection.module.scss';

import LatestArticles from '../LatestArticles';
import RightColumn from '../../features/RightColumn/RightColumn';

const BottomSection = () => (
  <div className={styles.root}>
    * BOTTOM SECTION
    <LatestArticles />
    <RightColumn />
  </div>
);

// BottomSection.propTypes = {};

export default BottomSection;
