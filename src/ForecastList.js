export default function ForecastList({ forecasts, parseTime }) {
  return (
    <div>
      {forecasts.map((forecast, i) =>
        <div key={`${forecast}-${i}`}>
          <p>date: {parseTime(forecast.dt)}</p>
          <p>{forecast.description}</p>
          <p>temp: {forecast.temp}</p>
          <p>sunrise: {forecast.sunrise}</p>
          <p>sunset: {forecast.sunset}</p>
        </div>)}
    </div>
  );
}
