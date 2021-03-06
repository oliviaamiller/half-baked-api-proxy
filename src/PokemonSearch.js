import { useState } from 'react';
import PokemonList from './PokemonList';
import Spinner from './Spinner';

export default function PokemonSearch() {
  // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('Pikachu');
  const [loadingState, setLoadingState] = useState(false);

  
  async function handlePokemonSubmit(e) {
    e.preventDefault();
      
    // set the loading state to true
    setLoadingState(true);

    // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
    const response = await fetch(`/.netlify/functions/pokemon?search=${search}`);
  
        // put the jsonified data in state and set the loading state to false
    const json = await response.json();
    setPokemon(json);

    setLoadingState(false);
  }
      
  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}

      <form onSubmit={handlePokemonSubmit}>
            Search for Pokemon by name
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <input required value={search} onChange={e => setSearch(e.target.value)} />

        <button>Get Pokemon</button>
      </form>
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      <div>
        { loadingState ? <Spinner /> : <PokemonList pokemon={pokemon} /> }
      </div>
    </section>
  );

}
