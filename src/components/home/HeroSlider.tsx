const thumbOne = "/assets/img/banner/slider/b9.jpeg"
const thumbTow = "/assets/img/banner/slider/b10.jpeg"
const thumbThree = "/assets/img/banner/slider/b8.jpeg"
const thumbFour = "/assets/img/banner/slider/b7.jpeg"
import Image from "next/image";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const HeroSlider = () => {
    return (
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
                        <div>
                            <div className="bd-banner__image-2">
                            <Image width={1280} height={420} priority={false} src={thumbThree} placeholder="blur" blurDataURL={thumbThree}  alt="banner-img" />
                            </div>
                        </div>
                        <div>
                            <div className="bd-banner__image-2">
                            <Image width={1280} height={420} priority={false} src={thumbFour} placeholder="blur" blurDataURL={thumbFour}  alt="banner-img" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );

};

export default HeroSlider;