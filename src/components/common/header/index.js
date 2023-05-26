import React from "react"
import './header.css'

const Header = () => {
    return (
    <div className = "max-width header">
        <img 
            src = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt = "zomato-logo"
            className = "header-logo"
        />
        <div className = "header_right">
            <div className = "location_search_bar">
                <div className = "location_wrapper">
                    <div className = "location_icon_name">
                        <i className = "fi fi-rr-marker absolute_center location_icon"></i>
                        <div>Bangalore</div>
                    </div>
                    <i className = "fi fi-rr-caret-down absolute_center caret_icon"></i>
                </div>
                <div className = "location_search_seperator"></div>
                <div className = "header_search_bar">
                    <i className = "fi fi-rr-search absolute_center search_icon"></i>
                    <input placeholder = "Search for restaurant,cuisine or a dish" className = "search_input" />
                </div>
            </div>

            <div className = "profile_wrapper">
                <img  src = "https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                alt = "user_profile_photo" className = "profile_image"/>
                <span className = "header_username"> Veeks </span>
                <i className = "fi fi-rr-angle-small-down absolute-center profile_icon"></i>
            </div>

        </div>
    </div>);
}

export default Header;