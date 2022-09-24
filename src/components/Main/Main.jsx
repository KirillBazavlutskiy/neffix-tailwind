import React from 'react';

import Benefits from './Benefits/Benefits';
import SubscribePage from './SubscribePage/SubscribePage';

const Main = props => {
	return (
		<div className='w-full flex flex-col'>
			<SubscribePage />
			<Benefits benefits={props.state} />
		</div>
	);
};

export default Main;
