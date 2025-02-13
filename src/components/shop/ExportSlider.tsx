/* eslint-disable @next/next/no-img-element */
const thumbTow = "/assets/img/product/exports/spices-1.jpg"
const thumb7 = "/assets/img/product/exports/spices-2.jpg"
const thumb8 = "/assets/img/product/exports/spices-3.jpg"
const thumb11 = "/assets/img/product/exports/millets-1.jpg"
const thumb12 = "/assets/img/product/exports/millets-2.jpg"
const thumb13 = "/assets/img/product/exports/herbs-1.jpg"
const thumb14 = "/assets/img/product/exports/pulses-1.jpg"
const thumb15 = "/assets/img/product/exports/fruits-1.jpg"
// import Image from "next/image";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const exportImages = [
    {
        id: 1,
        category: ['', 'spices'],
        img: thumbTow
    },
    {
        id: 2,
        category: ['', 'spices'],
        img: thumb7
    },
    {
        id: 3,
        category: ['', 'spices'],
        img: thumb8
    },
    {
        id: 6,
        category: ['', 'millets'],
        img: thumb11
    },
    {
        id: 7,
        category: ['', 'millets'],
        img: thumb12
    },
    {
        id: 8,
        category: ['', 'herbs-medicinal-plants-beverages'],
        img: thumb13
    },
    {
        id: 9,
        category: ['', 'oil-seeds-pulses-others'],
        img: thumb14
    },
    {
        id: 10,
        category: ['', 'fruits'],
        img: thumb15
    },
];

const ExportSlider = ({category}:{category:string}) => {
    return (
        <div className="container mb-30">
            <div className="grid-row">
                <div className="">
                    <div className="bd-banner__right p-relative z-index-1">
                        <div className="bd-banner__active  swiper-container h-100">
                            <div className="swiper-wrappers h-100">
                                <Slider {...settings}>
                                    {
                                        exportImages.filter(item => item.category.includes(category)).map((item) => {
                                            return <div className="h-100" key={item.id}>
                                                <div className="bd-banner__image-2 h-100">
                                                <img src={item.img} alt="banner-img" />
                                                </div>
                                            </div>
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ExportSlider;