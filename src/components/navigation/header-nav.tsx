import React from 'react';
import { NAV_LINKS } from '@/lib/data';
import SplitDropdown from '../ui/split-dropdown';

function HeaderNav() {
  return (
    <ul className='flex justify-items-center gap-x-5'>
      {NAV_LINKS.map((details) => (
        <SplitDropdown details={details} key={details.id} />
      ))}
    </ul>
  );
}

export default HeaderNav;
