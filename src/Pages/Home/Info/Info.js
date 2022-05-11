import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='w-full lg:w-4/5 2xl:w-3/4 mx-auto'>
            <div className='my-10 mx-6 xl:mx-20 '>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" title={"Opening Hours"} img={clock}></InfoCard>
                    <InfoCard bgClass="bg-accent" title={"Visit our location"} img={marker}></InfoCard>
                    <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" title={"Contact us now"} img={phone}></InfoCard>
                </div>
            </div>
        </div>
    );
};

export default Info;