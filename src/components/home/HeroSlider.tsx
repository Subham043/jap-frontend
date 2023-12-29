const thumbOne = "/assets/img/banner/slider/b1.webp"
const thumbTow = "/assets/img/banner/slider/b2.webp"
const thumbThree = "/assets/img/banner/slider/b3.webp"
const thumbFour = "/assets/img/banner/slider/b4.webp"
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
                                <img src={thumbOne} alt="banner-img" />
                            </div>
                        </div>
                        <div>
                            <div className="bd-banner__image-2">
                            <img src={thumbTow} alt="banner-img" />
                            </div>
                        </div>
                        <div>
                            <div className="bd-banner__image-2">
                            <img src={thumbThree}  alt="banner-img" />
                            </div>
                        </div>
                        <div>
                            <div className="bd-banner__image-2">
                            <img src={thumbFour}  alt="banner-img" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );

};

export default HeroSlider;