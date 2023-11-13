import { FOOTER_LINKS } from '@/app/lib/data';
import React from 'react';

function FooterNav() {
  return (
    <nav className='mb-10'>
      <ul className='flex gap-x-24 gap-y-6 flex-col md:flex-row'>
        {FOOTER_LINKS.map((details) => (
          <li key={details.id}>
            <h1 className='text-xl font-bold mb-7'>{details.title}</h1>
            <ul className='grid gap-4'>
              {details.links.map((link) => (
                <li className='text-gray-300'>{link.label}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default FooterNav;
