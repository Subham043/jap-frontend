import Image from "next/image";

const WhatNewSection = () => {

    return (
        <section className="bd-team__area pt-55 pb-15">
            <div className="container">
                <h2 className="bd-section__title mb-40 text-center">
                    JAP participates in Biofach 2024, Germany
                </h2>
                <div className="row p-relative">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatNewSection;
