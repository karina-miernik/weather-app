import React from 'react'
const api = {
  key: 'git@github.com:karina-miernik/weather-app.git',
  base: 'http://api.openweathermap.org/data/2.5',
}
function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  )
}

export default App
