import React from 'react';
import TestimonialCard from './TestimonialCard';
import img1 from '../../../assets/images/people1.png';
import img2 from '../../../assets/images/people2.png';
import img3 from '../../../assets/images/people3.png';
import quote from '../../../assets/icons/quote.svg';

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
            image: img1,
            name: "Willson Harry",
            location: "California"
        },
        {
            id: 2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
            image: img2,
            name: "Meredith Escort",
            location: "Newyork"
        },
        {
            id: 3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
            image: img3,
            name: "Jennifer Slut",
            location: "Alabama"
        },
    ]
    return (
        <div className='pb-20 w-full lg:w-4/5 2xl:w-3/4 mx-auto'>
            <div className='flex justify-between items-start mx-6 lg:mx-0'>
                <div className=''>
                    <h3 className='text-xl text-secondary font-bold pb-2'>Testimonial</h3>
                    <p className='text-3xl text-[#3A4256] font-normal mb-20'>What Our Patients Says</p>
                </div>
                <div>
                    <img className='w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='flex items-center justify-center my-20 gap-10 flex-wrap mx-5'>
                {
                    reviews.map(review => <TestimonialCard
                        key={review.id}
                        review={review}
                    ></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;