import React from 'react';

type StarProps = {
  color: string;
};

function Star({ color = '#1E50FF' }: StarProps) {
  const starKeyframes = {
    '0%': {
      transform: 'scale(0)',
    },
    '17%': {
      transform: 'scale(0)',
    },
    '22%': {
      transform: 'scale(1.3)',
    },
    '28%': {
      transform: 'scale(0.8)',
    },
    '35%': {
      transform: 'scale(1.1)',
    },
    '45%': {
      transform: 'scale(1)',
    },
    '79%': {
      fill: `${color}`,
    },
    '80%': {
      fill: `${color}`,
    },
    '100%': {
      fill: `${color}`,
    },
  };

  const starStyle = {
    animation: `star ${starKeyframes} linear infinite`,
  };

  return (
    <div className='fav flex items-center justify-center w-30 h-30'>
      <svg
        className='fav-star absolute w-6'
        style={starStyle}
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 0L13.7819 10.2181L24 12L13.7819 13.7819L12 24L10.2181 13.7819L0 12L10.2181 10.2181L12 0Z'
          fill={color}
        />
      </svg>

      <span
        className='fav-round absolute w-6 h-6 inline-block rounded-full'
        style={{ borderColor: `${color}` }}
      />
      <span className='fav-sparkle absolute w-6 h-6'>
        <span
          className='fav-sparkle-i'
          style={{ backgroundColor: `${color}` }}
        />
        <span
          className='fav-sparkle-i'
          style={{ backgroundColor: `${color}` }}
        />
        <span
          className='fav-sparkle-i'
          style={{ backgroundColor: `${color}` }}
        />
        <span
          className='fav-sparkle-i'
          style={{ backgroundColor: `${color}` }}
        />
        <span
          className='fav-sparkle-i'
          style={{ backgroundColor: `${color}` }}
        />
      </span>
    </div>
  );
}

export default Star;
