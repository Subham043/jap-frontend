import React, { useCallback, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageViewer from 'react-simple-image-viewer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Image from "next/image";
import { axiosPublic } from "../../../axios";
import { api_routes } from "@/helper/routes";
import { GalleryCategoryState, GalleryState } from "@/helper/types";
import useSWRInfinite from "swr/infinite";
import useSWR from "swr";
import ExportSlider from "../shop/ExportSlider";

const galleryFetcher = async (url: string) => {
  const res =await axiosPublic.get(url);
  return res.data.data
};

const GallerySection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);

    const openImageViewer = useCallback((index: number) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    
    
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const { data:galleryCategoryData } = useSWR<GalleryCategoryState[]>(`${api_routes.gallery_category}?total=20&page=1&sort=id`, galleryFetcher);

    const getGalleryKey = useCallback((pageIndex:any, previousPageData:any) => {
        if (previousPageData && previousPageData.length===0) return null;
        return `${api_routes.gallery}?total=12&page=${pageIndex+1}&sort=-id${galleryCategoryData && galleryCategoryData.length>0 && (tabIndex-1)!==-1 ? '&filter[has_categories]='+galleryCategoryData[(tabIndex-1)].id : ''}`;
    }, [galleryCategoryData, tabIndex])
    
    const {
            data,
            size:gallerySize,
            setSize:setGallerySize,
            isLoading:isGalleryLoading
    } = useSWRInfinite<GalleryState>((pageIndex, previousPageData)=>getGalleryKey(pageIndex, previousPageData), galleryFetcher, {
            initialSize:1,
            revalidateAll: false,
            revalidateFirstPage: false,
            persistSize: false,
            parallel: false
    });

    const fetchNextPage = () => setGallerySize(gallerySize+1);

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
                            {
                                galleryCategoryData?.map((item, index) => (
                                    <Tab
                                    key={index}
                                    className="nav-item nav-link show"
                                    >
                                        {item.name}
                                    </Tab>
                                ))
                            }
                        </TabList>
                    </nav>
                    <div>
                        <TabPanel></TabPanel>
                        {
                            galleryCategoryData?.map((_, index) => (
                                <TabPanel key={index}></TabPanel>
                            ))
                        }
                    </div>
                </Tabs>
                <InfiniteScroll
                    dataLength={data ? data.flat().length : 0}
                    next={fetchNextPage}
                    hasMore={true}
                    loader={(isGalleryLoading) && <div className="text-center py-1">
                        <div className="spinner-border text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>}
                    refreshFunction={fetchNextPage}
                    style={{overflowX: 'hidden'}}
                >
                    <div className="row p-relative">
                        {data && data.flat().map((item, i) => {
                            return (
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={i+1}>
                                <div className="bd-team__wrapper mx-1">
                                    <div className="bd-team__thumb w-img p-relative">
                                        <Image
                                            priority={false}
                                            width={300}
                                            height={300}
                                            style={{ width: "100%", height: "250px", objectFit: 'cover', cursor: 'pointer' }}
                                            src={item.image_link}
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
                    src={data ? data.flat().map((item) => item.image_link) : []}
                    currentIndex={ currentImage }
                    disableScroll={ true }
                    closeOnClickOutside={ true }
                    onClose={ closeImageViewer }
                    />
                )}
            </div>
            <ExportSlider category='' />
        </section>
    );
};

export default GallerySection;
