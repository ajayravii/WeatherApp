import React from "react"

const DisplayWeather = (props) => {
    const weatherData = props?.data
    return (
        <div>
            <h3>Weather data of {props?.cityName}</h3>
            <p>Temperature: {weatherData?.main?.temp}°C</p>
            <p>Humidity: {weatherData?.main?.humidity}%</p>
            <p>Wind Speed: {weatherData?.wind?.speed} m/s</p>
        </div>
    )
};

export default DisplayWeather;
