import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';

const Services = () => {
    return (
        <div className='w-full lg:w-4/5 2xl:w-3/4 mx-auto'>
            <p className='uppercase text-secondary font-semibold text-center pt-10'>Our Services</p>
            <p className='text-4xl text-[#3A4256] font-semibold text-center pt-2'>Services We provide</p>
            <div className='flex items-center justify-center my-20 gap-10 flex-wrap mx-5 lg:mx-0'>
                <ServiceCard title={"Fluoride Treatment"} img={fluoride}></ServiceCard>
                <ServiceCard title={"Cavity Filling"} img={cavity}></ServiceCard>
                <ServiceCard title={"Teeth Whitening"} img={whitening}></ServiceCard>
            </div>
        </div>
    );
};

export default Services;