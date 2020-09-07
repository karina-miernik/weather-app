import React from 'react'

const dateGenerator = (d) => {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  let day = days[d.getDay()]
  let date = d.getDate()
  let month = months[d.getMonth()]
  let year = d.getFullYear()
  return `${day}, ${date} ${month} ${year}`
}

const LocationBox = ({ weatherName, weatherCountry }) => {
  return (
    <>
      <div className="location-box">
        <div className="location">
          {weatherName}, {weatherCountry}
        </div>
        <div className="date">{dateGenerator(new Date())}</div>
      </div>
    </>
  )
}

export default LocationBox
