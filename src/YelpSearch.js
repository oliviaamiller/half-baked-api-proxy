import { useState } from 'react';
import BusinessesList from './BusinessesList';
import Spinner from './Spinner';

export default function YelpSearch() {
  // you'll need to track your yelp search results, the loading state, and a form field for location with a default value.
  const [businesses, setBusinesses] = useState([]);
  const [search, setSearch] = useState('Portland, OR');
  const [loadingState, setLoadingState] = useState(false);

  async function handleYelpSubmit(e) {
    e.preventDefault();
  
    // set the loading state to true
    setLoadingState(true);
    // use fetch to make a request to your netlify yelp function. Be sure to pass the search query as a query param in the URL
    const response = await fetch(`/.netlify/functions/yelp?search=${search}`);
  
    // put the jsonified data in state and set the loading state to false
    const json = await response.json();
    setBusinesses(json);

    setLoadingState(false);
  }
  
  return (
    <section className='yelp'>
      {/* make the fetch on submit */}
      <form onSubmit={handleYelpSubmit}>
        Search Yelp by city
        {/* add inputs/labels for city name, state, and country, using all the things we need with react forms. Don't forget to use the value property to sync these up with the default values in react state */}
        <input required value={search} onChange={e => setSearch(e.target.value)} />
        
        <button>Search Yelp</button>
      </form>
      {/* Make a BusinessesList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      <div>
        { loadingState ? <Spinner /> : <BusinessesList businesses={businesses} /> }
      </div>
    </section>
  );
}
  
