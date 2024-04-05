// Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=yavatmal&appid=9f6fb150382ef939bb17cc53e05a992c&units=imperial`
        );
        setWeatherData(response.data);
        setError(null); 
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Error fetching weather data. Please try again.'); 
      }
    };

    fetchWeather(); 

  }, []);

  const convertToFahrenheit = (temp) => {
    return ((temp - 32) * 5) / 9;
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
  <span>
    <span className='h5 ms-3'><i className="bi bi-geo-alt-fill"></i> {weatherData.name}, {weatherData.sys.country}</span>
    <span className='ms-3'><i className="bi bi-thermometer "></i> {convertToFahrenheit(weatherData.main.temp).toFixed(2)}°C</span>
    <span className=' ms-3'><i className="bi bi-moisture mx-2"></i> {weatherData.main.humidity}% , ({weatherData.weather[0].main})</span>
    <span className=' ms-3'><i className="bi bi-sunrise mx-2"></i> {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()} </span>
    <span className=' ms-3'><i className="bi bi-sunset mx-2"></i> {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()} </span>
  </span>
)}

    </div>
  );
};

export default Weather;
