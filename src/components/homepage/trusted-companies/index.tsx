import React from 'react';
import { COMPANIES } from '@/lib/data';
import Image from 'next/image';

function TrustedCompanies() {
  return (
    <section className='bg-yellow-700'>
      <div className='slider'>
        <div className='slides items-center gap-6 lg:flex'>
          {COMPANIES.map((company) => (
            <div key={company.id}>
              <Image
                src={`/png/companies/${company.img}`}
                alt={company.alt}
                height='38'
                width='174'
                loading='lazy'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedCompanies;
