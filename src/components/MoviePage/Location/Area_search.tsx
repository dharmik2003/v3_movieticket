// // CityDropdown.tsx

// import React, { useState } from 'react';
import cities, { City } from '../../Data/City_name_data';

import './Area_search.css'; 

// const CityDropdown: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   // Filter cities based on search term
//   const filteredCities = cities.filter((city: City) =>
//     city.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="dropdown">
//       <input
//         type="text"
//         className="search-bar"
//         placeholder="Search city..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         onFocus={() => setIsOpen(true)}
//         onBlur={() => setTimeout(() => setIsOpen(false), 200)}
//       />
//       {isOpen && (
//         <div className="dropdown-content">
//           {filteredCities.map((city: City) => (
//             <div key={city.id} className="city-item">
//               {city.name}, {city.country}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default CityDropdown;



import React, { useState } from 'react';
// import cities, { City } from './Location';

const Area_search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Filter cities based on search term
  const filteredCities = cities.filter((city: City) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dropdown">
      <input
        type="text"
        className={`search-bar ${selectedCity ? 'selected' : ''}`} // Apply 'selected' class if city is selected
        placeholder="Search city..."
        value={selectedCity ? selectedCity.name : searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
      />
      {isOpen && (
        <div className="dropdown-content">
          {filteredCities.map((city: City) => (
            <div
              key={city.id}
              className="city-item"
              onClick={() => {
                setSelectedCity(city);
                setSearchTerm('');
                setIsOpen(false);
              }}
            >
              {city.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Area_search;




// Area_search.tsx
// Area_search.tsx

// Area_search.tsx

// import React, { useState } from 'react';
// import cityData from '../../Data/cityData';

// const AreaSearch: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [searchResults, setSearchResults] = useState<string[]>([]);

//   const handleSearch = (term: string) => {
//     setSearchTerm(term);
//     if (term.trim() === '') {
//       setSearchResults([]);
//       return;
//     }
//     const results: string[] = [];
//     Object.values(cityData).forEach((areas: string[]) => { // Define type for areas
//       areas.forEach((area: string) => { // Define type for area
//         if (area.toLowerCase().includes(term.toLowerCase())) {
//           results.push(area);
//         }
//       });
//     });
//     setSearchResults(results);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => handleSearch(e.target.value)}
//         placeholder="Search for an area..."
//       />
//       <ul>
//         {searchResults.map((area) => (
//           <li key={area}>{area}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AreaSearch;
