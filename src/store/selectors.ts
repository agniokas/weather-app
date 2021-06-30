import { formValueSelector, getFormValues } from "redux-form";
import { AllWeatherState, FormValues } from "./types";

export const getCurrentWeather = (state: AllWeatherState) => state.weather.currentWeather;
export const getunits = (state: AllWeatherState) => state.weather.units;
export const getPlace = (state: AllWeatherState) => state.weather.place;
export const getError = (state: AllWeatherState) => state.weather.error;
export const getWeatherDataLoaded = (state: AllWeatherState) => state.weather.weatherDataLoaded;
export const getWeatherState = (state: AllWeatherState) => state.weather;

export const getWeatherValues = getFormValues("weatherForm");
export const getFormWeatherState = (state: AllWeatherState): FormValues => getWeatherValues(state);

