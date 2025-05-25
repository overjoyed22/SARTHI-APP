import { Elements,useStripe,useElements,PaymentElement } from 
    '@stripe/react-stripe-js'
import React from 'react'

export default function CheckOutForm() {
    const stripe:any=useStripe();
    const elements = useElements();
    const handleSubmit = async (event:any) => {
        event.preventDefault();
        if(elements==null){
            return;
        }
 const {error:submitError} = await elements.submit();
       if(submitError){
         return;
       }
        const res = await fetch("/api/create-intent",{
        method: "POST",
        body: JSON.stringify({
            amount: 1000, // Amount in cents
            currency: 'inr' // Currency code
        }),
    });

    const secretKey = await res.json();
     console.log(secretKey);
     const {error} = await stripe.confirmPayment({
        clientSecret:secretKey,
        elements,
        confirm:{
            return_url: 'http://localhost:3000/',
        },
     });
    }

   
  return (
    <div className='flex-flex-col justify-center items-center'>
    <form onSubmit={handleSubmit}
       className='max-w-md'>
        <PaymentElement/>
        <button type='submit'
        className='w-full p-2 bg-yellow-400 rounded-md mt-4 text-white font-medium'
        disabled={!stripe || !elements} >
            Pay
        </button>
    </form>
    </div>
  )
}
