

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((monster, i) =>
        <div key={`${monster}-${i}`}> 
          <img src={monster.url_image} />
          <p className='search-name'>{monster.pokemon}</p>
        </div>)}
    </div>
  );
}
