import { useState } from 'react';
import ForecastList from './ForecastList';
import Spinner from './Spinner';


export default function WeatherSearch() {
  // you'll need to track your weather search results, the loading state, and a form field for location with a default value.
  const [loadingState, setLoadingState] = useState(false);
  const [forecasts, setForecasts] = useState([]);
  const [city, setCity] = useState('Portland');
  const [state, setState] = useState('OR');
  const [country, setCountry] = useState('USA');
  
  function parseTime(dt) {
    return new Date(dt * 1000).toUTCString();
  }

  
  async function handleWeatherSubmit(e) {
    e.preventDefault();
      
    // set the loading state to true
    setLoadingState(true);

    // use fetch to make a request to your netlify weather function. Be sure to pass the location as a query param in the URL
    const response = await fetch(`/.netlify/functions/weather?city=${city}&state=${state}&country=${country}`);

    const json = await response.json();
  
    // put the jsonified data in state and set the loading state to false
    setForecasts(json);
    setLoadingState(false);
  }
      
  return (
    <section className='weather'>
      {/* make the fetch on submit */}
      <form onSubmit={handleWeatherSubmit}>
            Search weather by city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <input required value={city} onChange={e => setCity(e.target.value)} />
        <input required value={state} onChange={e => setState(e.target.value)} />
        <input required value={country} onChange={e => setCountry(e.target.value)} />

        <button>Get weather</button>
      </form>
      {/* Make a ForecastList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      <div>
        { loadingState ? <Spinner /> : <ForecastList forecasts={forecasts} />}
      </div>
    </section>
  );

}
