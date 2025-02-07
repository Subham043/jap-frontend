// const thumbOne = "/assets/img/certification/fssai-cert.webp"
// const thumb2 = "/assets/img/certification/fssai-2.webp"
// const thumb3 = "/assets/img/certification/fssai-3.webp"
// const thumb4 = "/assets/img/certification/fssai-4.webp"
// const thumb5 = "/assets/img/certification/fssai-5.webp"
// const thumb6 = "/assets/img/certification/fssai-6.webp"
const thumbTow = "/assets/img/certification/pgs-cert.webp"
const thumb7 = "/assets/img/certification/pgs-2.webp"
const thumb8 = "/assets/img/certification/pgs-3.webp"
const thumb9 = "/assets/img/certification/ics1.webp"
const thumb10 = "/assets/img/certification/ics2.webp"
const thumb11 = "/assets/img/certification/fssai-7.webp"
const thumb12 = "/assets/img/certification/t1.webp"
const thumb13 = "/assets/img/certification/t2.webp"
const thumb14 = "/assets/img/certification/t3.webp"
const thumb15 = "/assets/img/certification/t4.webp"
const thumb16 = "/assets/img/certification/t5.webp"
const thumb17 = "/assets/img/certification/t6.webp"
import Image from "next/image";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
};

const NpopSlider = () => {
    return (
        <div className="container pt-50">
            <div className="grid-row">
                <div className="">
                    <div className="bd-banner__right p-relative z-index-1">
                        <div className="bd-banner__active  swiper-container h-100">
                            <div className="swiper-wrappers h-100">
                                <Slider {...settings}>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                        <Image width={1280} height={420} priority={false} src={thumb8} placeholder="blur" blurDataURL={thumbTow} alt="banner-img" />
                                        </div>
                                    </div>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                        <Image width={1280} height={420} priority={false} src={thumb10} placeholder="blur" blurDataURL={thumbTow} alt="banner-img" />
                                        </div>
                                    </div>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                        <Image width={1280} height={420} priority={false} src={thumb13} placeholder="blur" blurDataURL={thumbTow} alt="banner-img" />
                                        </div>
                                    </div>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                        <Image width={1280} height={420} priority={false} src={thumb14} placeholder="blur" blurDataURL={thumbTow} alt="banner-img" />
                                        </div>
                                    </div>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                        <Image width={1280} height={420} priority={false} src={thumb15} placeholder="blur" blurDataURL={thumbTow} alt="banner-img" />
                                        </div>
                                    </div>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                        <Image width={1280} height={420} priority={false} src={thumb16} placeholder="blur" blurDataURL={thumbTow} alt="banner-img" />
                                        </div>
                                    </div>
                                    <div className="h-100">
                                        <div className="bd-banner__image-2 h-100">
                                        <Image width={1280} height={420} priority={false} src={thumb17} placeholder="blur" blurDataURL={thumbTow} alt="banner-img" />
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

export default NpopSlider;