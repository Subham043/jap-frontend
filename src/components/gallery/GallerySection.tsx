import React, { useCallback, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageViewer from 'react-simple-image-viewer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { galleryData } from "./gallery-data";

const GallerySection = () => {
    const [numberOfImage, setNumberOfImage] = useState(20);
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);

    const openImageViewer = useCallback((index: number) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    
    const fetchNextPage = useCallback(() => setNumberOfImage(prev => (prev + 20) < 102 ? prev + 20 : 102), []);
    
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const images = useMemo(()=>{
        const data = galleryData.filter((item, i)=>{
            if(tabIndex!==0){
                return i+1<=numberOfImage && item.type===tabIndex;
            }
            return i+1<=numberOfImage;
        });
        return data;
    },[numberOfImage, tabIndex])

    return (
        <section className="bd-team__area pt-55 pb-15">
            <div className="container">
                <Tabs className="product_info-faq-area pt-0 pb-3" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} selectedTabClassName='active' selectedTabPanelClassName='active show'>
                    <nav className="product-details-tab">
                        <TabList className="nav nav-tabs" id="nav-tab" role="tablist">
                            <Tab
                            className="nav-item nav-link show"
                            >
                            All
                            </Tab>
                            <Tab
                            className="nav-item nav-link show"
                            >
                            Farm Land
                            </Tab>
                            <Tab
                            className="nav-item nav-link show"
                            >
                            Events
                            </Tab>
                        </TabList>
                    </nav>
                    <div>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                        <TabPanel></TabPanel>
                    </div>
                </Tabs>
                <InfiniteScroll
                    dataLength={numberOfImage}
                    next={fetchNextPage}
                    hasMore={true}
                    loader={null}
                    refreshFunction={fetchNextPage}
                    style={{overflowX: 'hidden'}}
                >
                    <div className="row p-relative">
                        {images.map((item, i) => {
                            return (
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={i+1}>
                                <div className="bd-team__wrapper mx-1">
                                    <div className="bd-team__thumb w-img p-relative">
                                        <img
                                            style={{ width: "100%", height: "250px", objectFit: 'cover', cursor: 'pointer' }}
                                            src={`/assets/img/gallery/${item.id}.jpeg`}
                                            alt="team-thumb"
                                            onClick={ () => openImageViewer(i) }
                                        />
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </InfiniteScroll>
                {isViewerOpen && (
                    <ImageViewer
                    src={images.map((item) => `/assets/img/gallery/${item.id}.jpeg`)}
                    currentIndex={ currentImage }
                    disableScroll={ true }
                    closeOnClickOutside={ true }
                    onClose={ closeImageViewer }
                    />
                )}
            </div>
        </section>
    );
};

export default GallerySection;
