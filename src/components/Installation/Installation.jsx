import React from 'react';
import styles from './Installation.module.scss';

const Installation = () => {
	return (
		<div className={styles.container}>
			<div className={styles.inner}>
				<h1>Choose your device</h1>
				<div className={styles.devices}>
					<div className={styles.android}>
						<p>Android</p>
						<button>Install</button>
					</div>
					<div className={styles.ios}>
						<p>IOS</p>
						<button>Install</button>
					</div>
					<div className={styles.pc}>
						<p>PC</p>
						<button>Install</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Installation;
