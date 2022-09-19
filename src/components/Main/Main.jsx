import React from 'react';

import Benefits from './Benefits/Benefits';
import SubscribePage from './SubscribePage/SubscribePage';

const Main = () => {
  return (
    <div className='w-full flex flex-col'>
      <SubscribePage />
      <Benefits />
    </div>
  );
};

export default Main;
