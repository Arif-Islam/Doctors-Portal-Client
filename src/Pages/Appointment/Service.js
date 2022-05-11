import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className='w-[425px] mx-auto shadow p-5 rounded-lg'>
            <div className='flex flex-col items-center justify-center space-y-2'>
                <p className='text-xl text-secondary font-semibold'>{name}</p>
                <p className='text-sm uppercase font-medium'>
                    {
                        slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>Try Another Day</span>
                    }
                </p>
                <p className='uppercase font-medium text-sm'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div>
                    <label onClick={() => setTreatment(service)} disabled={slots.length === 0} for="booking-modal" class="btn modal-button btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;