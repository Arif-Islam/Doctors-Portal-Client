import React from 'react';
import doctor from '../../assets/images/doctor.png';
import background from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{ backgroundImage: `url(${background})`, borderRadius:'5px' }} className='flex items-center justify-center mt-32 mb-20 w-full lg:w-4/5 2xl:w-3/4 mx-auto'>
            <div className='flex-1 hidden lg:block'>
                <img className='-mt-36 w-full object-cover ' src={doctor} alt="" />
            </div>
            <div className='space-y-3 flex-1 p-5 lg:p-0'>
                <h3 className='text-xl text-secondary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white font-semibold'>Make an appointment Today</h2>
                <p className='text-white w-full xl:w-4/5 pb-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;