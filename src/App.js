import React, { useState } from 'react'
import DateGenerator from './components/DateGenerator'
import WeatherBox from './components/WeatherBox'
import LocationBox from './components/LocationBox'
import SearchBox from './components/SearchBox'
const api = {
  key: '3d489f7ac00fe3d4d4f58ae16fa86e48',
  base: 'https://api.openweathermap.org/data/2.5/',
}

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result)
          setQuery('')
          console.log(result)
        })
    }
  }
  const SwitchImg = () => {
    if (
      typeof weather.main != 'undefined' &&
      weather.main.temp > 26 &&
      weather.weather[0].main !== 'Rain'
    ) {
      return 'app hot'
    }
    if (
      typeof weather.main != 'undefined' &&
      weather.main.temp > 16 &&
      weather.weather[0].main !== 'Rain'
    ) {
      return 'app warm'
    }
    if (
      typeof weather.main != 'undefined' &&
      weather.main.temp > 6 &&
      weather.weather[0].main !== 'Rain'
    ) {
      return 'app cold'
    }
    if (
      typeof weather.main != 'undefined' &&
      weather.main.temp < 6 &&
      weather.weather[0].main !== 'Rain'
    ) {
      return 'app snow'
    }

    if (
      typeof weather.main != 'undefined' &&
      weather.weather[0].main === 'Rain'
    ) {
      return 'app rain'
    } else {
      return 'app'
    }
  }
  return (
    <div className={SwitchImg()}>
      <main>
        <SearchBox
          handleOnChange={(e) => setQuery(e.target.value)}
          handleOnPress={search}
          value={query}
        />
        {typeof weather.main != 'undefined' ? (
          <div>
            <LocationBox
              weatherName={weather.name}
              weatherCountry={weather.sys.country}
            />
            <WeatherBox
              weatherTemp={weather.main.temp}
              weatherMain={weather.weather[0].main}
            />
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  )
}

export default App
