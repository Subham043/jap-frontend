import React from 'react';
import CountUpContent from '../counter/CountUpContent';


const CounterItem = [
    {
        id: 1,
        number: 1700,
        numberLetter: '+',
        title: 'Farmers',
    },
    {
        id: 2,
        number: 6,
        numberLetter: '+',
        title: 'States',
    },
    {
        id: 3,
        number: 3800,
        numberLetter: '+',
        title: 'Hectors of Area under Organic agriculture',
    },
    {
        id: 4,
        number: 500,
        numberLetter: '+',
        title: 'Organic Products',
    }
]

const FactSection = () => {
    return (
        <section className="bd-counter__area fix mt-0 mb-20">
            <div className="container">
                <div className="bd-counter__main theme-bg pt-100 pb-25">
                    <div className="row">
                        <span className="bd-counter-shape-line"></span>
                        {CounterItem.map((item, num) => (
                            <div className="col-xl-3 col-lg-3 col-md-6" key={num}>
                                <div className="bd-counter__single-item mb-60">
                                    <div className="bd-counter__content">
                                        <span className="counter"><CountUpContent number={item.number} text={item.numberLetter} /></span>
                                        <h4>{item.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FactSection;