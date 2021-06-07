import React from "react";
import * as icon from "react-icons/wi";

import weatherConditions from "../assets/weatherCodes";
import { Weather } from "../store/types";

const mainWeatherInfoElement: React.FC<{ currentWeather: Weather | null, units: string}> = (props) => {
    const currentWeather = props.currentWeather;
    const units = props.units;
    
    
    let weatherIcon = weatherConditions.filter(condition => {
        return currentWeather?.weatherCode.valueOf() === condition.weatherCode.valueOf()
         }
     ).map(icon => 
        {if (currentWeather?.isDay === "yes"){ return icon.iconDay} else {return icon.iconNight}})[0]
 
    return (
        <div className="element-wrap grid">
            <div className="element-wrap__main">
                <div className="weather-icon">
                    <img 
                    src={`icon.${weatherIcon}`} 
                    // src={currentWeather?.weatherIcon} 
                    alt={currentWeather?.weatherDescription} />
                    </div>
                <div className="weather-data">
                    <p className="weather-data__temperature">{currentWeather?.temperature}&#176;</p>
                    <p className="weather-data__description">{currentWeather?.weatherDescription}</p>
                </div>
            </div>
            <div  className="element-wrap__secondary">
                <div className="info-wrap">
                    <p className="info-data">{currentWeather?.feelsLike}&#176;</p>
                    <p className="info-description">Feels</p>
                </div>
                <div className="info-wrap">
                    <p className="info-data">{currentWeather?.uvIndex}</p>
                    <p className="info-description">UV index</p>
                </div>
                <div className="info-wrap">
                    <p className="info-data">{currentWeather?.humidity}%</p>
                    <p className="info-description">Humidity</p>
                </div>
                <div className="info-wrap">
                    <p className="info-data">{currentWeather?.precipitation}mm</p>
                    <p className="info-description">Rain</p>
                </div>
                <div className="info-wrap">
                    <p className="info-data">{currentWeather?.windSpeed}{units === "m" ? "kph" : "mph"}</p>
                    <p className="info-description">Wind</p>
                </div>
                <div className="info-wrap">
                    <p className="info-data">{currentWeather?.windDirection}</p>
                    <p className="info-description">Wind direction</p>
                </div>
            </div>
        </div>
    )
}

export default mainWeatherInfoElement
