import { useState } from 'react';
import Filter from './Filter';
import CityList from './CityList';
import results from './cities.json';

function App() {
  const [cities, setCities] = useState(results);

  return (
    <div>
      <h1>City Filter</h1>
      <Filter cities={results} setCities={setCities} />
      <CityList cities={cities} />
    </div>
  );
}

export default App;
