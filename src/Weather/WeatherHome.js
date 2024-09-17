import React, { useState } from "react";
import axios from 'axios';
import './WeatherHome.css'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import DisplayWeather from "./DisplayWeather";
const WeatherHome = (props) => {
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const apiKey = "9f0218da36d56535285a2b5ec35e9522"
  const [cityName, setCityName] = useState('')
  const [weatherData, setweatherData] = useState(null)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(baseUrl, {
        params: {
          q: cityName,
          units: "metric",
          appid: apiKey,
        }
      })
      if (response) {
        setweatherData(response.data)
      }
    }
    catch (e) {
      alert(e.message)
    }
  }
  return (
    <div className="main">
      <h1>Weather App</h1>
      <h3>Enter City to get it's weather updates</h3>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="city" placeholder="Enter the city name..." onChange={(e) => setCityName(e.target.value)} />
        <br></br><br></br>
        <Button type="submit" variant="contained">Get Weather</Button>
        {weatherData && (<DisplayWeather data={weatherData} cityName={cityName} />)}
      </form>
    </div>
  )
};

export default WeatherHome;
