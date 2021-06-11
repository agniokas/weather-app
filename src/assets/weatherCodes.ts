import * as icon from "react-icons/wi";
import {IconType} from "react-icons"

const {WiDaySunny, 
    WiNightClear,
    WiDayCloudy, 
    WiNightAltPartlyCloudy, 
    WiCloudy, 
    WiNightCloudy, 
    WiDaySunnyOvercast,
    WiDayFog, 
    WiNightFog, 
    WiDayHail, 
    WiNightAltHail, 
    WiDaySnowWind, 
    WiNightAltSnow, 
    WiDaySleet, 
    WiNightSleet, 
    WiDayThunderstorm, 
    WiNightAltThunderstorm, 
    WiSnowWind, 
    WiSnow, 
    WiSnowflakeCold, 
    WiDayRainMix, 
    WiNightRainMix, 
    WiDaySprinkle,
    WiNightSprinkle,
    WiDayRain,
    WiNightRain,
    WiDayRainWind,
    WiNightAltRainWind, 
    WiDaySnow,
    WiNightSnow,
    WiDayShowers,
    WiNightShowers,
    WiNightThunderstorm,
    WiDaySleetStorm,
    WiNightSleetStorm} = icon;

export interface WeatherConditions {
    weatherCode: number;
    weatherDescription: string;
    iconDay: IconType;
    iconNight: IconType;
}

const weatherConditions: WeatherConditions[] = [
{
"weatherCode": 113,
"weatherDescription": "Sunny/Clear",
"iconDay": WiDaySunny,
"iconNight": WiNightClear
},
{
"weatherCode": 116,
"weatherDescription": "Partly cloudy",
"iconDay": WiDayCloudy,
"iconNight": WiNightAltPartlyCloudy
},
{
"weatherCode": 119,
"weatherDescription": "Cloudy",
"iconDay": WiCloudy,
"iconNight": WiNightCloudy
},
{
"weatherCode": 122,
"weatherDescription": "Overcast",
"iconDay": WiDaySunnyOvercast,
"iconNight": WiNightCloudy
},
{
"weatherCode": 143,
"weatherDescription": "Mist",
"iconDay": WiDayFog,
"iconNight": WiNightFog
},
{
"weatherCode": 176,
"weatherDescription": "Patchy rain possible",
"iconDay": WiDayHail,
"iconNight": WiNightAltHail
},
{
"weatherCode": 179,
"weatherDescription": "Patchy snow possible",
"iconDay": WiDaySnowWind,
"iconNight": WiNightAltSnow
},
{
"weatherCode": 182,
"weatherDescription": "Patchy sleet possible",
"iconDay": WiDaySleet,
"iconNight": WiNightSleet
},
{
"weatherCode": 185,
"weatherDescription": "Patchy freezing drizzle possible",
"iconDay": WiDaySleet,
"iconNight": WiNightSleet
},
{
"weatherCode": 200,
"weatherDescription": "Thundery outbreaks possible",
"iconDay": WiDayThunderstorm,
"iconNight": WiNightAltThunderstorm
},
{
"weatherCode": 227,
"weatherDescription": "Blowing snow",
"iconDay": WiSnowWind,
"iconNight": WiSnowWind
},
{
"weatherCode": 230,
"weatherDescription": "Blizzard",
"iconDay": WiSnow,
"iconNight": WiSnow
},
{
"weatherCode": 248,
"weatherDescription": "Fog",
"iconDay": WiDayFog,
"iconNight": WiNightFog
},
{
"weatherCode": 260,
"weatherDescription": "Freezing fog",
"iconDay": WiDayFog,
"iconNight": WiNightFog
},
{
"weatherCode": 263,
"weatherDescription": "Patchy light drizzle",
"iconDay": WiSnowflakeCold,
"iconNight": WiSnowflakeCold
},
{
"weatherCode": 266,
"weatherDescription": "Light drizzle",
"iconDay": WiSnowflakeCold,
"iconNight": WiSnowflakeCold
},
{
"weatherCode": 281,
"weatherDescription": "Freezing drizzle",
"iconDay": WiSnowflakeCold,
"iconNight": WiSnowflakeCold
},
{
"weatherCode": 284,
"weatherDescription": "Heavy freezing drizzle",
"iconDay": WiSnow,
"iconNight": WiSnow
},
{
"weatherCode": 293,
"weatherDescription": "Patchy light rain",
"iconDay": WiDayRainMix,
"iconNight": WiNightRainMix
},
{
"weatherCode": 296,
"weatherDescription": "Light rain",
"iconDay": WiDaySprinkle,
"iconNight": WiNightSprinkle
},
{
"weatherCode": 299,
"weatherDescription": "Moderate rain at times",
"iconDay": WiDayRain,
"iconNight": WiNightRain
},
{
"weatherCode": 302,
"weatherDescription": "Moderate rain",
"iconDay": WiDayRain,
"iconNight": WiNightRain
},
{
"weatherCode": 305,
"weatherDescription": "Heavy rain at times",
"iconDay": WiDayRain,
"iconNight": WiNightRain
},
{
"weatherCode": 308,
"weatherDescription": "Heavy rain",
"iconDay": WiDayRain,
"iconNight": WiNightRain
},
{
"weatherCode": 311,
"weatherDescription": "Light freezing rain",
"iconDay": WiDayRainWind,
"iconNight": WiNightAltRainWind
},
{
"weatherCode": 314,
"weatherDescription": "Moderate or Heavy freezing rain",
"iconDay": WiDayRainWind,
"iconNight": WiNightAltRainWind
},
{
"weatherCode": 317,
"weatherDescription": "Light sleet",
"iconDay": WiDaySleet,
"iconNight": WiNightSleet
},
{
"weatherCode": 320,
"weatherDescription": "Moderate or heavy sleet",
"iconDay": WiDaySleet,
"iconNight": WiNightSleet
},
{
"weatherCode": 323,
"weatherDescription": "Patchy light snow",
"iconDay": WiSnow,
"iconNight": WiSnow
},
{
"weatherCode": 326,
"weatherDescription": "Light snow",
"iconDay": WiSnow,
"iconNight": WiSnow
},
{
"weatherCode": 329,
"weatherDescription": "Patchy moderate snow",
"iconDay": WiSnow,
"iconNight": WiSnow
},
{
"weatherCode": 332,
"weatherDescription": "Moderate snow",
"iconDay": WiSnow,
"iconNight": WiSnow
},
{
"weatherCode": 335,
"weatherDescription": "Patchy heavy snow",
"iconDay": WiSnow,
"iconNight": WiSnow
},
{
"weatherCode": 338,
"weatherDescription": "Heavy snow",
"iconDay": WiSnow,
"iconNight": WiSnow
},
{
"weatherCode": 350,
"weatherDescription": "Ice pellets",
"iconDay": WiDaySnow,
"iconNight": WiNightSnow
},
{
"weatherCode": 353,
"weatherDescription": "Light rain shower",
"iconDay": WiDayShowers,
"iconNight": WiNightShowers
},
{
"weatherCode": 356,
"weatherDescription": "Moderate or heavy rain shower",
"iconDay": WiDayRain,
"iconNight": WiNightRain
},
{
"weatherCode": 359,
"weatherDescription": "Torrential rain shower",
"iconDay": WiDayRain,
"iconNight": WiNightRain
},
{
"weatherCode": 362,
"weatherDescription": "Light sleet showers",
"iconDay": WiDaySleet,
"iconNight": WiNightSleet
},
{
"weatherCode": 365,
"weatherDescription": "Moderate or heavy sleet showers",
"iconDay": WiDaySleet,
"iconNight": WiNightSleet
},
{
"weatherCode": 368,
"weatherDescription": "Light snow showers",
"iconDay": WiDaySnow,
"iconNight": WiNightSnow
},
{
"weatherCode": 371,
"weatherDescription": "Moderate or heavy snow showers",
"iconDay": WiDaySnow,
"iconNight": WiNightSnow
},
{
"weatherCode": 374,
"weatherDescription": "Light showers of ice pellets",
"iconDay": WiDaySnow,
"iconNight": WiNightSnow
},
{
"weatherCode": 377,
"weatherDescription": "Moderate or heavy showers of ice pellets",
"iconDay": WiDaySnow,
"iconNight": WiNightSnow
},
{
"weatherCode": 386,
"weatherDescription": "Patchy light rain in area with thunder",
"iconDay": WiDayThunderstorm,
"iconNight": WiNightThunderstorm
},
{
"weatherCode": 389,
"weatherDescription": "Moderate or heavy rain in area with thunder",
"iconDay": WiDayThunderstorm,
"iconNight": WiNightThunderstorm
},
{
"weatherCode": 392,
"weatherDescription": "Patchy light snow in area with thunder",
"iconDay": WiDaySleetStorm,
"iconNight": WiNightSleetStorm
},
{
"weatherCode": 395,
"weatherDescription": "Moderate or heavy snow in area with thunder",
"iconDay": WiDaySleetStorm,
"iconNight": WiNightSleetStorm
},

]

export default weatherConditions;