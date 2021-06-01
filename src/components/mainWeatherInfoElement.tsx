import React from "react";
import { useSelector } from "react-redux";
import * as icon from "react-icons/wi";

import { getCurrentWeather } from "../store/selectors";
import weatherConditions from "../assets/weatherCodes";

const mainWeatherInfoElement: React.FC<{}> = () => {
    const currentWeather = useSelector(getCurrentWeather);
    
    // let weatherIcon = weatherConditions.filter(condition => {
    //     return currentWeather?.weatherCode.valueOf() === condition.weatherCode.valueOf()
    //      }
    //  ).map(icon => 
    //     {if (currentWeather?.isDay === "yes"){ return icon.iconDay} else {return icon.iconNight}})[0]
 
    return (
        <div className="element-wrap">
        <div className="element-wrap-main">
            <div className="weather-icon">
                <img src={currentWeather?.weatherIcon} alt={currentWeather?.weatherDescription} />
                </div>
            <div>
                <p className="weather-temperature">{currentWeather?.temperature}&#176;</p>
                <p className="weather-description">{currentWeather?.weatherDescription}</p>
            </div>
        </div>
        <div  className="element-wrap-secondary">
        <div>
            <p className="info-data">{currentWeather?.feelsLike}&#176;</p>
            <p className="info-description">Feels</p>
        </div>
        <div>
            <p className="info-data">{currentWeather?.uvIndex}</p>
            <p className="info-description">UV index</p>
        </div>
        <div>
            <p className="info-data">{currentWeather?.humidity}%</p>
            <p className="info-description">Humidity</p>
        </div>
        <div>
            <p className="info-data">{currentWeather?.precipitation}mm</p>
            <p className="info-description">Rain</p>
        </div>
        <div>
            <p className="info-data">{currentWeather?.windSpeed}mph</p>
            <p className="info-description">Wind</p>
        </div>
        <div>
            <p className="info-data">{currentWeather?.windDirection}</p>
            <p className="info-description">Wind direction</p>
        </div>
    </div>
        </div>
    )
}

export default mainWeatherInfoElement
