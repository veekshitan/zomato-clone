import React from "react";
import './collection.css';
import NextArrow from "../carousel/nextArrow";
import PrevArrow from "../carousel/prevArrow";
import Slider from "react-slick";


const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

  };


const Collection = ({list}) => {
    return (
    <div className = "collection_wrapper">
        <div className = "max-width collection">
            <div className = "collection_title">Collections</div>
            <div className = "collection_subtitle_row">
                <div className = "collection_subtitle_text">
                    Explore curated lists of top restaurants, cafes, pubs, and bars in Lucknow, based on trends
                </div>
                <div className = "collection_location">
                    <div>All collections in Lucknow</div>
                    <i className = "fi fi-rr-caret-right absolute_center"></i>
                </div>
            </div>
            <Slider {...settings}>
                {list.map((item) => (
                    <div>
                        <div className = "collection_cover">
                            <img src = {item.cover} className = "collection_image" alt = {item.title} />
                            <div className = "gradient_bg">
                                <div className = "collection_card_title">{item.title}</div>
                                <div className = "collection_card_subtitle">
                                    <div>{item.places}</div>
                                    <i className = "fi fi-rr-caret-right absolute_center"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>);
}

export default Collection;