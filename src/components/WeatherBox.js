import React from 'react'

const WeatherBox = ({ weatherTemp, weatherMain }) => {
  return (
    <div className="weather-box">
      <div className="temp">{Math.round(weatherTemp)}&#176;C</div>
      <div className="weather">{weatherMain}</div>
    </div>
  )
}

export default WeatherBox
