import React from 'react';

const ServiceCard = ({ img, title }) => {
    return (
        <div className='w-[440px] rounded-lg'>
            <div className='flex flex-col items-center justify-center p-5 shadow-lg'>
                <img className='pb-5' src={img} alt="" />
                <p className='pb-2 text-[#3A4256] font-bold text-lg'>{title}</p>
                <p className='text-[#3A4256] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, error! Culpa esse impedit minima magni.</p>
            </div>
        </div>
    );
};

export default ServiceCard;