/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Button from '../../Button';

function Contact() {
  return (
    <div className='lg:justify-self-end'>
      <h1 className='text-xl font-bold mb-7'>Stay in the loop</h1>
      <div className='flex flex-col lg:flex-row lg:items-center gap-5 items-start'>
        <input
          type='text'
          className='bg-gray-900 border-none outline-blue-700 lg:w-[258px] py-4 px-3 w-full'
          placeholder='Email Address'
          name='email'
        />
        <Button variant='blue'>Subscribe</Button>
      </div>
      <div className='flex lg:items-center items-start flex-col md:flow-row gap-10 my-6 md:flex-row'>
        <address className='flex flex-col gap-3'>
          <span className='text-gray-300'>Email us</span>
          <span>email@gmail.com</span>
        </address>
        <p className='flex flex-col gap-3'>
          <span className='text-gray-300'>Call us</span>
          <span>000 1234 5678</span>
        </p>
      </div>
      <p className='text-gray-300'>
        Copyright © <span>{new Date().getFullYear()}</span> Zeezco Agency all
        rights reserved.
      </p>
    </div>
  );
}

export default Contact;
