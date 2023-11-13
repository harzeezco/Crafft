import React, { ReactNode } from 'react';
import mergeClasses from '../lib/utils';

type ButtonProp = {
  children: string | ReactNode;
  variant: string;
  background?: string;
  isFullWidth?: boolean;
};

function Button({
  children = null,
  variant = 'blue',
  background,
  isFullWidth,
}: ButtonProp) {
  switch (variant) {
    case 'blue':
      return (
        <button
          type='button'
          style={{ backgroundColor: background }}
          className={mergeClasses(
            isFullWidth ? 'w-full' : '',
            'btn-blue relative cursor-pointer rounded-lg border-none px-8 pb-2.5 pt-3 text-lg font-semibold text-white transition-all duration-200 ease-in',
          )}
        >
          {children}
        </button>
      );
    case 'dark':
      return (
        <button
          type='button'
          className='btn-dark transform rounded-lg border-none px-6 pb-2.5 pt-3 font-semibold text-white transition duration-200 ease-linear relative bg-lightDark whitespace-nowrap'
        >
          {children}
        </button>
      );
    default:
      return null;
  }
}

Button.defaultProps = {
  isFullWidth: false,
  background: '#1E50FF',
};

export default Button;
