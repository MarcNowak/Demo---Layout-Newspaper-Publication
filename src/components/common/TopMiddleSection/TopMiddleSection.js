import React from 'react';

// import PropTypes from 'prop-types';

import styles from './TopMiddleSection.module.scss';

import SubSection02 from '../SubSection02';
import SubSection01 from '../SubSection01';

const TopMiddleSection = () => (
  <div className={styles.root}>
    * TOP MIDDLE SECTION
    <SubSection01 />
    <SubSection02 />
  </div>
);

// TopMiddleSection.propTypes = {};

export default TopMiddleSection;
