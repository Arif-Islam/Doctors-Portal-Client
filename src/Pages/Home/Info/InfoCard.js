import React from 'react';

const InfoCard = ({ img, title, bgClass }) => {
    return (
        <div>
            <div className={`card lg:card-side shadow-xl ${bgClass}`}>
                <figure className='p-5'><img src={img} alt="Album" /> </figure>
                <div className="card-body text-white">
                    <h2 className="card-title ">{title} </h2>
                    <p className=''>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;