import React from 'react';
import Contact from './contact';
import FooterNav from './nav';

function Footer() {
  return (
    <footer className='bg-dark-800 pt-24 border-b border-b-blue-50'>
      <div className='max-w-container mx-auto grid lg:grid-cols-[55%_45%] px-6'>
        <FooterNav />
        <Contact />
      </div>
    </footer>
  );
}

export default Footer;
