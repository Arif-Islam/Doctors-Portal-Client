import React from 'react';
import chair from '../../../assets/images/chair.png';
import background from '../../../assets/images/bg.png';
import PrimaryButton from '../../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className="w-full lg:w-4/5 2xl:w-3/4 mx-auto">
            <div className="hero py-4 lg:py-12">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <img src={chair} className="w-[594px] rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold text-[#3A4256] ">Your New Smile Starts Here</h1>
                        <p className="py-6 text-[#3A4256]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;