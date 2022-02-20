import React from 'react';
// import PropTypes from 'prop-types';

import styles from './HomePage.module.scss';

import BreakingNews from '../../features/BreakingNews/BreakingNews';
import TopMainSection from '../../common/TopMainSection/TopMainSection';
import AdvTop from '../../features/Adv/AdvTop';
import TopMiddleSection from '../../common/TopMiddleSection/TopMiddleSection';
import TopBottomSection from '../../common/TopBottomSection/TopBottomSection';
import AdvMiddle from '../../features/Adv/AdvMiddle';
import GeneralNews from '../../common/GeneralNews/GeneralNews';
import Subscribe from '../../features/Subscribe/Subscribe';
import MiddleSection from '../../common/MiddleSection/MiddleSection';
import Circles from '../../common/Circles';
import ExclusiveContent from '../../common/ExclusiveContent';
import AdvBottom from '../../features/Adv/AdvBottom';
import BottomSection from '../../common/BottomSection/BottomSection';

const HomePage = () => (
  <div className={styles.root}>
    <BreakingNews />
    <TopMainSection />
    <AdvTop />
    <TopMiddleSection />
    <TopBottomSection />
    <AdvMiddle />
    <GeneralNews />
    <Subscribe />
    <MiddleSection />
    <Circles />
    <ExclusiveContent />
    <AdvBottom />
    <BottomSection />
  </div>
);

// HomePage.propTypes = {};

export default HomePage;
