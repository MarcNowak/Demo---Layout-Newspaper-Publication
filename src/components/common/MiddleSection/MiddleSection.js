import React from 'react';

// import PropTypes from 'prop-types';

import styles from './MiddleSection.module.scss';

import Technology from '../Technology';
import Beauty from '../Beauty';
import Food from '../Food';

const MiddleSection = () => (
  <div className={styles.root}>
    * MIDDLE SECTION
    <Technology />
    <Beauty />
    <Food />

  </div>
);

// MiddleSection.propTypes = {};

export default MiddleSection;
