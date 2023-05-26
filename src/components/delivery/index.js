import React from "react";
import "./delivery.css";
import Filters from '../common/filters';
import DeliveryCollections from "./deliverCollections";
import TopBrands from "./topBrands";
import ExploreSection from "../common/exploreSection";
import {restaurants} from "../../data/restaurants";

const deliveryFilters = [
    {
        id: 1,
        icon: <i className = "fi fi-rr-settings-sliders absolute_center"></i>,
        title: "Filters",
    },
    {
        id:2,
        title:"Rating: 4.0+",
    },
    {
        id: 3,
        title:"Safe and hygenic",
    },
    {
        id:4,
        title: "Pure-veg",
    },
    {
        id: 5,
        title: "Delivery-time",
        icon: <i className = "fi fi-rr-apps-sort absolute_center"></i>,
    },
    {
        id: 6,
        title: "Great Offers",
    },
];

const restaurantList = restaurants;

const Delivery = () => {
    return (
        <div>
            <div className = "max-width">
                <Filters filterList = {deliveryFilters}/>
            </div>
            <DeliveryCollections />
            <TopBrands />
            <ExploreSection restaurants={restaurantList} collectionName = "Delivery Restaurants in Bangalore" />
        </div>
    );
}

export default Delivery;