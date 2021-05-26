import { createSelector } from "reselect";
import WeatherState, { Weather } from "./types";

export const getCurrentWeather = (state: WeatherState) => state.currentWeather;
export const getunits = (state: WeatherState) => state.units;
export const getPlace = (state: WeatherState) => state.place;
export const getError = (state: WeatherState) => state.error;
export const getWeatherDataLoaded = (state: WeatherState) => state.weatherDataLoaded;
