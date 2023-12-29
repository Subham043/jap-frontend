
import React from 'react';

const AboutFactSection = () => {
    return (
        <section className="bd-why-choose__area grey-bg pt-55 pb-55">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bd-section__title-wrapper text-center mb-10">
                            <h2 className="bd-section__title mb-30">
                                Our Presence
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row g-0 align-items-center justify-content-center">
                    <div className="col-xl-12 col-lg-12 col-md-12 d-flex flex-wrap p-relative">
                        <img
                            src='/assets/img/about/reach1.jpg'
                            alt="choose-big"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFactSection;