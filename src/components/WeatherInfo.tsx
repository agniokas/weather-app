import React from "react";
import { IconType } from "react-icons/lib";
import { useSelector } from "react-redux";
import {WiDaySunny} from "react-icons/wi";
import LinearProgress from "@material-ui/core/LinearProgress"
import { useTranslation } from "react-i18next";

import weatherConditions from "../assets/weatherCodes";
import { getCurrentWeather, getunits, getWeatherDataLoaded } from "../store/selectors";

const WeatherInfo = () => {
    const currentWeather = useSelector(getCurrentWeather);
    const units = useSelector(getunits);
    const weatherDataLoaded = useSelector(getWeatherDataLoaded);
    
    const { t } = useTranslation();
    
    const weatherCondition = weatherConditions.find(condition => {
         if (condition.weatherCode === currentWeather?.weatherCode) {
             return condition
         } else return null;
    });

    const WeatherIcon: IconType = (currentWeather?.isDay ? weatherCondition?.iconDay : weatherCondition?.iconNight) || WiDaySunny;

    return (
        <>
            {!weatherDataLoaded && <LinearProgress />}

            {weatherDataLoaded && 
            <div>
                <div className="element-wrap">
                    <p className="location">
                        {currentWeather?.city}, <span>{currentWeather?.country}</span>
                    </p>
                    <p className="date">{ t("Current date") }</p>
                </div>
                <div className="element-wrap grid">
                    <div className="element-wrap__main">
                        <div className="weather-icon">
                            {<WeatherIcon />}
                        </div>
                        <div className="weather-data">
                            <p className="weather-data__temperature">{currentWeather?.temperature}&#176;</p>
                            <p className="weather-data__description">
                                {t(`weatherDescription.${currentWeather?.weatherDescription}`)}
                            </p>
                        </div>
                    </div>
                    <div  className="element-wrap__secondary">
                        <div className="info-wrap">
                            <p className="info-data">{currentWeather?.feelsLike}&#176;</p>
                            <p className="info-description">{t("Feels")}</p>
                        </div>
                        <div className="info-wrap">
                            <p className="info-data">{currentWeather?.uvIndex}</p>
                            <p className="info-description">{t("UV index")}</p>
                        </div>
                        <div className="info-wrap">
                            <p className="info-data">{currentWeather?.humidity}%</p>
                            <p className="info-description">{t("Humidity")}</p>
                        </div>
                        <div className="info-wrap">
                            <p className="info-data">{currentWeather?.precipitation}mm</p>
                            <p className="info-description">{t("Rain")}</p>
                        </div>
                        <div className="info-wrap">
                            <p className="info-data">{currentWeather?.windSpeed}{units === "m" ? "kph" : "mph"}</p>
                            <p className="info-description">{t("Wind")}</p>
                        </div>
                        <div className="info-wrap">
                            <p className="info-data">{currentWeather?.windDirection}</p>
                            <p className="info-description">{t("Wind direction")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default WeatherInfo
