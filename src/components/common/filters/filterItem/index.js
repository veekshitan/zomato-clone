import React from "react";
import './filterItem.css'

const FilterItem = ({filter}) => {
    return (
    <div className = "filter_item"> 
    {filter.icon && filter.icon}
    <div className = "filter_name">{filter.title}</div>  
    </div>
    );

};
export default FilterItem;