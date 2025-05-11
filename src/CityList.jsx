function CityList({ cities }) {
    // const filtered = cities.filter(city =>
    //   city.toLowerCase().includes(query.toLowerCase())
    // );
  
    return (
      <ul>
        {cities.map((city, id) => (
          <li key={id}>{city}</li>
        ))}
      </ul>
    );
  }
  
  export default CityList;
  