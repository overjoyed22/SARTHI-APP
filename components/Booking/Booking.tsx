'use client';

import React, { useContext } from 'react';
import AutocompleteAddress from './AutocompleteAddress';
import Cars from './Cars';
import Cards from './Cards';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import { useRouter } from 'next/navigation';

function Booking() {
  const screenHeight = typeof window !== 'undefined' ? window.innerHeight * 0.72 : 0;
  const { caramount, setcarAmount } = useContext(SelectedCarAmountContext);
  const router = useRouter();

  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div className="border-[1px] p-5 rounded-md">
        <AutocompleteAddress />
        <Cars />
        <Cards />
        <button
          className={`w-full p-1 rounded-md mt-4 ${
            !caramount ? 'bg-gray-200 cursor-not-allowed' : 'bg-yellow-400'
          }`}
          disabled={!caramount}
          onClick={() => router.push('/payment')}
        >
          Book
        </button>
      </div>
    </div>
  );
}

export default Booking;
