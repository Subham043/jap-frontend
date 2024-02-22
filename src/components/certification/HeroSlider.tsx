const thumbOne = "/assets/img/certification/fssai-cert.webp"
const thumbTow = "/assets/img/certification/pgs-cert.webp"
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
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-sm-12">
                    <div className="bd-banner__right p-relative z-index-1">
                        <div className="bd-banner__active  swiper-container">
                            <div className="swiper-wrappers">
                                <Slider {...settings}>
                                    <div>
                                        <div className="bd-banner__image-2">
                                            <Image width={1280} height={420} priority={true} src={thumbOne} placeholder="blur" blurDataURL={thumbOne} alt="banner-img" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="bd-banner__image-2">
                                        <Image width={1280} height={420} priority={false} src={thumbTow} placeholder="blur" blurDataURL={thumbTow} alt="banner-img" />
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default HeroSlider;