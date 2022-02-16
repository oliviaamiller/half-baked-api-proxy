export default function ForecastList({ forecasts, parseTime }) {
  return (
    <div>
      {forecasts.map((forecast, i) =>
        <div key={`${forecast}-${i}`}>
          <img />
          <p className='search-name'>{parseTime(forecast.dt)}</p>
          <p>{forecast.weather[0].description}</p>
          <p>low: {forecast.temp.min}°F</p>
          <p>high: {forecast.temp.max}°F</p>
        </div>)}
    </div>
  );
}
