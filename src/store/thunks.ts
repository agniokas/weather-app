import axios from "axios";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import moment from "moment";

import { apiKey } from "../../apiKey";
import WeatherState, * as actions from "./types";

const BaseUrl = 'http://api.weatherstack.com/';

export interface Params {
    access_key: string,
    query: string,
    units: string
}

export const fetchWeatherAction = (): ThunkAction<void, WeatherState, unknown, AnyAction> => (dispatch, getState) => {

    console.log("current state: ", getState());

    const state = getState();

    const params: Params = {
        access_key: apiKey,
        query: state.place,
        units: state.units
    }
  
   axios.get(`${BaseUrl}current`, {params})
   .then(response => {
       console.log("response", response);
        const current = response.data.current;
        const location = response.data.location;

        dispatch({
            type: actions.FETCH_WEATHER_SUCCESS,
            payload: {
                temperature: current.temperature, 
                feelsLike: current.feelslike,
                humidity: current.humidity,
                weatherDescription: current.weather_descriptions[0],
                weatherIcon: current.weather_icons[0],
                windSpeed: current.wind_speed,
                windDirection: current.wind_dir,
                lastUpdated: moment().format('HH:mm'),
                city: location.name,
                country: location.country,
                isDay: current.is_day
            }
        })
    })
    .catch(error => {
        dispatch({
            type: actions.FETCH_WEATHER_ERROR,
            payload: "ups... something went wrong, try another time."
        })
    })
    
}
