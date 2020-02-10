import React, {useEffect, useState} from "react";
import axios from 'axios'
import { TimeDateContainer, Span } from "./Home.styles";

export default function TimeDateDisplay({weather}) {

  const [current, setCurrent] = useState({})
  const [date, setDate] = useState(new Date(Date.now()))

  const {
    api_key,
    zip_code
  } = weather

  useEffect(() => {

    const queryWeather = async () => {
      try {
        const apiURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip_code},us&appid=${api_key}&units=imperial`
        const resp = await axios.get(apiURL)
        setCurrent(resp.data)
      } catch(err) {
        console.error(err)
      }
    }

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
      {
        /*Show I con for weather here*/
      }
      {getTime()}
       <Span>
        {getDay()}
       </Span>
    </TimeDateContainer>
  );
}
