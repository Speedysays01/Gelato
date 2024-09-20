// Dropdown.jsx
import React, { useState } from 'react';
import './Navdropdown.css'; // Create this file for dropdown-specific styles

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('INR');
    const [selectedLanguage, setSelectedLanguage] = useState('IN');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-button">
                {selectedCurrency}/{selectedLanguage}
            </button>
            {isOpen && (
                <div className="dropdown-content">
                    <div className="dropdown-section">
                        <label htmlFor="currency">Currency:</label>
                        <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange}>
                            <option value="INR">INR</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                        </select>
                    </div>
                    <div className="dropdown-section">
                        <label htmlFor="language">Language:</label>
                        <select id="language" value={selectedLanguage} onChange={handleLanguageChange}>
                            <option value="IN">IN</option>
                            <option value="EN">EN</option>
                            <option value="FR">FR</option>
                            <option value="ES">ES</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
