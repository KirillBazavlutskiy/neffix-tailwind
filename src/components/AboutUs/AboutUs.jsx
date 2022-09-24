import React from 'react';
import styles from './AboutUs.module.scss';

const AboutUs = props => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>{props.info[0].text}</div>
			<div className={styles.item}>{props.info[1].text}</div>
			<div className={styles.item}>{props.info[2].text}</div>
			<div className={styles.item}>{props.info[3].text}</div>
			<div className={styles.item}>{props.info[4].text}</div>
		</div>
	);
};

export default AboutUs;
