import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

function LatestOffers() {
  const [email, setEmail] = useState('');

  function checkEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      toast.success('Subscribed successfully!');
      setEmail("");
    } else {
      toast.error('Please enter a valid email address.');
    }
  }

  return (
    <div className='px-10 lg:px-16'>
      <div className="bg-black p-10 rounded-[25px] flex flex-col md:flex-row items-center justify-center gap-10">
        <p className="header-text text-white text-4xl lg:text-5xl">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </p>
        <div className="flex flex-col w-full max-w-[350px] gap-4">
          <div className="flex flex-row px-6 h-12 bg-white items-center rounded-[25px] gap-2">
            <img alt="" src="src/assets/images/Email.svg" />
            <input
              className="focus:outline-none w-full"
              id="EmailField"
              placeholder="Enter your email address"
              type="email"
              name="EmailField"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            className="text-center h-12 bg-white rounded-[25px] cursor-pointer"
            onClick={checkEmail}
          >
            <p className="font-medium">Subscribe to Newsletter</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LatestOffers;