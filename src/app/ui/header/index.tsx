import React from 'react';
import Desktop from './desktop';
import Mobile from './mobile';

function Header() {
  return (
    <div className='bg-dark-800'>
      <Desktop />
      <Mobile />
    </div>
  );
}

export default Header;
