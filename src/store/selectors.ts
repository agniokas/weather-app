import { createSelector } from "reselect";
import WeatherState, { CityState, Weather, AllWeatherState } from "./types";

export const getCurrentWeather = (state: AllWeatherState) => state.weather.currentWeather;
export const getunits = (state: AllWeatherState) => state.weather.units;
export const getPlace = (state: AllWeatherState) => state.weather.place;
export const getError = (state: AllWeatherState) => state.weather.error;
export const getWeatherDataLoaded = (state: AllWeatherState) => state.weather.weatherDataLoaded;