import React from 'react';

type Props = {
    title: string;
    img: string;
}

const Pagetitle = ({title, img}:Props) => {
    return (
        <section className="bd-page__banner-area include-bg page-overlay" style={{ backgroundImage: `url(${img})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="bd-page__banner-content text-center">
                            <h2>{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pagetitle;