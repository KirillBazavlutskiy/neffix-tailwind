import React from 'react';
import styles from './SubscribePage.module.scss';

const SubscribePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.text}>        
          <h2>Watch any movies!</h2>
          <h2>In any device!</h2>
          <h2>Any time!</h2>
          <h2>Right now!</h2>
        </div>
        <button>Watch movies</button>
      </div>
    </div>
  );
};

export default SubscribePage;
