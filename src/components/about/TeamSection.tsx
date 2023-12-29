import React from "react";
import { teamData } from "./team-data";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const TeamSection = () => {
 
  return (
    <section className="bd-team__area pt-55 pb-15">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bd-section__title-wrapper text-center mb-60">
              <span className="bd-sub__title">Professional Team</span>
              <h2 className="bd-section__title mb-30">Board Of Directors</h2>
            </div>
          </div>
        </div>
        <div className="w-100 p-relative">
          <Slider {...settings}>
            {teamData.map((item, index) => {
              return (
                <div key={index}>
                  <div className="bd-team__wrapper mx-1">
                    <div className="bd-team__thumb w-img p-relative">
                      <img
                        style={{ width: "100%", height: "auto" }}
                        src={item.img}
                        alt="team-thumb"
                      />
                    </div>
                    <div className="bd-team__content text-center">
                      <h4>
                        {item?.title}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
