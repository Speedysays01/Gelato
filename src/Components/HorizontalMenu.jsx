import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import "./HorizontalMenu.css"

const HorizontalMenu = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    return (
        <div className="horizontal-menu">
            {['products', 'start selling', 'tools and apps', 'pricing', 'resources', 'pro sellers', 'connect Gelato'].map((menu, index) => (
                <div className="menu-item" key={index}>
                    <button className="menu-button" onClick={() => toggleDropdown(menu)}>
                        {menu.charAt(0).toUpperCase() + menu.slice(1)}
                        <RiArrowDropDownLine/>
                    </button>
                    {openDropdown === menu && (
                        <div className="dropdown-content">
                            {getMenuOptions(menu).map((option, idx) => (
                                <a href="/#" key={idx}>{option}</a>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

// Function to provide sample options for each dropdown
const getMenuOptions = (menu) => {
    switch (menu) {
        case 'products':
            return ['T-Shirts', 'Mugs', 'Posters', 'Books'];
        case 'start selling':
            return ['Online Store', 'Marketplace', 'Social Media'];
        case 'tools and apps':
            return ['Design Tool', 'Mobile App', 'API Access'];
        case 'pricing':
            return ['Basic Plan', 'Pro Plan', 'Enterprise'];
        case 'resources':
            return ['Blog', 'Guides', 'Tutorials'];
        case 'pro sellers':
            return ['Seller Dashboard', 'Analytics', 'Support'];
        case 'connect Gelato':
            return ['Integrations', 'Plugins', 'APIs'];
        default:
            return [];
    }
};

export default HorizontalMenu;
