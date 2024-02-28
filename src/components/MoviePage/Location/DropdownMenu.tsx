// DropdownMenu.tsx

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import cities from '../../Data/cityData'; // Import city names from cityData.ts
import './DropdownMenu.css';

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedCity || 'Select City'}
        <FaChevronDown className={`icon ${isOpen ? 'open' : ''}`} />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {cities.map((city) => (
            <div
              key={city}
              className={`dropdown-item ${selectedCity === city ? 'selected' : ''}`}
              onClick={() => handleCitySelect(city)}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
