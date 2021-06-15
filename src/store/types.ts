import { IconType } from "react-icons/lib"

export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR'
export const CHANGE_PLACE = 'CHANGE_PLACE'
export const CHANGE_UNITS = 'CHANGE_UNITS'

export interface Weather {
    temperature: number, 
    feelsLike: number,
    humidity: number,
    weatherDescription: string,
    weatherCode: number,
    windSpeed: number,
    windDirection: string,
    weatherIcon: string,
    precipitation: number,
    uvIndex: number,
    lastUpdated: string,
    city: string,
    country: string,
    isDay: string,
}

export default interface WeatherState {
    currentWeather: Weather | null,
    place: string,
    units: string,
    error: string,
    weatherDataLoaded: boolean
}

export interface AllWeatherState {
    weather: WeatherState
}

export interface CityState {
    city: string
}

export interface UnitsState {
    units: string
}

export interface FormValues {
    city?: string,
    units?: string
}


