import binance from '@/assets/companies/binance.png';
import coinbase from '@/assets/companies/coinbase.png';
import coinigy from '@/assets/companies/coinigy.png';
import cryptoValley from '@/assets/companies/crypto-valley.png';
import crypto from '@/assets/companies/crypto.png';

function Trusted() {
  return (
    <section>
      <div className='slider mt-7'>
        <div className='slides items-center gap-6 lg:flex'>
          <div>
            <img
              src={cryptoValley}
              alt='nerdwallet logo'
              height='38'
              width='174'
              loading='lazy'
            />
          </div>
          <div>
            <img
              src={coinbase}
              alt='indeed logo'
              height='38'
              width='174'
              loading='lazy'
            />
          </div>
          <div>
            <img
              src={binance}
              alt='richhood logo'
              height='38'
              width='174'
              loading='lazy'
            />
          </div>
          <div>
            <img
              src={crypto}
              alt='netflix logo'
              height='38'
              width='174'
              loading='lazy'
            />
          </div>
          <div>
            <img
              src={coinigy}
              alt='shinelsu logo'
              height='38'
              width='174'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trusted;
