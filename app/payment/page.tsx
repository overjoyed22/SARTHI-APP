"use client"
import React, { useContext } from 'react'
import { SelectedCarAmountContext } from '@/context/SelectedCarAmountContext';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from '@/components/Payment/CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
function Payment() {
  // const {carAmount,setcarAmount} = 
  // useContext(SelectedCarAmountContext);

  const stripepromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  const options:any={
    mode : 'payment',
    amount : 1000,
    currency : 'inr'
  };
 return (
  <div>
    <Elements stripe={stripepromise} options={options}>
      <CheckOutForm/>
    </Elements>
    <div>Payment</div>
  </div>
);
}

export default Payment