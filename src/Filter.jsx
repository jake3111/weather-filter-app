function Filter({cities, setCities }) {
    const handleChange = (e) => {
        const filterText = e.target.value;
        const filtered = cities.filter(city =>
          city.toLowerCase().includes(filterText.toLowerCase())
        );
        setCities(filtered);
    }
  
    return (
      <input
        type="text"
        placeholder="Search for a city..."
        onChange={handleChange}
      />
    );
  }
  
  export default Filter;
  