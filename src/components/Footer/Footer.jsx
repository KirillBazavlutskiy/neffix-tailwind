import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={styles.container}>
			<NavLink to='/main' className={styles.item}>
				<p>Neffix</p>
			</NavLink>
			<NavLink to='/about' className={styles.item}>
				<p>About us</p>
			</NavLink>
			<NavLink to='/installation' className={styles.item}>
				<p>Install for:</p>
			</NavLink>
		</div>
	);
};

export default Footer;
