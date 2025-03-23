import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Testimonials.css";
// Custom Arrow Component
const Arrow = ({ className, style, onClick, direction }) => {
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: direction === "prev" ? "black" : "black",
                borderRadius: "50%",
            }}
            onClick={onClick}
        />
    );
};

const testimonials = [
    {
        para: '“T²C turned our ambitious idea into a market-ready product in record time. Their end-to-end expertise and accelerators like TurboCloud streamlined our development process, saving us months of work. From ideation to execution, they were the perfect tech partner.”',
        name: 'Ganesh Iyer',
        work: 'Eyemyeye'
    },
    {
        para: '“T²C turned our ambitious idea into a market-ready product in record time. Their end-to-end expertise and accelerators like TurboCloud streamlined our development process, saving us months of work. From ideation to execution, they were the perfect tech partner.”',
        name: 'Ganesh Iyer',
        work: 'Eyemyeye'
    },
    {
        para: '“T²C turned our ambitious idea into a market-ready product in record time. Their end-to-end expertise and accelerators like TurboCloud streamlined our development process, saving us months of work. From ideation to execution, they were the perfect tech partner.”',
        name: 'Ganesh Iyer',
        work: 'Eyemyeye'
    },
    {
        para: '“T²C turned our ambitious idea into a market-ready product in record time. Their end-to-end expertise and accelerators like TurboCloud streamlined our development process, saving us months of work. From ideation to execution, they were the perfect tech partner.”',
        name: 'Ganesh Iyer',
        work: 'Eyemyeye'
    },
];

const Testimonials = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true, // Enable default arrows
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };


    return (
        <section className="testimonials">
            <h1>Testimonials</h1>
            <Slider {...settings}>
                {testimonials.map((item, index) => (
                    <div key={index} className="hotel-card">
                        <p className="testimonials-para">{item.para}</p>
                        <div className="testimonials-info">
                            <div className="img">
                            </div>
                            <div className="testimonials-desc">
                                <p>{item.name}</p>
                                <p>{item.work}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Testimonials;
