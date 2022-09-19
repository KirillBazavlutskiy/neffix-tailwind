import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Neffix</h1>
      <button>Sign up</button>
    </div>
  );
};

export default Header;
