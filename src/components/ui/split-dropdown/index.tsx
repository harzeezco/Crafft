'use client';

import React, { useState } from 'react';
import Popup from './pop-up';

export type SpiltDropDownProp = {
  details: {
    label: string;
    isExpanded: boolean;
    links: {
      id: number;
      link: string;
      href: string;
      isIcon: boolean;
    }[];
  };
};

function SplitDropdown({ details }: SpiltDropDownProp) {
  const [isOpen, setIsOpen] = useState(false);
  const { label, links, isExpanded } = details;

  return (
    <div className='gui-split-button group cursor-pointer relative inline-flex rounded-md fill-gray-200 select-none p-5 pl-10 hover:flex hover:items-center hover:justify-center hover:transition-all'>
      <button
        type='button'
        className='cursor-pointer appearance-none bg-none border-none inline-flex items-center gap-4 whitespace-nowrap text-gray-300 outline-blue-700 -outline-offset-4 active:text-blue-700 group-hover:text-blue-700'
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        {label}
      </button>
      <span
        className='gui-popup-button flex items-center'
        aria-haspopup='true'
        aria-expanded={isOpen}
        title='Open for more actions'
      >
        {isExpanded && (
          <span className='arrow h-6 w-15 ml-2 bg-gray-300 rotate-180 transition-rotate group-hover:rotate-0 group-hover:bg-blue-700' />
        )}
        <ul className='gui-popup w-[130px] focus:outline-none'>
          {links.map((items) => (
            <Popup key={items.id} items={items} />
          ))}
        </ul>
      </span>
    </div>
  );
}

export default SplitDropdown;
