import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import background from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className='w-full lg:w-4/5 2xl:w-3/4 mx-auto'>
            <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className="hero py-4 lg:py-12">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <img src={chair} className="w-[594px] rounded-lg shadow-2xl" alt='chair' />
                    <div>
                        <DayPicker mode="single"
                            selected={date}
                            onSelect={setDate} />
                        {/* <p>You picked {format(date, 'PP')}.</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;