import React from 'react';

function Star() {
  return (
    <div className='fav'>
      <svg
        className='fav-star'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 0L13.7819 10.2181L24 12L13.7819 13.7819L12 24L10.2181 13.7819L0 12L10.2181 10.2181L12 0Z'
          fill='#1E50FF'
        />
      </svg>

      <span className='fav-round' />
      <span className='fav-sparkle'>
        <span className='fav-sparkle-i' />
        <span className='fav-sparkle-i' />
        <span className='fav-sparkle-i' />
        <span className='fav-sparkle-i' />
        <span className='fav-sparkle-i' />
      </span>
    </div>
  );
}

export default Star;