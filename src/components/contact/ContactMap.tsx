import React from 'react';

const ContactMap = ({map}:{map:string}) => {
    return (
        <div className="bd-google__map-area pb-45">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-12 col-xl-12">
                        <iframe src={map}></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMap;