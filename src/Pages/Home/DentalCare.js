import React from 'react';
import image from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const DentalCare = () => {
    return (
        <div className='w-full lg:w-4/5 2xl:w-3/4 mx-auto'>
            <div className="hero my-20">
                <div className="hero-content flex-col lg:flex-row gap-32">
                    <img src={image} className="lg:max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-[#3A4256]">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 text-[#3A4256]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Getting Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;