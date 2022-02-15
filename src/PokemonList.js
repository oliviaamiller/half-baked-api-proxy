

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((monster, i) =>
        <div className='pokemon-list' key={`${monster}-${i}`}> 
          <p>{monster.pokemon}</p>
          <img src={monster.url_image} />
        </div>)}
    </div>
  );
}
