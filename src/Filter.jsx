import React, { useState, useEffect } from 'react';

const CitiesFilter = ({ cities, setCities }) => {
  const [filter, setFilter] = useState("");
  const [filteredCities, setFilteredCities] = useState(cities);

  useEffect(() => {
    // Update filtered cities based on the filter text
    setFilteredCities(
      cities.filter(city => city.toLowerCase().includes(filter.toLowerCase()))
    );
    setCities(filteredCities);
  }, [filter, filteredCities, cities, setFilteredCities, setCities]);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter cities"
      />
    </div>
  );
};

export default CitiesFilter;
