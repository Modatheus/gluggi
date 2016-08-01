import React from 'react'
import moment from 'moment'
import CloudDrizzleMoon from '-!babel!svg-react!app/assets/svg/cloud-drizzle-moon.svg'
import CloudDrizzleSun from '-!babel!svg-react!app/assets/svg/cloud-drizzle-sun.svg'
import CloudDrizzle from '-!babel!svg-react!app/assets/svg/cloud-drizzle.svg'
import CloudFogMoon from '-!babel!svg-react!app/assets/svg/cloud-fog-moon.svg'
import CloudFogSun from '-!babel!svg-react!app/assets/svg/cloud-fog-sun.svg'
import CloudFog from '-!babel!svg-react!app/assets/svg/cloud-fog.svg'
import CloudHailMoon from '-!babel!svg-react!app/assets/svg/cloud-hail-moon.svg'
import CloudHailSun from '-!babel!svg-react!app/assets/svg/cloud-hail-sun.svg'
import CloudHail from '-!babel!svg-react!app/assets/svg/cloud-hail.svg'
import CloudLightningMoon from '-!babel!svg-react!app/assets/svg/cloud-lightning-moon.svg'
import CloudLightningSun from '-!babel!svg-react!app/assets/svg/cloud-lightning-sun.svg'
import CloudLightning from '-!babel!svg-react!app/assets/svg/cloud-lightning.svg'
import CloudMoon from '-!babel!svg-react!app/assets/svg/cloud-moon.svg'
import CloudRainMoon from '-!babel!svg-react!app/assets/svg/cloud-rain-moon.svg'
import CloudRainSun from '-!babel!svg-react!app/assets/svg/cloud-rain-sun.svg'
import CloudRain from '-!babel!svg-react!app/assets/svg/cloud-rain.svg'
import CloudSnowMoon from '-!babel!svg-react!app/assets/svg/cloud-snow-moon.svg'
import CloudSnowSun from '-!babel!svg-react!app/assets/svg/cloud-snow-sun.svg'
import CloudSnow from '-!babel!svg-react!app/assets/svg/cloud-snow.svg'
import CloudSun from '-!babel!svg-react!app/assets/svg/cloud-sun.svg'
import Cloud from '-!babel!svg-react!app/assets/svg/cloud.svg'
import Moon from '-!babel!svg-react!app/assets/svg/moon.svg'
import Snowflake from '-!babel!svg-react!app/assets/svg/snowflake.svg'
import Sun from '-!babel!svg-react!app/assets/svg/sun.svg'
import Sunrise from '-!babel!svg-react!app/assets/svg/sunrise.svg'
import Sunset from '-!babel!svg-react!app/assets/svg/sunset.svg'
import Tornado from '-!babel!svg-react!app/assets/svg/tornado.svg'
import Wind from '-!babel!svg-react!app/assets/svg/wind.svg'

const icons = {
  'thunderstorm': <CloudLightning />,
  'lightning': <CloudLightning />,
  'sprinkle': <CloudDrizzle />,
  'rain': <CloudRain />,
  'rain-mix': <CloudHail />,
  'showers': <CloudRain />,
  'storm-showers': <CloudRain />,
  'snow': <CloudSnow />,
  'sleet': <CloudSnow />,
  'smoke': <CloudFog />,
  'day-haze': <CloudFogSun />,
  'dust': <CloudFog />,
  'fog': <CloudFog />,
  'cloudy-gusts': ['cloud.svg', 'wind.svg'],
  'tornado': <Tornado />,
  'day-sunny': <Sun />,
  'clouds': <Cloud />,
  'cloudy': <Cloud />,
  'hurricane': <Tornado />,
  'snowflake-cold': <CloudSnow />,
  'hot': <Sun />,
  'windy': <Wind />,
  'hail': <CloudHail />,
  'strong-wind': ['wind.svg', 'wind.svg'],
  'day-clouds': <CloudSun />,
  'day-cloudy': <CloudSun />,
  'day-clear': <Sun />,
  'day-thunderstorm': <CloudLightningSun />,
  'day-lightning': <CloudLightningSun />,
  'day-sprinkle': <CloudDrizzleSun />,
  'day-rain': <CloudRainSun />,
  'day-rain-mix': <CloudHailSun />,
  'day-showers': <CloudRainSun />,
  'day-storm-showers': <CloudLightningSun />,
  'day-snow': <CloudSnowSun />,
  'day-sleet': <CloudSnowSun />,
  'day-fog': <CloudFogSun />,
  'day-sunny': <Sun />,
  'day-cloudy-gusts': ['cloud-sun.svg', 'wind.svg'],
  'day-sunny-overcast': <CloudSun />,
  'night-thunderstorm': <CloudLightningMoon />,
  'night-lightning': <CloudLightningMoon />,
  'night-sprinkle': <CloudDrizzleMoon />,
  'night-rain': <CloudRainMoon />,
  'night-rain-mix': <CloudDrizzleMoon />,
  'night-showers': <CloudDrizzleMoon />,
  'night-storm-showers': ['cloud-drizzle-moon.svg', 'wind.svg'],
  'night-sleet': <CloudDrizzleMoon />,
  'night-snow': <CloudSnowMoon />,
  'night-fog': <CloudFogMoon />,
  'night-dust': <CloudFogMoon />,
  'night-tornado': <Tornado />,
  'night-clear': <Moon />,
  'night-cloudy-gusts': ['cloud-moon.svg', 'wind.svg'],
  'night-clouds': <CloudMoon />,
  'night-cloudy': <CloudMoon />,
  'night-hurricane': <Tornado />,
  'night-snowflake-cold': <CloudSnowMoon />,
  'night-hot': <Moon />,
  'night-hail': <CloudHailMoon />
}

export default (keyword, weatherTime, sunrise, sunset, clouds) => {
  if (!sunrise || !sunset || clouds > 80) {
    return icons[keyword]
  }

  // Assume forecast is in the future, and if not the same day it must be the next
  // Subtract a day and use todays sunrise/sunset to calculate
  const time = weatherTime.isSame(moment(), 'day')
    ? weatherTime
    : weatherTime.subtract(1, 'days')

  const sinceSunrise = time.diff(moment.unix(sunrise), 'hours')
  const untillSunset = moment.unix(sunset).diff(time, 'hours')
  const nextDay = moment().diff(time, 'days')

  if (untillSunset < 1) {
    return icons[`night-${keyword}`]
  } else if (sinceSunrise > 1) {
    return icons[`day-${keyword}`]
  }

  return icons[keyword]
}
