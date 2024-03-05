import Image from "next/image";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true
};

const WhatNewSection = () => {

    return (
        <section className="bd-team__area pt-55 pb-15">
            <div className="container">
                <h2 className="bd-section__title mb-40 text-center">
                    JAP participates in Biofach 2024, Germany
                </h2>
                <div className="row p-relative">
                    <div className="col-12">
                        <div className="bd-banner__right p-relative z-index-1">
                            <div className="bd-banner__active  swiper-container">
                                <div className="swiper-wrappers">
                                    <Slider {...settings}>
                                        <div>
                                            <div className="bd-banner__image-2">
                                                <Image width={1280} height={576} priority={true} src={`/assets/img/new/1.jpeg`} placeholder="blur" blurDataURL={`/assets/img/new/1.jpeg`} alt="banner-img" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bd-banner__image-2">
                                            <Image width={1280} height={576} priority={false} src={`/assets/img/new/2.jpeg`} placeholder="blur" blurDataURL={`/assets/img/new/2.jpeg`} alt="banner-img" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bd-banner__image-2">
                                            <Image width={1280} height={576} priority={false} src={`/assets/img/new/3.jpeg`} placeholder="blur" blurDataURL={`/assets/img/new/3.jpeg`}  alt="banner-img" />
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="bd-team__wrapper mx-1">
                            <div className="bd-team__thumb w-img p-relative">
                                <Image
                                    width={300}
                                    height={300}
                                    style={{ width: "100%", height: "250px" }}
                                    src={`/assets/img/new/1.jpeg`}
                                    alt="team-thumb"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="bd-team__wrapper mx-1">
                            <div className="bd-team__thumb w-img p-relative">
                                <Image
                                    width={300}
                                    height={300}
                                    style={{ width: "100%", height: "250px" }}
                                    src={`/assets/img/new/2.jpeg`}
                                    alt="team-thumb"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div className="bd-team__wrapper mx-1">
                            <div className="bd-team__thumb w-img p-relative">
                                <Image
                                    width={300}
                                    height={300}
                                    style={{ width: "100%", height: "250px" }}
                                    src={`/assets/img/new/3.jpeg`}
                                    alt="team-thumb"
                                />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default WhatNewSection;
