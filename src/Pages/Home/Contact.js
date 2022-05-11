import React from 'react';
import background from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <div className=' ' style={{ backgroundImage: `url(${background})` }}>
            <div className='flex items-center justify-center flex-col space-y-4'>
                <h3 className='text-xl text-secondary font-bold mt-16'>Contact Us</h3>
                <h2 className='text-3xl text-stone-100 font-normal'>Stay Connected with us</h2>
                <input className='w-80 md:w-96 rounded p-2 mb-2 bg-stone-100' type="email" name="email" id="" placeholder='Email' required />
                <input className='w-80 md:w-96 rounded p-2 bg-stone-100 mb-2' type="text" name="email" id="" placeholder='Subject' required />
                <textarea className='rounded mb-2 p-2 w-80 md:w-96' name="textarea" id=""  rows="4" placeholder='Your Message'></textarea>
                <PrimaryButton>Submit</PrimaryButton>
                <div className='h-12'></div>
            </div>
        </div>
    );
};

export default Contact;