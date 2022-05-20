import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1ak9FP9wwITSeP2TBKTWHwoTVQaTCu4aKTn7XVqgjbzh6NXaujccBFcOa9n6BOLbZj1eJeboJY5ONgEha2Wdu200gQY3RgUi');

const Payment = () => {
    const { id } = useParams();
    const url = `https://enigmatic-beach-24999.herokuapp.com/booking/${id}`;
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div class="card w-11/12 md:w-1/2 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello {appointment.patientName}</p>
                    <h2 class="card-title">Pay for {appointment.treatment}</h2>
                    <p>We will see you on <span className='text-orange-500'>{appointment.date}</span> at <span className='text-orange-500'>{appointment.slot}</span></p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-11/12 md:w-1/2 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;