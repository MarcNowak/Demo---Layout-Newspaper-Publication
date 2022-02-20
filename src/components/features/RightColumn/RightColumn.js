import React from 'react';

// import PropTypes from 'prop-types';

import styles from './RightColumn.module.scss';
import Subscribe from '../Subscribe/Newsletter';
import RandomArticles from '../../common/RandomArticles';
import AdvRight from '../Adv/AdvRight';

const RightColumn = () => (
  <div className={styles.root}>
    * RIGHT COLUMN
    <Subscribe />
    <RandomArticles />
    <AdvRight />

  </div>
);

// RightColumn.propTypes = {};

export default RightColumn;
