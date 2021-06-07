import React from 'react';
import { useSelector } from "react-redux";
import { getCurrentWeather } from "../store/selectors";

const additionalInfoElement: React.FC<{}> = () => {

    const currentWeather = useSelector(getCurrentWeather);

    return (
        <div  className="element-wrap">
            <div className="element-wrap__info">
                <p className="info-data">{currentWeather?.feelsLike}&#176;</p>
                <p className="info-description">Feels</p>
            </div>
            <div className="element-wrap__info">
                <p className="info-data">{currentWeather?.uvIndex}</p>
                <p className="info-description">UV index</p>
            </div>
            <div className="element-wrap__info">
                <p className="info-data">{currentWeather?.humidity}%</p>
                <p className="info-description">Humidity</p>
            </div>
            <div className="element-wrap__info">
                <p className="info-data">{currentWeather?.precipitation}mm</p>
                <p className="info-description">Rain</p>
            </div>
            <div className="element-wrap__info">
                <p className="info-data">{currentWeather?.windSpeed}mph</p>
                <p className="info-description">Wind</p>
            </div>
            <div className="element-wrap__info">
                <p className="info-data">{currentWeather?.windDirection}</p>
                <p className="info-description">Wind direction</p>
            </div>
        </div>
    )
}

export default additionalInfoElement
