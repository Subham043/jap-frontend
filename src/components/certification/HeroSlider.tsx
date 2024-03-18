const thumbOne = "/assets/img/certification/fssai-cert.webp"
const thumb2 = "/assets/img/certification/fssai-2.webp"
const thumb3 = "/assets/img/certification/fssai-3.webp"
const thumb4 = "/assets/img/certification/fssai-4.webp"
const thumb5 = "/assets/img/certification/fssai-5.webp"
const thumb6 = "/assets/img/certification/fssai-6.webp"
const thumbTow = "/assets/img/certification/pgs-cert.webp"
const thumb7 = "/assets/img/certification/pgs-2.webp"
const thumb8 = "/assets/img/certification/pgs-3.webp"
import Image from "next/image";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const HeroSlider = () => {
    return (
        <div className="container pt-50">
            <div className="grid-row">
                <div className="">
                    <div className="bd-banner__right p-relative z-index-1 certification-slider-image-container">
                        <div className="bd-banner__active  swiper-container h-100">
                            <div className="swiper-wrappers h-100">
                                <Slider {...settings}>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                            <Image width={1280} height={420} priority={true} src={thumbOne} placeholder="blur" blurDataURL={thumbOne} alt="banner-img" />
                                        </div>
                                    </div>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                            <Image width={1280} height={420} priority={true} src={thumb2} placeholder="blur" blurDataURL={thumbOne} alt="banner-img" />
                                        </div>
                                    </div>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                            <Image width={1280} height={420} priority={true} src={thumb3} placeholder="blur" blurDataURL={thumbOne} alt="banner-img" />
                                        </div>
                                    </div>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                            <Image width={1280} height={420} priority={true} src={thumb4} placeholder="blur" blurDataURL={thumbOne} alt="banner-img" />
                                        </div>
                                    </div>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                            <Image width={1280} height={420} priority={true} src={thumb5} placeholder="blur" blurDataURL={thumbOne} alt="banner-img" />
                                        </div>
                                    </div>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                            <Image width={1280} height={420} priority={true} src={thumb6} placeholder="blur" blurDataURL={thumbOne} alt="banner-img" />
                                        </div>
                                    </div>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                        <Image width={1280} height={420} priority={false} src={thumbTow} placeholder="blur" blurDataURL={thumbTow} alt="banner-img" />
                                        </div>
                                    </div>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                        <Image width={1280} height={420} priority={false} src={thumb7} placeholder="blur" blurDataURL={thumbTow} alt="banner-img" />
                                        </div>
                                    </div>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                        <Image width={1280} height={420} priority={false} src={thumb8} placeholder="blur" blurDataURL={thumbTow} alt="banner-img" />
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="certification-slider-text-container h-100">
                        <h3>List of Certificates</h3>
                        <ul>
                            {/* <li>Organic certification for Crops as per National Organic Program (NOP, USDA)</li> */}
                            <li>Organic Certification for Production as per India’s National Programme for Organic Production Standards (considered equivalent to Council Regulation (EC) #834/2007 and Swiss Organic Farming)</li>
                            {/* <li>Certificate of Compliance as per EU standard (EC #834/2007 and EC #889/2008)</li> */}
                            {/* <li>Organic Handling/Trading Certificate as per National Organic Program (NOP, USDA)</li> */}
                            <li>Registration-Cum-Membership Certificate from APEDA (Agricultural and Processed Food Products Export Development Authority), Ministry of Commerce and Industry, Govt. of India</li>
                            <li>Certificate of Registration as Exporter from Spice Board, Ministry of Commerce and Industry, Govt. of India</li>
                            <li>FSSAI Licence (Food Safety and Standards Authority of India)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default HeroSlider;