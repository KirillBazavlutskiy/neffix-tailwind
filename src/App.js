import React from 'react';
import styles from './App.module.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
