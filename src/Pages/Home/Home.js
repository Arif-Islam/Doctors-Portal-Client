import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact';
import DentalCare from './DentalCare';
import Footer from '../Shared/Footer';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;