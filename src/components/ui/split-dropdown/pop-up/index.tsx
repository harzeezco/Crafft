import React from 'react';

export type PopupProps = {
  items: {
    id: number;
    isIcon: boolean;
    link: string;
  };
};

function Popup({ items }: PopupProps) {
  return (
    <li className='hover:bg-blue'>
      <button type='button' className='flex p-3 hover:bg-blue-700'>
        {items?.isIcon && (
          <svg aria-hidden='true' viewBox='0 0 24 24' height={30} width={20}>
            <path
              fill='#B1B5C1'
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
        )}
        <span>{items?.link}</span>
      </button>
    </li>
  );
}

// Popup.defaultProps = {
//   details: {
//     isIcon: false,
//     link: '',
//   },
// };

export default Popup;
