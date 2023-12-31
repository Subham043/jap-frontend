import React from 'react';
import AboutSectionTwo from './AboutSectionTwo';
import AboutFactSection from './AboutFactSection';
import AboutTimeline from './AboutTimeline';
import TeamSection from './TeamSection';
import AboutSection from './AboutSection';
import Pagetitle from '../sheardComponent/Pagetitle';

const AboutMain = () => {
    return (
        <>
            <Pagetitle title='Jaivik Avam Prakrutik' img='/assets/img/banner/page-banner-3.jpg' />
            <AboutSection />
            <AboutSectionTwo/>
            <AboutFactSection/>
            <TeamSection/>
            <AboutTimeline/>
        </>
    );
};

export default AboutMain;