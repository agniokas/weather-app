export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS'
export const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR'
export const CHANGE_PLACE = 'CHANGE_PLACE'
export const CHANGE_UNITS = 'CHANGE_UNITS'

export interface Weather {
    temperature: number, 
    feelsLike: number,
    humidity: number,
    weatherDescription: string,
    weatherIcon: string,
    windSpeed: number,
    windDirection: string,
    lastUpdated: string,
    city: string,
    country: string,
    isDay: boolean
}

export default interface WeatherState {
    currentWeather: Weather | null,
    place: string,
    units: string,
    error: string,
    weatherDataLoaded: boolean
}