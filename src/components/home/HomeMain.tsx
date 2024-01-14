import React from 'react';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import ProductSlider from './ProductSlider';
import ChooseSection from './ChooseSection';
import FactSection from './FactSection';
// import BlogSection from '../home-three/BlogSection';


const HomeMain = () => {
    
    return (
        <>
            <HeroSection/>
            {/* <ServiceSection/> */}
            <ProductSlider title='Our Featured Products' segment='is_featured'/>
            <ChooseSection/>
            <ProductSlider title='Our New Products' segment='is_new_arrival'/>
            <FactSection/>
            <ProductSlider title='On Sale Products' segment='is_best_sale'/>
        </>
    );
};

export default HomeMain;