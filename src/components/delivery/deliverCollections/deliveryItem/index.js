import React from "react";
import './deliveryItem.css';

const DeliveryItem = ({item}) => {
    return (
    <div>
        <div className = "delivery_item_cover">
            <img src = {item.cover} alt = {item.title} className = "deliver_item_image"/>
        </div>
        <div>
            <div className = "deliver_item_title absolute_center">{item.title}</div>
        </div>
    </div>
    );
};
export default DeliveryItem;