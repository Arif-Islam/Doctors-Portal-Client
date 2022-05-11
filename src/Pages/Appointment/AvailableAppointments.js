import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div className='w-full lg:w-4/5 2xl:w-3/4 mx-auto'>
            <h3 className='text-center text-secondary text-xl my-20'>Available Appointments on {format(date, 'PP')}</h3>
            <div className='flex items-center justify-center flex-wrap gap-10 mx-5 mb-10'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;