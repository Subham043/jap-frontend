import React, { useCallback, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageViewer from 'react-simple-image-viewer';

const GallerySection = () => {
    const [numberOfImage, setNumberOfImage] = useState(20);
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index: number) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);
    
    const fetchNextPage = useCallback(() => setNumberOfImage(prev => (prev + 20) < 102 ? prev + 20 : 102), []);
    
    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <section className="bd-team__area pt-55 pb-15">
            <div className="container">
                <InfiniteScroll
                    dataLength={numberOfImage}
                    next={fetchNextPage}
                    hasMore={true}
                    loader={null}
                    refreshFunction={fetchNextPage}
                >
                    <div className="row p-relative">
                        {Array.from(Array(numberOfImage).keys()).map((item) => {
                            return (
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={item+1}>
                                <div className="bd-team__wrapper mx-1">
                                    <div className="bd-team__thumb w-img p-relative">
                                        <img
                                            style={{ width: "100%", height: "250px", objectFit: 'cover', cursor: 'pointer' }}
                                            src={`/assets/img/gallery/${item+1}.jpeg`}
                                            alt="team-thumb"
                                            onClick={ () => openImageViewer(item) }
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
                    src={ Array.from(Array(numberOfImage).keys()).map((item) => `/assets/img/gallery/${item+1}.jpeg`) }
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
