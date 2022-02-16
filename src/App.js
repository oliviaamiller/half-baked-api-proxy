import PokemonSearch from './PokemonSearch';
import YelpSearch from './YelpSearch';
import WeatherSearch from './WeatherSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherSearch />
      <PokemonSearch />
      <YelpSearch />
      
    </div>
  );
}

export default App;
