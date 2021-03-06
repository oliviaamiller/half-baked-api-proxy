
export default function BusinessesList({ businesses }) {
  return (
    <div>
      {businesses.map((business, i) =>
        <div key={`${business}-${i}`}>
          <img src={business.image_url} />
          <p className='search-name'>{business.name}</p>
        </div>)}
    </div>
  );
}
