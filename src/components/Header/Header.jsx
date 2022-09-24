import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <NavLink to='/main'>
        <h1>Neffix</h1>
      </NavLink>
      <NavLink to='/registration'>
        <button>Sign up</button>
      </NavLink>
    </div>
  );
};

export default Header;
