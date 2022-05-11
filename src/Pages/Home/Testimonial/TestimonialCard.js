import React from 'react';

const TestimonialCard = ({ review }) => {
    const { image, description, location, name } = review;
    return (
        <div className='w-[385px] space-y-6 shadow-xl p-5 rounded-lg '>
            <p>{description}</p>
            <div className='flex items-center space-x-4'>
                <div className="avatar">
                    <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                        <img src={image} />
                    </div>
                </div>
                <div>
                    <p className='font-semibold text-lg'>{name} </p>
                    <p>{location} </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;