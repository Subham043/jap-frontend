import React from 'react';
import GallerySection from './GallerySection';
import Pagetitle from '../sheardComponent/Pagetitle';

const GalleryMain = () => {
    return (
        <>
            <Pagetitle title='Gallery' img='/assets/img/banner/page-banner-2.jpg' />
            <GallerySection/>
        </>
    );
};

export default GalleryMain;