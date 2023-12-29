import Link from 'next/link';
import React from 'react';

const HeaderTopTwo = () => {
    return (
        <div className="bd-top__bar-area-3 topbar-padding d-none d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-md-8">
                        <div className="bd-topbar__contact">
                            <ul>
                                <li><Link href="tel:+919207300055"><i className="fa-regular fa-phone-flip"></i>+91-9207300055</Link></li>
                                <li><Link href="mailto:operations@jap.bio"><i className="fa-regular fa-envelope"></i>operations@jap.bio</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-md-4">
                        <div className="bd-top__bar-social">
                            <ul><li><Link href="https://www.facebook.com/jaivikavamprakrutikproducerltd" target='_blank'><i className="fa-brands fa-facebook-f"></i></Link></li>
                                <li><Link href="https://twitter.com/JaivikAvam" target='_blank'><i className="fa-brands fa-twitter"></i></Link></li>
                                <li><Link href="https://www.instagram.com/jaivikavamprakrutik/" target='_blank'><i className="fa-brands fa-instagram"></i></Link></li>
                                <li><Link href="https://www.linkedin.com/in/jaivik-avam-prakrutik-5501a327b/" target='_blank'><i className="fa-brands fa-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopTwo;