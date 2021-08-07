import React, {useEffect, useState} from "react";
import axios from 'axios'
import {
  SunIcon,
  TimeDateContainer,
  Span
} from "./Home.styles";
import sunIcon from '../../assets/sun_icon.svg'
import {useInterval} from '../../hooks/useInterval'

//
// clear_night.png -> Clear_Night
// sun.png -> Clear
// cloudy.png -> Clouds
// fog.png -> Fogw
// rain.png -> Drizzle | Rain
// snow.png -> Snow
// thunderstorm.png -> Thunderstorm
// wind.png
// partly_cloudy_day.png
// partly_cloudy_night.png
//
export default function TimeDateDisplay({weather}) {

  const [current, setCurrent] = useState({})
  const [date, setDate] = useState(new Date(Date.now()))

  const {
    api_key,
    zip_code
  } = weather

  const weatherIcons = {
    Clear_Night: 'clear_night.png',
    Clear : 'sun.png',
    Clouds : 'cloudy.png',
    Fogw: 'fog.png',
    Rain : 'rain.png',
    Snow : 'snow.png',
    Thunderstorm: 'thunderstorm.png',
  }

  const queryWeather = async () => {
    try {
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip_code},us&appid=${api_key}&units=imperial`
      const resp = await axios.get(apiURL)
      setCurrent(resp.data)
    } catch(err) {
      console.error(err)
    }
  }

  useInterval(() => {
    setDate(new Date(Date.now()))
  }, 1000)

  useInterval(() => {
    api_key && zip_code && queryWeather()
  }, (1000 * 60 * 60))

  useEffect(() => {
    api_key && zip_code && queryWeather();
  }, [])

  const getTime = () => {
    let _h = date.getHours()
    let _m = date.getMinutes()

    const _ampm = (12 > _h) ? 'AM' : 'PM'

    // correct for military time
    if (12 < _h) {
      _h = (_h - 12)
    }

    if (10 > _m) {
      _m = `0${_m}`
    }

    return `${_h}:${_m} ${_ampm} `
  }

  const getDay = () => {
    const _week = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]

    const _months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

    const _day = date.getDay()
    const _month = date.getMonth()
    const _date = date.getDate()

    return `${_week[_day]}, ${_months[_month]} ${_date}`
  }

  return (
    <TimeDateContainer>
      {current.main
        && `${Math.round(current.main.temp)}º `
      }
      {current.weather
        && <SunIcon src={require(`../../assets/weatherIcons/${weatherIcons[current.weather[0].main]}`)} />
      }
      {
        // getTime()
      }
       <Span>
        {getDay()}
       </Span>
    </TimeDateContainer>
  );
}
