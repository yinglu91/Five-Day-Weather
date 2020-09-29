import React from 'react';
import { useSelector } from 'react-redux';
import Chart from './Chart';
import Map from './Map';

const WeatherList = () => {
  const weather = useSelector((state) => state.weather);

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature (°F)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
      </thead>
      <tbody>
        {weather.map(({ city, list }) => {
          const name = city.name;
          const temps = list.map(
            (weather) => ((weather.main.temp - 273.15) * 9) / 5 + 32
          );
          const pressures = list.map((weather) => weather.main.pressure);
          const humidities = list.map((weather) => weather.main.humidity);

          const { lon, lat } = city.coord;
          const center = { lng: lon, lat };

          return (
            <tr key={name}>
              <td>
                <Map center={center} zoom={12} />
                {/* {name} */}
              </td>
              <td>
                <Chart items={temps} color="orange" units="°F" />
              </td>
              <td>
                <Chart items={pressures} color="green" units="hPa" />
              </td>
              <td>
                <Chart items={humidities} color="black" units="%" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default WeatherList;
