import React from "react";
import './topBrands.css';
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";

const brandList = [
    {
        id:1,
        time: "25 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png?output-format=webp"
        
    },
    {
        id:2,
        time: "25 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png?output-format=webp"

    },
    {
        id: 3,
        time: "20 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/370c304771298718e899edd29be3d4b4_1605095053.png?output-format=webp"

    },
    {
        id: 4,
        time: "20 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png?output-format=webp"

    },
    {
        id: 5,
        time: "34 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f6f779024f5f34469381413bbbddbcbc_1617920260.png?output-format=webp"

    },
    {
        id : 6,
        time: "27 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp"

    },
    {
        id: 7,
        time: "20 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521806382.png?output-format=webp"
    },
    {
        id: 8,
        time: "42 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/bf3a000fa1554839d5e1a415bf85d083_1598856266.png?output-format=webp"
    }
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

};

const TopBrands = () => {
    return (
        <div className = "top_brands max-width">
            <div className = "collection_title">
                Top brands for you
            </div>
            <Slider {...settings}>
                {brandList.map((brand) => {
                    return <div>
                        <div className = "top_brands_cover">
                            <img src ={brand.cover} alt = {brandList.time} className = "top_brands_image"/>
                        </div>
                        <div className = "top_brands_time absolute_center">
                            {brand.time}
                        </div>
                    </div>
                })}
            </Slider>
            
        </div>
    );
}

export default TopBrands;