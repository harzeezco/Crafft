import React from 'react';

function Dropdown() {
  return (
    <section className='accordion'>
      <div className='tab'>
        <label htmlFor='cb1' className='tab__label'>
          <input type='checkbox' name='accordion-1' id='cb1' />
          Checkbox
        </label>
        <div className='tab__content'>
          <p>Pure CSS accordion based on the + style trick.</p>
        </div>
      </div>
      <div className='tab'>
        <label htmlFor='cb2' className='tab__label'>
          <input type='checkbox' name='accordion-1' id='cb2' />
          Open multiple
        </label>
        <div className='tab__content'>
          <p>Using allows to have several tabs open at the same time.</p>
        </div>
      </div>
    </section>
  );
}

export default Dropdown;
