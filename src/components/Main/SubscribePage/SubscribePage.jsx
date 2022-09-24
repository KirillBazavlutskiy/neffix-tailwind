import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SubscribePage.module.scss';

const SubscribePage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<div className={styles.text}>
					<h2>Watch any movies!</h2>
					<h2>In any device!</h2>
					<h2>Anytime!</h2>
					<h2>Right now!</h2>
				</div>
				<NavLink to='/movies'>
					<button className={styles.watch}>Watch movies</button>
				</NavLink>
			</div>
			<div className={styles.secondBackground}>
				<div className={styles.left}></div>
				<div className={styles.right}></div>
			</div>
		</div>
	);
};

export default SubscribePage;
